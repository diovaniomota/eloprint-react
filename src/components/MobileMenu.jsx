import { useState } from 'react';
import NavItem from './NavItem.jsx';
import { NAV } from '../data/site.js';
import './MobileMenu.css';

// No celular o site Wix não mostra o cabeçalho: a navegação fica num botão flutuante "..."
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button
        type="button"
        className={`mmenu__toggle${open ? ' is-open' : ''}`}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 2l14 14M16 2L2 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <span className="mmenu__dots" aria-hidden="true"><i /><i /><i /></span>
        )}
      </button>
      {open && (
        <nav className="mmenu__panel" aria-label="Menu">
          {NAV.map((item) => (
            <NavItem key={item.label} item={item} className="mmenu__link" onClick={close} />
          ))}
        </nav>
      )}
    </>
  );
}
