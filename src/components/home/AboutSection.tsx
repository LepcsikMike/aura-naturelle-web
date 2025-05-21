
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom my-[40px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }}
        >
          <SectionTitle title="Sobre Mí" subtitle="Descubre mi historia y filosofía de vida" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <motion.div 
              className="rounded-lg overflow-hidden max-w-sm mx-auto" 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }} 
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
            >
              <img 
                alt="Audrey Tessier - Especialista en bienestar holístico" 
                className="object-cover w-full shadow-xl rounded-lg" 
                src="/lovable-uploads/21d3c4f5-69e3-4be8-a2dd-ab86039ce555.jpg"
                loading="lazy"
                width="400"
                height="600" 
              />
            </motion.div>
          </div>
          <div className="md:col-span-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.7, delay: 0.2 }} 
              className="space-y-6"
            >
              <p className="text-lg text-audrey-text">
                Mi camino comenzó cuando descubrí la profunda conexión entre nuestro bienestar interior y cómo esto se refleja en nuestra apariencia exterior. Tras años dedicándome a la peluquería tradicional, sentí la llamada de expandir mi trabajo hacia un enfoque más holístico e integral.
              </p>
              <p className="text-lg text-audrey-text">
                Hoy combino mi experiencia como peluquera profesional con mis conocimientos en terapias energéticas, acompañamiento emocional y técnicas de bienestar natural para ofrecer una experiencia transformadora.
              </p>
              <Link 
                to="/sobre-mi" 
                className="btn-primary group inline-flex items-center gap-2 mt-4"
              >
                Conoce más de mí 
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
