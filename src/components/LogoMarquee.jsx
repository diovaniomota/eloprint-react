import './LogoMarquee.css';

const logos = import.meta.glob('../assets/img/cliente-*.png', { eager: true, import: 'default' });
const list = Object.keys(logos)
  .sort((a, b) => parseInt(a.match(/(\d+)\.png/)[1]) - parseInt(b.match(/(\d+)\.png/)[1]))
  .map((k) => logos[k]);

// Faixa de logos de clientes rolando sem parar (no Wix: "slider" de galeria automático)
export default function LogoMarquee() {
  const items = [...list, ...list];
  return (
    <div className="marquee" aria-label="Clientes">
      <div className="marquee__track">
        {items.map((src, i) => (
          <img key={i} className="marquee__logo" src={src} alt={i < list.length ? `Cliente ${i + 1}` : ''} aria-hidden={i >= list.length} />
        ))}
      </div>
    </div>
  );
}
