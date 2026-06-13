import React, { useRef, useState } from 'react';
import { Button } from '../ui/Button';
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Usamos el objeto global emailjs cargado via CDN en index.html
    const emailjs = (window as any).emailjs;

    if (!emailjs) {
      console.error('EmailJS not loaded');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(
      'service_bnvn7b9', // Replace with your Service ID
      'template_wif78ek', // Replace with your Template ID
      form.current,
      'zN5poxSAc6404Q5HP' // Replace with your Public Key
    )
      .then((result: any) => {
        console.log('Success:', result.text);
        setSubmitStatus('success');
        form.current?.reset();
      }, (error: any) => {
        console.error('Error:', error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background decorative glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              ¿Listo para mejorar la <br />
              <span className="text-gradient-gold">presencia digital de tu negocio?</span>
            </h2>
            <div className="w-20 h-1 bg-gold-500 rounded-full mb-8"></div>
            
            <h2 className="sr-only">Hablemos sobre tu próximo desarrollo o campaña de publicidad digital</h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light mb-10">
              <p className="font-semibold text-white">
                La forma en que tu empresa se ve en internet y cómo te promocionas influye directamente en la confianza y las ventas que generas.
              </p>
              <p>
                Si estás buscando un sitio web, una aplicación a medida o potenciar tus ventas con campañas de publicidad digital estratégicas, podemos ayudarte a construir una solución profesional que impulse los resultados de tu negocio.
              </p>
              <p>
                Completá el formulario y contanos sobre tu proyecto. Analizaremos tus necesidades y te contactaremos para ayudarte a encontrar la mejor solución para tu negocio.
              </p>
            </div>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Desarrollo 100% personalizado",
                "Sin plantillas genéricas",
                "Atención directa durante todo el proyecto",
                "Soluciones diseñadas para crecer junto a tu empresa"
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-gold-500/30 transition-colors"
                >
                  <span className="text-gold-500 font-bold">✔</span>
                  <span className="text-sm font-light text-gray-200">{text}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact details */}
            <h3 className="sr-only">Información de Contacto de Nilo Tech</h3>
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-gold-500 border border-gold-500/20 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email</h4>
                  <p className="text-gray-300 text-sm">desarrollos@nilotech.online</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-gold-500 border border-gold-500/20 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Teléfono</h4>
                  <p className="text-gray-300 text-sm">+54 11 2158-5424</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-gold-500 border border-gold-500/20 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Ubicación</h4>
                  <p className="text-gray-300 text-sm">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-dark-900 p-8 rounded-2xl border border-white/5 shadow-xl relative">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                  <input type="text" id="name" name="name" required className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="tu@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">Servicio de Interés</label>
                <select id="service" name="service" className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors">
                  <option>Desarrollo Web</option>
                  <option>Aplicación Móvil</option>
                  <option>Publicidad Digital</option>
                  <option>Diseño UI/UX</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                <textarea id="message" name="message" required rows={4} className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-base flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensaje'
                )}
              </Button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span>Mensaje enviado con éxito! Te contactaremos pronto.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>Hubo un error al enviar el mensaje. Inténtalo de nuevo.</span>
                </div>
              )}
            </form>
            
            {/* Urgency/Exclusivity Note */}
            <p className="mt-4 text-xs text-left sm:text-center text-gray-500 font-light flex items-start sm:items-center justify-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse shrink-0 mt-1 sm:mt-0" />
              <span>Actualmente estamos tomando un número limitado de proyectos para garantizar una atención personalizada.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
