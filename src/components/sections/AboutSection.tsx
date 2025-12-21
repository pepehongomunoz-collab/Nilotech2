import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-dark-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative text-center"
                >
                    {/* Subtle gold decoration */}
                    <div className="absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-gold-500 to-transparent rounded-full opacity-50 hidden md:block" />

                    {/* SEO Heading - Visually Hidden */}
                    <h2 className="sr-only">Expertos en Desarrollo de Software, Páginas Web y Aplicaciones Móviles</h2>

                    <div className="space-y-8 max-w-4xl mx-auto">
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                            En <span className="text-white font-semibold">Nilo Tech</span> ayudamos a empresas, emprendedores y marcas a transformar sus ideas en <span className="text-gold-500 font-medium text-glow-sm">soluciones digitales sólidas, escalables y orientadas a resultados</span>. Nos especializamos en la consultoría tecnológica y el desarrollo de plataformas web y aplicaciones móviles que combinan un diseño moderno, alto rendimiento y una arquitectura tecnológica modular pensada para evolucionar y crecer junto a los objetivos de tu negocio.
                        </p>

                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                            Trabajamos con tecnologías de vanguardia como <span className="text-white border-b border-gold-500/30">React, Node.js, TypeScript</span> y arquitecturas backend robustas para garantizar productos digitales seguros, rápidos y totalmente preparados para integrarse con sistemas externos. Nuestro enfoque integral se basa en entender profundamente tus necesidades comerciales, analizar los procesos internos y construir <span className="text-white font-medium">soluciones a medida</span> que generen valor real desde el primer día, mejoren la experiencia del usuario final y optimicen la presencia digital competitiva de tu empresa en el mercado actual.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
