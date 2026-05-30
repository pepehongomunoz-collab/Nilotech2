import { motion } from 'framer-motion';

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 bg-dark-900 overflow-hidden relative">
            {/* Background decorative glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none z-0" />
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            ¿Por qué una presencia digital profesional <br className="hidden md:block" />
                            <span className="text-gradient-gold">marca la diferencia?</span>
                        </h2>
                        <div className="w-24 h-1 bg-gold-500 rounded-full mx-auto" />
                    </div>

                    {/* Intro paragraphs */}
                    <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light text-center max-w-4xl mx-auto">
                        <p className="font-semibold text-white text-xl md:text-2xl">
                            Hoy, la primera impresión de tu negocio ocurre en internet.
                        </p>
                        <p>
                            Antes de contactarte, tus potenciales clientes visitan tu sitio web, revisan tu presencia digital y evalúan si transmitís la confianza y el profesionalismo que están buscando.
                        </p>
                        <p className="border-l-2 border-gold-500/30 pl-4 italic text-gray-400 max-w-3xl mx-auto md:border-l-0 md:border-b-2 md:pl-0 md:pb-4">
                            Por eso, una web no debería ser solo una tarjeta de presentación.
                        </p>
                        <p className="font-medium text-white">
                            Debería convertirse en una herramienta capaz de fortalecer tu marca, generar credibilidad y ayudarte a crear nuevas oportunidades de negocio.
                        </p>
                    </div>

                    {/* Features checklist */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto pt-4">
                        {[
                            "Genera confianza desde el primer contacto.",
                            "Refuerza la imagen profesional de tu empresa.",
                            "Diferencia tu negocio de la competencia.",
                            "Permite mostrar tus productos y servicios de forma clara y atractiva.",
                            "Está disponible para tus clientes las 24 horas, todos los días del año."
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className={`flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/30 hover:bg-white/10 transition-all duration-300 ${idx === 4 ? 'md:col-span-2' : ''}`}
                            >
                                <span className="text-gold-500 text-xl font-bold flex-shrink-0">✔</span>
                                <span className="text-gray-300 text-sm md:text-base font-light text-left">
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Concluding block */}
                    <div className="bg-gradient-to-r from-gold-500/10 via-transparent to-gold-500/10 border-t border-b border-gold-500/20 py-8 px-6 text-center max-w-4xl mx-auto rounded-xl">
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                            En <span className="text-white font-semibold">Nilo Tech</span> desarrollamos sitios web y aplicaciones personalizadas que combinan diseño, estrategia y tecnología para ayudar a empresas y profesionales a destacar en un entorno cada vez más competitivo.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
