import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <img src="/assets/hero_business_learning_1791330177230.png" alt="Business Professionals Learning" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1>APRENDE <span className="highlight">INGLÉS</span> EN TIEMPO RÉCORD</h1>
          <p>Domina el idioma de los negocios con nuestra metodología especializada. Diseñado para profesionales, gerentes y emprendedores.</p>
          <div className="hero-badge">
            <h2>¡Domínalo en 10 meses!</h2>
          </div>
          <a href="https://api.whatsapp.com/send/?phone=51988462828&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="btn hero-btn">
            Solicita Información
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
