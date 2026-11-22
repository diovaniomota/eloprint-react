import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER, CONTACT_EMAIL } from '../data/site.js';
import './MobileMenu.css';

// No celular o site Wix não mostra o cabeçalho: fica só a "barra de ações rápidas"
// (botão flutuante "..."), que abre Email, WhatsApp e Quem Somos — igual ao Wix.
const ICONS = {
  email: (
    <svg viewBox="15 8 20 15" width="50" height="30" aria-hidden="true">
      <path fillRule="evenodd" d="M15 9.992C15 8.892 15.898 8 16.99 8h16.02C34.108 8 35 8.893 35 9.992v11.016c0 1.1-.898 1.992-1.99 1.992H16.99A1.992 1.992 0 0 1 15 21.008V9.992zm3.1.867a1.004 1.004 0 0 0 .236 1.396l4.56 3.257c1.185.847 3.020.848 4.208 0l4.56-3.257c.45-.322.554-.95.235-1.396l.202.282a1.004 1.004 0 0 0-1.398-.23l-4.56 3.257c-.612.437-1.675.437-2.286 0l-4.56-3.257a1.004 1.004 0 0 0-1.398.23l.202-.282z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="15 5 19.904 20" width="50" height="30" aria-hidden="true">
      <path fillRule="evenodd" d="M29.512 16.985c-.248-.124-1.465-.723-1.692-.806-.227-.082-.392-.123-.557.124-.165.248-.64.806-.784.971-.145.166-.29.186-.537.062-.247-.124-1.045-.385-1.991-1.229-.736-.656-1.233-1.467-1.378-1.715-.144-.248-.015-.382.109-.506.111-.11.248-.289.371-.433.124-.145.165-.248.248-.414.082-.165.041-.31-.02-.433-.063-.124-.558-1.343-.764-1.840-.201-.482-.405-.416-.557-.424a9.932 9.932 0 0 0-.475-.009.91.91 0 0 0-.66.31c-.227.248-.867.847-.867 2.066 0 1.219.887 2.396 1.011 2.561.124.166 1.746 2.667 4.230 3.740.591.255 1.053.407 1.412.521.593.189 1.133.162 1.560.098.476-.07 1.465-.599 1.671-1.177.207-.579.207-1.074.145-1.178-.062-.103-.227-.165-.475-.289m-4.518 6.170h-.004a8.225 8.225 0 0 1-4.192-1.149l-.3-.178-3.118.817.832-3.040-.196-.31a8.218 8.218 0 0 1-1.260-4.385c.002-4.541 3.697-8.236 8.241-8.236 2.200 0 4.268.859 5.824 2.416a8.188 8.188 0 0 1 2.410 5.827c-.002 4.542-3.697 8.237-8.237 8.237m7.010-15.248A9.846 9.846 0 0 0 24.994 5c-5.463 0-9.909 4.446-9.910 9.910a9.879 9.879 0 0 0 1.322 4.954L15 25l5.254-1.378a9.902 9.902 0 0 0 4.736 1.206h.004c5.462 0 9.908-4.446 9.910-9.910a9.851 9.851 0 0 0-2.900-7.012" />
    </svg>
  ),
  quem: (
    <svg viewBox="16 6 19 17" width="50" height="30" aria-hidden="true">
      <path fillRule="evenodd" d="M30 10h3.003c1.106 0 1.997.897 1.997 2.003v8.994c0 1.11-.894 2.003-1.997 2.003H17.997A1.998 1.998 0 0 1 16 20.997v-8.994c0-1.11.894-2.003 1.997-2.003H21V7.003A.993.993 0 0 1 21.998 6h7.004A1 1 0 0 1 30 7.003V10zm-7-2h5v2h-5V8z" />
    </svg>
  ),
};

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className={`qab${open ? ' is-open' : ''}`}>
      {open && <div className="qab__overlay" onClick={close} />}
      {open && (
        <div className="qab__actions">
          <a className="qab__action qab__action--email" href={`mailto:${CONTACT_EMAIL}`} onClick={close}>
            <span className="qab__icon">{ICONS.email}</span>
            <span className="qab__label">Email</span>
          </a>
          <a
            className="qab__action qab__action--whatsapp"
            href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            <span className="qab__icon">{ICONS.whatsapp}</span>
            <span className="qab__label">WhatsApp</span>
          </a>
          <Link className="qab__action qab__action--quem" to="/quem-somos" onClick={close}>
            <span className="qab__icon">{ICONS.quem}</span>
            <span className="qab__label">Quem Somos</span>
          </Link>
        </div>
      )}
      <button
        type="button"
        className="qab__toggle"
        aria-label="Ações rápidas"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? (
          <svg width="14" height="14" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2.5 2.5l13 13M15.5 2.5l-13 13" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          </svg>
        ) : (
          <span className="qab__dots" aria-hidden="true"><i /><i /><i /></span>
        )}
      </button>
    </div>
  );
}
