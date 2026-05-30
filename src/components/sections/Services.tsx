import { motion } from 'framer-motion';
import { Globe, Smartphone, Palette, Code2, HeartHandshake, Layers } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Sitios web corporativos",
    description: "Diseño y desarrollo de sitios institucionales premium orientados a fortalecer tu marca y credibilidad."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Landing pages de conversión",
    description: "Páginas de aterrizaje estratégicas optimizadas al 100% para captar clientes potenciales e impulsar tus campañas."
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Aplicaciones web a medida",
    description: "Plataformas e interfaces dinámicas personalizadas construidas con tecnologías modernas como React."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Aplicaciones móviles",
    description: "Desarrollo de apps para iOS y Android con alto rendimiento, pensadas para interactuar directamente con tu público."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Tiendas online (E-commerce)",
    description: "Canales de venta digitales seguros y optimizados para ofrecer la mejor experiencia de compra."
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Sistemas & Gestión interna",
    description: "Plataformas internas y soluciones a medida para automatizar procesos y optimizar tu negocio."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background decorative gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header Copy */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight break-words">
            Servicios de <span className="text-gradient-gold">Desarrollo Web y Aplicaciones</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-8"></div>
          
          <div className="space-y-4 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
            <p className="font-medium text-white">
              Creamos soluciones digitales personalizadas para empresas y profesionales que buscan fortalecer su presencia online, transmitir confianza y generar nuevas oportunidades de negocio.
            </p>
            <p>
              Cada proyecto se desarrolla desde cero, adaptándose a las necesidades específicas de tu marca, tus objetivos y tu público.
            </p>
            <p className="text-base text-gray-400 max-w-3xl mx-auto italic">
              Nuestro enfoque combina diseño, experiencia de usuario y tecnología para construir productos digitales modernos, rápidos y preparados para crecer junto a tu negocio.
            </p>
          </div>
        </div>

        {/* Development Offerings Grid Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-10 tracking-wide uppercase text-glow-sm">
            Lo que podemos desarrollar para tu empresa
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-900 p-8 rounded-xl border border-white/5 hover:border-gold-500/50 transition-all group hover:shadow-lg hover:shadow-gold-500/5 cursor-default"
              >
                <div className="w-14 h-14 bg-dark-800 rounded-lg flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-gold-500/30">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Concluding Block */}
        <div className="bg-gradient-to-r from-gold-500/10 via-transparent to-gold-500/10 border-t border-b border-gold-500/20 py-8 px-6 text-center max-w-4xl mx-auto rounded-xl">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Desde la planificación inicial hasta la puesta en marcha, te acompañamos en cada etapa para garantizar un resultado profesional, funcional y alineado con los objetivos de tu negocio.
          </p>
        </div>

      </div>
    </section>
  );
};
