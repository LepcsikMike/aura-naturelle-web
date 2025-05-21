
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CtaSection: React.FC = () => {
  return (
    <section className="section-padding bg-audrey-green/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487260211189-670c54da558d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-audrey-green/10"></div>
      
      <div className="container-custom text-center relative z-10 my-[40px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light text-audrey-earth-dark mb-6">
            ¿Lista para comenzar tu viaje de bienestar?
          </h2>
          <p className="text-lg md:text-xl text-audrey-text mb-8 max-w-2xl mx-auto">
            Juntas podemos trabajar en tu transformación interior y exterior desde un enfoque consciente y natural.
          </p>
          <Link 
            to="/contacto" 
            className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            Contacta conmigo <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
