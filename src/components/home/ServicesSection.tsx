
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';

const ServicesSection: React.FC = () => {
  return (
    <section className="section-padding relative bg-audrey-cream overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-audrey-green/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-audrey-earth-light/20 blur-3xl"></div>
      
      <div className="container-custom relative z-10 my-[40px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }}
        >
          <SectionTitle 
            title="Mis Servicios" 
            subtitle="Descubre las diferentes formas en que podemos trabajar juntas para tu bienestar integral" 
            centered 
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedServiceCard 
            title="Acompañamiento Energético" 
            description="Sesiones individuales para reconectar con tu esencia, liberar bloqueos emocionales y despertar tu potencial interior a través de técnicas energéticas y coaching holístico." 
            imageSrc="/images/services/energy-coaching.jpg" 
            linkTo="/servicios" 
          />
          <AnimatedServiceCard 
            title="Peluquería Consciente" 
            description="Un espacio para el cuidado de tu cabello desde un enfoque natural, respetuoso y personalizado. Utilizamos productos naturales que respetan tanto a ti como al medio ambiente." 
            imageSrc="/images/services/conscious-hairdressing.jpg" 
            delay={0.3} 
            linkTo="/servicios" 
          />
        </div>

        <motion.div 
          className="flex justify-center mt-12" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link 
            to="/servicios" 
            className="group flex items-center gap-2 text-audrey-green-dark hover:text-audrey-green transition-colors"
          >
            Ver todos los servicios 
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
