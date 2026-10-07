import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Casos de <span>Éxito</span></h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-img-wrapper">
              <img src="/assets/testimonial_1_1791330258166.png" alt="Testimonio Carlos" className="testimonial-img" />
            </div>
            <div className="testimonial-content">
              <p className="quote">"Gracias a English for Business pude cerrar un trato importante con inversores extranjeros. La metodología 100% práctica me dio la fluidez y confianza que necesitaba en solo unos meses."</p>
              <h4>Carlos Mendoza</h4>
              <span className="role">Gerente Comercial</span>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-img-wrapper">
              <img src="/assets/testimonial_2_1791330268070.png" alt="Testimonio Elena" className="testimonial-img" />
            </div>
            <div className="testimonial-content">
              <p className="quote">"La flexibilidad de horarios y la enseñanza personalizada adaptada a negocios reales fue clave. Ahora lidero reuniones globales sin ninguna barrera con el idioma."</p>
              <h4>Elena Torres</h4>
              <span className="role">Directora de Operaciones</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
