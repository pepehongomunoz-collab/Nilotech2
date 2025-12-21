import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Palette, Database, Rocket, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Desarrollo Web",
    description: "Sitios web corporativos, landing pages y aplicaciones web progresivas (PWA) optimizadas para conversión."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Apps Móviles",
    description: "Desarrollo nativo y multiplataforma (iOS & Android) con React Native para una experiencia de usuario fluida."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas y atractivas que reflejan la identidad de tu marca y mejoran la retención de usuarios."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend & API",
    description: "Arquitecturas robustas, bases de datos escalables e integraciones seguras para potenciar tu sistema."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "SEO & Performance",
    description: "Optimización técnica para motores de búsqueda y tiempos de carga ultrarrápidos."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Mantenimiento",
    description: "Soporte continuo, actualizaciones de seguridad y monitoreo para mantener tu plataforma operativa 24/7."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestros <span className="text-gold-500">Servicios</span></h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas integrales diseñadas para impulsar el crecimiento de tu empresa en la era digital. Ofrecemos un ecosistema completo de servicios tecnológicos que cubren todas las etapas de un proyecto digital, desde la idea inicial hasta su implementación y mantenimiento continuo. Nuestro equipo combina experiencia técnica, visión estratégica y atención al detalle para desarrollar productos confiables, escalables y alineados con las mejores prácticas de la industria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-900 p-8 rounded-xl border border-white/5 hover:border-gold-500/50 transition-all group hover:shadow-lg hover:shadow-gold-500/5"
            >
              <div className="w-14 h-14 bg-dark-800 rounded-lg flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-gold-500/30">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
