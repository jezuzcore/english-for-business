import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
