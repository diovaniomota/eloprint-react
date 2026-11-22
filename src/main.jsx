import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/fonts.css';
import './styles/global.css';
import App from './App.jsx';

// Igual ao Wix: no celular o layout é desenhado para 320px e escalado para a largura da tela
function updateMobileZoom() {
  const w = window.innerWidth;
  document.documentElement.style.setProperty('--mzoom', w < 760 ? String(w / 320) : '1');
}
updateMobileZoom();
window.addEventListener('resize', updateMobileZoom);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
