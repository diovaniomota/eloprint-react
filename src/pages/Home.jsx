import { WHATSAPP_URL } from '../data/site.js';
import ContactForm from '../components/ContactForm.jsx';
import LogoMarquee from '../components/LogoMarquee.jsx';
import Slideshow from '../components/Slideshow.jsx';
import iconCustos from '../assets/img/icon-custos.png';
import iconEficiencia from '../assets/img/icon-eficiencia.png';
import iconSustentabilidade from '../assets/img/icon-sustentabilidade.png';
import iconTecnologia from '../assets/img/icon-tecnologia.png';
import iconSeguranca from '../assets/img/icon-seguranca.png';
import iconSuprimentos from '../assets/img/icon-suprimentos.png';
import indicadores from '../assets/img/indicadores.png';
import outsourcingFoto from '../assets/img/outsourcing-foto.png';
import outsourcingFotoMobile from '../assets/img/outsourcing-foto-mobile.png';
import equip1 from '../assets/img/equip-1.png';
import equip2 from '../assets/img/equip-2.png';
import equip3 from '../assets/img/equip-3.png';
import equip4 from '../assets/img/equip-4.png';
import statAtend from '../assets/img/stat-atendimentos.png';
import statImpr from '../assets/img/stat-impressoes.png';
import statEquip from '../assets/img/stat-equipamentos.png';
import statClientes from '../assets/img/stat-clientes.png';
import './Home.css';

/* Cartões "a Eloprint pode fazer". As posições (desktop) seguem o layout do Wix. */
const SOLUCOES = [
  {
    icon: iconCustos, iw: 59, ih: 54, ix: 47, iy: 28,
    m: { top: 117, h: 224, left: 37, ix: 23, iy: 23, iw: 59, ih: 54, tx: 59, ty: 27, tw: 157, ts: 16, tlh: 22.08, px: 10, py: 86, pw: 222, center: true, title: ['Redução de', 'Custos'] },
    title: ['Redução de', 'Custos'], size: 20, lh: 27.6, tx: 109, ty: 28,
    text: 'Empresas que adotam outsourcing de impressão podem experimentar uma redução significativa nos custos, estimada entre 30% a 40%, devido à eliminação de despesas operacionais, manutenção e atualizações de equipamentos.',
    px: 24, py: 113, pw: 246,
  },
  {
    icon: iconEficiencia, iw: 64, ih: 64, ix: 36, iy: 19,
    m: { top: 360, h: 238, left: 38, ix: 25, iy: 12, iw: 60, ih: 55, tx: 92, ty: 9, tw: 140, ts: 16, tlh: 19.2, px: 19, py: 77, pw: 205, title: ['Aumento da', 'Eficiência', 'Operacional'] },
    title: ['Aumento da', 'Eficiência', 'Operacional'], size: 18, lh: 21.6, tx: 106, ty: 19,
    text: 'Ao terceirizar a gestão de impressão, as empresas podem concentrar seus recursos internos em tarefas mais estratégicas, aumentando assim a eficiência operacional e permitindo que os funcionários se concentrem em suas funções principais.',
    px: 24, py: 115, pw: 245,
  },
  {
    icon: iconSustentabilidade, iw: 64, ih: 64, ix: 33, iy: 23,
    m: { top: 613, h: 232, left: 37, ix: 28, iy: 14, iw: 60, ih: 55, tx: 100, ty: 21, tw: 140, ts: 16, tlh: 19.2, px: 9, py: 93, pw: 221, title: ['Melhoria da', 'Sustentabilidade'] },
    title: ['Melhoria da', 'Sustentabilidade'], size: 18, lh: 21.6, tx: 116, ty: 33, black: true,
    text: 'Outsourcing de impressão frequentemente adotam práticas sustentáveis, promovendo a redução do desperdício de papel, a gestão eficiente de energia e o descarte apropriado de cartuchos, contribuindo para iniciativas ambientais.',
    px: 24, py: 114, pw: 257,
  },
  {
    icon: iconTecnologia, iw: 59, ih: 54, ix: 50, iy: 21,
    m: { top: 857, h: 247, left: 38, ix: 44, iy: 23, iw: 59, ih: 54, tx: 110, ty: 25, tw: 120, ts: 15, tlh: 16.5, px: 10, py: 98, pw: 219, title: ['Acesso a', 'Tecnologia', 'Avançada'] },
    title: ['Acesso a', 'Tecnologia', 'Avançada'], size: 20, lh: 22, tx: 115, ty: 13,
    text: 'Empresas que terceirizam a impressão têm acesso a tecnologias mais avançadas sem a necessidade de investir em equipamentos caros. Isso inclui impressoras modernas, soluções de segurança e software de gerenciamento de documentos.',
    px: 24, py: 119, pw: 250,
  },
  {
    icon: iconSeguranca, iw: 64, ih: 64, ix: 36, iy: 19,
    m: { top: 1120, h: 237, left: 38, ix: 28, iy: 11, iw: 60, ih: 55, tx: 98, ty: 18, tw: 140, ts: 16, tlh: 19.2, px: 13, py: 85, pw: 214, title: ['Maior Segurança', 'de Documentos'] },
    title: ['Maior Segurança', 'de Documentos'], size: 18, lh: 21.6, tx: 114, ty: 29,
    text: 'Os provedores de outsourcing de impressão geralmente implementam medidas rigorosas de segurança, como autenticação de usuários, criptografia de dados e auditorias de impressão, contribuindo para a proteção de informações sensíveis.',
    px: 24, py: 113, pw: 251,
  },
  {
    icon: iconSuprimentos, iw: 64, ih: 64, ix: 36, iy: 19,
    m: { top: 1375, h: 249, left: 38, ix: 13, iy: 14, iw: 60, ih: 55, tx: 81, ty: 21, tw: 160, ts: 16, tlh: 19.2, px: 18, py: 83, pw: 209, title: ['Gestão Simplificada', 'de Suprimentos'] },
    title: ['Gestão', 'Simplificada de', 'Suprimentos'], size: 18, lh: 21.6, tx: 114, ty: 22,
    text: 'O outsourcing de impressão muitas vezes inclui o gerenciamento completo de suprimentos, como toners e papel. Isso simplifica o processo de reabastecimento, evita interrupções no trabalho e elimina a necessidade de manter grandes estoques internos.',
    px: 27, py: 113, pw: 247,
  },
];

