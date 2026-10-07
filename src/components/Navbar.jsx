import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo-container">
          <img src="/assets/logo_english_business_1791330166751.png" alt="English for Business Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#benefits">Metodología</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
        </ul>
        <a href="https://api.whatsapp.com/send/?phone=51988462828&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="btn nav-btn">
          Contáctanos
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
