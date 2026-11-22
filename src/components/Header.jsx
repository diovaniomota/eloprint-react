import { Link } from 'react-router-dom';
import NavItem from './NavItem.jsx';
import { NAV, WHATSAPP_URL } from '../data/site.js';
import logo from '../assets/img/logo-header.png';
import logo1x from '../assets/img/logo-header@1x.png';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__box">
        <Link to="/" className="header__logo" aria-label="Eloprint - Início">
          <img src={logo1x} srcSet={`${logo1x} 1x, ${logo} 2x`} alt="Eloprint" width="167" height="98" />
        </Link>
        <div className="header__right">
        <nav className="header__nav" aria-label="Menu principal">
          {NAV.map((item) => (
            <NavItem key={item.label} item={item} className={`header__link header__link--${item.label.split(' ')[0].toLowerCase()}`} />
          ))}
        </nav>
        <a className="btn-yellow header__cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          Faça uma cotação agora!
        </a>
        </div>
      </div>
    </header>
  );
}
