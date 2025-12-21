import React from 'react';
import { motion } from 'framer-motion';

export const ServicesSEO = () => {
    return (
        <section className="py-20 bg-dark-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative text-right flex flex-col items-end"
                >
                    {/* Subtle gold decoration on the right */}
                    <div className="absolute -right-4 top-0 w-1 h-24 bg-gradient-to-b from-gold-500 to-transparent rounded-full opacity-50 hidden md:block" />

                    <div className="space-y-8 max-w-4xl">
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                            Ofrecemos un <span className="text-white font-semibold">ecosistema completo de servicios tecnológicos</span> que cubren todas las etapas de un proyecto digital, desde la idea inicial hasta su implementación y mantenimiento continuo. Nuestro equipo combina experiencia técnica, visión estratégica y atención al detalle para desarrollar productos <span className="text-gold-500 font-medium text-glow-sm">confiables, escalables y alineados con las mejores prácticas</span> de la industria.
                        </p>

                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                            Cada solución que desarrollamos está orientada a mejorar la <span className="text-white border-b border-gold-500/30">eficiencia operativa</span>, fortalecer la identidad digital de tu marca y <span className="text-white">maximizar el retorno de inversión</span> a través de tecnología bien aplicada.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
