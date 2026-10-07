import React from 'react';
import { BookOpen, Users, Award, Clock } from 'lucide-react';
import './Benefits.css';

const Benefits = () => {
  return (
    <section id="benefits" className="benefits-section">
      <div className="container">
        <h2 className="section-title">Beneficios <span>Exclusivos</span></h2>
        
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon-wrapper">
              <BookOpen size={40} color="#e60000" />
            </div>
            <h3>Avanzada Metodología</h3>
            <p>Aprende de forma natural y didáctica. Reproducimos el proceso materno con el que aprendiste tu idioma natal, enfocándonos en habilidades comunicativas reales para el entorno laboral.</p>
          </div>
          
          <div className="benefit-card">
            <div className="icon-wrapper">
              <Users size={40} color="#e60000" />
            </div>
            <h3>Enseñanza Personalizada</h3>
            <p>Grupos muy reducidos para asegurar tu participación. Cada profesional avanza a su propio ritmo con un seguimiento y evaluación personal constantes por parte de nuestros coaches.</p>
          </div>
          
          <div className="benefit-card">
            <div className="icon-wrapper">
              <Award size={40} color="#e60000" />
            </div>
            <h3>Profesores Certificados</h3>
            <p>Coaches expertos en la enseñanza de Business English. Amplia experiencia entrenando a ejecutivos de alto nivel en nuestra exclusiva metodología comunicativa.</p>
          </div>
          
          <div className="benefit-card">
            <div className="icon-wrapper">
              <Clock size={40} color="#e60000" />
            </div>
            <h3>Ahorro de Tiempo</h3>
            <p>Domina el inglés en 10 meses. Horarios flexibles y compatibles con tu agenda laboral. Reprogramación de sesiones sin complicaciones para que no pierdas ninguna clase.</p>
          </div>
        </div>

        <div className="didactic-info">
          <div className="didactic-text">
            <h2>Metodología <span>Didáctica</span> y Práctica</h2>
            <p>En "English for Business" nos alejamos de la gramática tediosa. Nuestras sesiones son 100% interactivas y situacionales. Practicarás negociaciones, presentaciones, redacción de correos y llamadas telefónicas en inglés desde el primer día.</p>
            <ul className="feature-list">
              <li>✅ Clases-Taller de Conversación orientada a negocios</li>
              <li>✅ Dinámicas de plena interacción y Role-Play</li>
              <li>✅ Material de estudio digital actualizado</li>
            </ul>
          </div>
          <div className="didactic-image-container">
             <img src="/assets/methodology_business_english_1791330198192.png" alt="Methodology Session" className="didactic-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
