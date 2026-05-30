import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import pabloFoto from '../../assets/img/pablo.png';
import pabloLogo from '../../assets/img/Pablo logo (500 x500 px).webp';
import mayraBiondo from '../../assets/img/mayra1.png';
import mayraLogo from '../../assets/img/mayralogo.png';
import loreVentas from '../../assets/img/lore-ventas.png';
import lubriEden from '../../assets/img/lubri1.png';
import lubriLogo from '../../assets/img/lubrilogo.png';

const projects = [
  {
    title: "Pablo Fotografia",
    category: "Web App",
    image: pabloFoto,
    logo: pabloLogo,
    tags: ["HTML5", "CSS3", "SASS", "JS", "Node Js", "Firebase", "Cloudinary"],
    link: "https://lorbeafus.github.io/Pablo-Fotografia/"
  },
  {
    title: "Mayra Biondo",
    category: "Website and Mobile App",
    image: mayraBiondo,
    logo: mayraLogo,
    tags: ["HTML5", "SASS", "JS", "Node Js", "Firebase", "Cloudinary"],
    link: "https://mayrabiondopsicologa.vercel.app/"
  },
  {
    title: "E-Commerce Premium",
    category: "WebApp",
    image: loreVentas,
    logo: null,
    tags: ["html", "SASS", "Node.js", "mongoDB", "Cloudinary"],
    link: "https://lore-ventas.shop/"
  },
  {
    title: "Lubricentro Eden",
    category: "E-commerce",
    image: lubriEden,
    logo: lubriLogo,
    tags: ["html", "css", "node.js", "stripe", "whatsapp", "firebase", "cloudinary", "mongoDB"],
    link: "https://lubricentro-eden.com.ar/"
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos desarrollados <span className="text-gold-500">a medida</span></h2>
            <h2 className="sr-only">Proyectos de Software y Aplicaciones Web Destacados</h2>
            <div className="w-20 h-1 bg-gold-500 rounded-full"></div>
          </div>
          <a
            href="https://lorbeafus.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-gold-500 hover:text-gold-400 font-medium mt-4 md:mt-0"
          >
            Ver todos los proyectos &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {project.logo && (
                <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 shadow-lg">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              )}
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
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="https://lorbeafus.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-500 hover:text-gold-400 font-medium"
          >
            Ver todos los proyectos &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
