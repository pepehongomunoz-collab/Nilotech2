import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { AboutSection } from './components/sections/AboutSection';
import { Services } from './components/sections/Services';
import { ServicesSEO } from './components/sections/ServicesSEO';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-gold-500 selection:text-dark-900">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Services />
        <ServicesSEO />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
