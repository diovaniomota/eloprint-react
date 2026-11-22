import { useEffect, useState, useCallback } from 'react';
import s1 from '../assets/img/slide-5.jpg';
import s2 from '../assets/img/slide-3.jpg';
import s3 from '../assets/img/slide-4.jpg';
import s4 from '../assets/img/slide-2.jpg';
import s5 from '../assets/img/slide-1.jpg';
import './Slideshow.css';

// Mesma ordem do slideshow do Wix
const SLIDES = [
  { src: s1, alt: 'SP C440DN Impressora a Laser em Cores' },
  { src: s2, alt: 'Impressora Samsung SL-M4020ND' },
  { src: s3, alt: 'Ricoh Aficio MP C2003 Multifuncional Colorida' },
  { src: s4, alt: 'Multifuncional Laser Colorida Konica Minolta Bizhub C224' },
  { src: s5, alt: 'Impressora Multifuncional Samsung 4070 | SL-M4070FR' },
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((d) => setIndex((i) => (i + d + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => go(1), 4000);
    return () => clearInterval(t);
  }, [paused, go]);

  return (
    <div className="slides" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {SLIDES.map((s, i) => (
        <img key={i} src={s.src} alt={s.alt} className={`slides__img${i === index ? ' is-active' : ''}`} />
      ))}
      <button type="button" className="slides__arrow slides__arrow--prev" aria-label="Anterior" onClick={() => go(-1)}>
        <svg viewBox="0 0 45 70" width="45" height="70" aria-hidden="true"><path d="M30 18L14 35l16 17" /></svg>
      </button>
      <button type="button" className="slides__arrow slides__arrow--next" aria-label="Próximo" onClick={() => go(1)}>
        <svg viewBox="0 0 45 70" width="45" height="70" aria-hidden="true"><path d="M15 18l16 17-16 17" /></svg>
      </button>
      <span className="slides__count">{index + 1}/{SLIDES.length}</span>
    </div>
  );
}
