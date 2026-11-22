import { useState } from 'react';
import { WHATSAPP_NUMBER, CONTACT_EMAIL } from '../data/site.js';
import './ContactForm.css';

/*
  Formulário "Pronto para o próximo passo?".
  Ao enviar, os dados vão para DOIS lugares:
  1. WhatsApp: abre o wa.me com uma mensagem já preenchida com todos os campos.
  2. E-mail: envia para CONTACT_EMAIL pelo FormSubmit (https://formsubmit.co), sem backend.
     IMPORTANTE: no primeiro envio o FormSubmit manda um e-mail de ativação para
     CONTACT_EMAIL; é preciso clicar no link de confirmação uma única vez para
     começar a receber os contatos.
*/
const EMPTY = { nome: '', empresa: '', email: '', telefone: '' };

function buildWhatsAppUrl(v) {
  const text = [
    'Olá! Gostaria de uma cotação (enviado pelo site).',
    '',
    `Nome: ${v.nome}`,
    `Empresa: ${v.empresa}`,
    `Email: ${v.email}`,
    `Telefone: ${v.telefone}`,
  ].join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

async function sendEmail(v) {
  const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      _subject: `Nova cotação pelo site - ${v.nome}`,
      _template: 'table',
      Nome: v.nome,
      Empresa: v.empresa,
      email: v.email, // o FormSubmit usa este campo como "responder para"
      Telefone: v.telefone,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || String(data.success) !== 'true') {
    throw new Error(data.message || `Erro ${res.status}`);
  }
}

export default function ContactForm({ compact = false }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [values, setValues] = useState(EMPTY);

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    const v = { ...values };

    // Abre o WhatsApp na hora do clique (senão o navegador bloqueia o pop-up)
    window.open(buildWhatsAppUrl(v), '_blank', 'noopener,noreferrer');

    setStatus('sending');
    try {
      await sendEmail(v);
      setStatus('sent');
      setValues(EMPTY);
    } catch (err) {
      console.error('Falha ao enviar o e-mail do formulário:', err);
      setStatus('error');
    }
  };

  return (
    <form className={`cform${compact ? ' cform--compact' : ''}`} onSubmit={handleSubmit}>
      <h2 className="cform__title">Pronto para o próximo passo?</h2>
      <p className="cform__text">Preencha esse formulário e receba uma cotação específica para o seu negócio.</p>
      <div className="cform__fields">
        <input className="cform__input" name="nome" placeholder="Nome:" aria-label="Nome" required value={values.nome} onChange={onChange} />
        <input className="cform__input" name="empresa" placeholder="Empresa:" aria-label="Empresa" value={values.empresa} onChange={onChange} />
        <input className="cform__input" name="email" type="email" placeholder="Email:" aria-label="Email" required value={values.email} onChange={onChange} />
        <input className="cform__input" name="telefone" type="tel" placeholder="Telefone:" aria-label="Telefone" value={values.telefone} onChange={onChange} />
      </div>
      <button className="cform__btn" type="submit" disabled={status === 'sending'}>Enviar</button>
      {status === 'sent' && <p className="cform__ok" role="status">Obrigado pelo envio!</p>}
      {status === 'error' && (
        <p className="cform__ok cform__ok--error" role="alert">
          Não foi possível enviar o e-mail. Tente novamente ou fale conosco pelo WhatsApp.
        </p>
      )}
    </form>
  );
}