const EQUIPAMENTOS = [
  { src: equip1, alt: 'Impressora multifuncional compacta' },
  { src: equip2, alt: 'Impressora laser' },
  { src: equip3, alt: 'Profissional usando multifuncional' },
  { src: equip4, alt: 'Copiadora em escritório' },
];

const NUMEROS = [
  { icon: statAtend, iw: 57, ih: 57, n: '+150', label: 'Atendimentos Mês', cls: 'a' },
  { icon: statImpr, iw: 53, ih: 57, n: '+ 9 Milhões', label: 'de impressões mês', cls: 'b' },
  { icon: statEquip, iw: 53, ih: 57, n: '+ 1000', label: 'Equipamentos', cls: 'c' },
  { icon: statClientes, iw: 62, ih: 62, n: '+ 250', label: 'Clientes ativos', cls: 'd' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="container hero__inner">
          <p className="tag tag--left hero__tag">Outsourcing de impressão</p>
          <h1 className="hero__title">Eloprint</h1>
          <p className="hero__text">
            Reduza os custos com seu parque de impressão. Escolha pela qualidade nos seus impressos, esqueça dor de cabeça com manutenção e suprimentos
          </p>
          <a className="btn-yellow hero__btn" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Entre em contato agora!
          </a>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="solucoes">
        <div className="container solucoes__inner">
          <p className="tag solucoes__tag">Soluções</p>
          <h2 className="solucoes__title">a Eloprint pode fazer</h2>
          <div className="solucoes__grid">
            {SOLUCOES.map((c) => (
              <article
                key={c.title.join(' ')}
                className="card"
                style={{
                  '--ix': `${c.ix}px`, '--iy': `${c.iy}px`, '--iw': `${c.iw}px`, '--ih': `${c.ih}px`,
                  '--tx': `${c.tx}px`, '--ty': `${c.ty}px`, '--ts': `${c.size}px`, '--tlh': `${c.lh}px`,
                  '--px': `${c.px}px`, '--py': `${c.py}px`, '--pw': `${c.pw}px`,
                  // posições no layout de celular (320px)
                  '--m-top': `${c.m.top}px`, '--m-h': `${c.m.h}px`, '--m-left': `${c.m.left}px`,
                  '--m-ix': `${c.m.ix}px`, '--m-iy': `${c.m.iy}px`, '--m-iw': `${c.m.iw}px`, '--m-ih': `${c.m.ih}px`,
                  '--m-tx': `${c.m.tx}px`, '--m-ty': `${c.m.ty}px`, '--m-tw': `${c.m.tw}px`, '--m-ts': `${c.m.ts}px`, '--m-tlh': `${c.m.tlh}px`,
                  '--m-px': `${c.m.px}px`, '--m-py': `${c.m.py}px`, '--m-pw': `${c.m.pw}px`,
                }}
              >
                <img className="card__icon" src={c.icon} alt="" />
                {/* quebras de linha do título iguais ao Wix (desktop e celular são diferentes) */}
                <h3 className={`card__title card__title--d${c.black ? ' card__title--black' : ''}`}>
                  {c.title.map((l, i) => (
                    <span key={i}>{l}<br /></span>
                  ))}
                </h3>
                <h3 className={`card__title card__title--m${c.black ? ' card__title--black' : ''}${c.m.center ? ' card__title--center' : ''}`}>
                  {c.m.title.map((l, i) => (
                    <span key={i}>{l}<br /></span>
                  ))}
                </h3>
                <p className="card__text">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="clientes">
        <h2 className="clientes__title">Clientes satisfeitos que usam nossa solução Outsourcing</h2>
        <div className="clientes__logos">
          <LogoMarquee />
        </div>
        <div className="clientes__slides">
          <Slideshow />
        </div>
      </section>

      {/* OUTSOURCING */}
      <section className="outsourcing">
        <div className="container outsourcing__inner">
          <h2 className="outsourcing__title">Outsourcing de impressão:</h2>
          <p className="outsourcing__text">Eficiência, Economia e Sustentabilidade para Empresas Modernas</p>
          <img className="outsourcing__circles" src={indicadores} alt="81% + Produtividade, 65% Redução de custos, 73% Disponibilidade da impressora" />
          <ul className="outsourcing__labels">
            <li>+ Produtividade</li>
            <li>Redução de custos</li>
            <li>Disponibilidade da impressora</li>
          </ul>
          {/* no celular o Wix usa um recorte diferente da foto */}
          <picture>
            <source media="(max-width: 759px)" srcSet={outsourcingFotoMobile} />
            <img className="outsourcing__photo" src={outsourcingFoto} alt="Profissional usando impressora multifuncional" />
          </picture>
        </div>
      </section>

      {/* EQUIPAMENTOS + NÚMEROS + FORMULÁRIO */}
      <section className="equip" id="equipamentos">
        <div className="equip__bg" />
        <div className="container equip__inner">
          <p className="tag equip__tag">Equipamentos</p>
          <h2 className="equip__title">As mais procuradas</h2>
          <div className="equip__gallery">
            {EQUIPAMENTOS.map((e, i) => (
              <img key={i} className={`equip__img equip__img--${i + 1}`} src={e.src} alt={e.alt} />
            ))}
          </div>

          <div className="numeros">
            {NUMEROS.map((s) => (
              <div key={s.label} className={`numero numero--${s.cls}`}>
                <img className="numero__icon" src={s.icon} alt="" style={{ width: s.iw, height: s.ih }} />
                <p className="numero__n">{s.n}</p>
                <p className="numero__label">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="home-form">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
