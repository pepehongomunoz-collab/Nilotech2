import React, { useRef, useState } from 'react';
import { Button } from '../ui/Button';
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

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
    <section id="contact" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Empecemos a trabajar <br /><span className="text-gold-500">Juntos</span></h2>
            <p className="text-gray-400 mb-10 text-lg">
              ¿Tienes una idea en mente? Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad con la mejor tecnología.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dark-900 rounded-full flex items-center justify-center text-gold-500 border border-gold-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">desarrollos@nilotech.online</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dark-900 rounded-full flex items-center justify-center text-gold-500 border border-gold-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Teléfono</h4>
                  <p className="text-gray-400">+54 11 2158-5424</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dark-900 rounded-full flex items-center justify-center text-gold-500 border border-gold-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Ubicación</h4>
                  <p className="text-gray-400">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-dark-900 p-8 rounded-2xl border border-white/5 shadow-xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                  <input type="text" id="from_name" name="from_name" required className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" id="from_email" name="from_email" required className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="tu@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">Servicio de Interés</label>
                <select id="service" name="service" className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors">
                  <option>Desarrollo Web</option>
                  <option>Aplicación Móvil</option>
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
          </div>

        </div>
      </div>
    </section>
  );
};
