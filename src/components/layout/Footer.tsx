import React from 'react';
import logo from '../../assets/logo.png';
import { Code2, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img
                src={logo}
                alt="Nilo Tech"
                className="h-14 w-auto object-contain"
              />
              <div className="flex items-center text-white text-xl tracking-widest pl-2">
                <span className="font-decorative text-2xl font-medium">N</span>
                <span className="font-cinzel font-medium">ILO-<span className="text-gold-500">TECH</span></span>
              </div>
            </a>
            <p className="text-gray-400 max-w-sm mb-6">
              Transformamos negocios a través de soluciones digitales innovadoras. Calidad premium, diseño excepcional y resultados medibles.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Servicios</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-gold-500 transition-colors">Portafolio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gold-500 transition-colors">Nosotros</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold-500 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Términos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Nilo Tech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
