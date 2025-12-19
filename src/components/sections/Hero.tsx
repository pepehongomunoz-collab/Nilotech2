import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/90 to-dark-900 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
          alt="Technology Background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-sm font-semibold tracking-wider mb-6">
            INNOVACIÓN DIGITAL
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Creamos el Futuro <br />
            <span className="text-gradient-gold">Digital de tu Negocio</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Desarrollo web y móvil de alto impacto. Combinamos diseño premium con tecnología de vanguardia para escalar tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-lg px-8 py-4" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              Iniciar Proyecto
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4" onClick={() => document.getElementById('portfolio')?.scrollIntoView()}>
              Ver Portafolio <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-gray-500 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
