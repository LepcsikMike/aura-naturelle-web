
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { Testimonial } from '@/data/testimonials';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="section-padding bg-audrey-earth-light/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-gradient-to-bl from-audrey-green/10 to-transparent blur-3xl"></div>
      
      <div className="container-custom relative z-10 my-[40px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }}
        >
          <SectionTitle title="Lo que dicen mis clientas" centered />
        </motion.div>

        <TestimonialsCarousel testimonials={testimonials} className="mt-8" />

        <motion.div 
          className="flex justify-center mt-12" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link 
            to="/testimonios" 
            className="group flex items-center gap-2 text-audrey-green-dark hover:text-audrey-green transition-colors"
          >
            Ver todos los testimonios 
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
