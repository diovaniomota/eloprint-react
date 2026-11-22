import { ADDRESS, PHONES, MAPS_URL, INSTAGRAM_URL, FACEBOOK_URL, DARTSOFT_URL } from '../data/site.js';
import logo from '../assets/img/logo-footer.png';
import dartsoft from '../assets/img/logo-dartsoft.png';
import instagram from '../assets/img/icon-instagram.png';
import facebook from '../assets/img/icon-facebook.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="footer__info">
          <p className="footer__label">Endereço:</p>
          <p className="footer__text">{ADDRESS}</p>
          <p className="footer__text footer__phones">{PHONES}</p>
        </div>
        <a className="btn-yellow footer__map" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
          ver no mapa
        </a>
        <img className="footer__logo" src={logo} alt="Eloprint" width="315" height="73" />
        <div className="footer__dev">
          <p>Desenvolvido por:</p>
          <a href={DARTSOFT_URL} target="_blank" rel="noopener noreferrer">
            <img src={dartsoft} alt="DartSoft Sistemas" width="156" height="42" />
          </a>
        </div>
        <hr className="footer__line" />
        <ul className="footer__social" aria-label="Redes sociais">
          <li>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagram} alt="Instagram" width="20" height="20" />
            </a>
          </li>
          <li>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebook} alt="Facebook" width="20" height="20" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
