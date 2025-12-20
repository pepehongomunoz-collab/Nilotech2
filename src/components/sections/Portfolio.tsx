import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import pabloFoto from '../../assets/pablo-fotografia.png';
import fitnessGym from '../../assets/fitness-gym.png';
import loreVentas from '../../assets/lore-ventas.png';

const projects = [
  {
    title: "Galerias",
    category: "Web App",
    image: pabloFoto,
    tags: ["React", "TypeScript", "Node.js"]
  },
  {
    title: "Luxury Gym",
    category: "Website and Mobile App",
    image: fitnessGym,
    tags: ["html", "css", "node.js"]
  },
  {
    title: "E-Commerce Premium",
    category: "WebApp",
    image: loreVentas,
    tags: ["html", "css", "node.js"]
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos <span className="text-gold-500">Destacados</span></h2>
            <div className="w-20 h-1 bg-gold-500 rounded-full"></div>
          </div>
          <a href="#" className="hidden md:block text-gold-500 hover:text-gold-400 font-medium mt-4 md:mt-0">
            Ver todos los proyectos &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-gold-500 text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-white font-medium">
                  Ver Detalles <ExternalLink className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="#" className="text-gold-500 hover:text-gold-400 font-medium">
            Ver todos los proyectos &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
