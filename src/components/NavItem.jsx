import { Link } from 'react-router-dom';

export default function NavItem({ item, className, onClick }) {
  if (item.href) {
    return (
      <a className={className} href={item.href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {item.label}
      </a>
    );
  }
  return (
    <Link className={className} to={item.to} onClick={onClick}>
      {item.label}
    </Link>
  );
}
