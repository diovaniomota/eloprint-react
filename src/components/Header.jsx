import { Link } from 'react-router-dom';
import NavItem from './NavItem.jsx';
import { NAV, WHATSAPP_URL } from '../data/site.js';
import logo from '../assets/img/logo-header.png';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__box">
        <Link to="/" className="header__logo" aria-label="Eloprint - Início">
          <img src={logo} alt="Eloprint" width="167" height="98" />
        </Link>
        <nav className="header__nav" aria-label="Menu principal">
          {NAV.map((item) => (
            <NavItem key={item.label} item={item} className={`header__link header__link--${item.label.split(' ')[0].toLowerCase()}`} />
          ))}
        </nav>
        <a className="btn-yellow header__cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          Faça uma cotação agora!
        </a>
      </div>
    </header>
  );
}
