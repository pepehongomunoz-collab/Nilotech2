import React from 'react';
import { Button } from '../ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                  <input type="text" id="name" className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="tu@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">Servicio de Interés</label>
                <select id="service" className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors">
                  <option>Desarrollo Web</option>
                  <option>Aplicación Móvil</option>
                  <option>Diseño UI/UX</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                <textarea id="message" rows={4} className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>

              <Button className="w-full py-4 text-base">
                Enviar Mensaje
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
