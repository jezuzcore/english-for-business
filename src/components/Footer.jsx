import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <img src="/assets/logo_english_business_1791330166751.png" alt="English for Business" className="logo" />
        </div>
        <div className="footer-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#benefits">Metodología</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>📞 +51 988 462 828</p>
          <p>📧 info@englishforbusiness.pe</p>
          <a href="https://api.whatsapp.com/send/?phone=51988462828&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="btn footer-btn">
            Asesoría por WhatsApp
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} English for Business. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
