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
            SITIOS WEB Y APPS PERSONALIZADAS
          </span>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight break-words">
            Tu negocio merece <br /> una presencia digital <br className="hidden sm:block" /> que genere confianza
            <span className="text-gradient-gold text-2xl md:text-5xl font-semibold mt-2 block break-words">
              desde el primer clic.
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Diseñamos sitios web y aplicaciones personalizadas para empresas y profesionales que buscan diferenciarse, transmitir confianza y generar más oportunidades de negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-lg px-8 py-4" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              Solicitar Cotización
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4" onClick={() => document.getElementById('portfolio')?.scrollIntoView()}>
              Ver Portafolio <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Feature highlights below buttons */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Diseño 100% personalizado",
              "Sin plantillas genéricas",
              "Soporte durante todo el proyecto"
            ].map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/5 border border-gold-500/20 backdrop-blur-sm text-left shadow-lg hover:border-gold-500/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
                <span className="text-sm md:text-base font-medium text-gray-200">
                  {text}
                </span>
              </motion.div>
            ))}
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
