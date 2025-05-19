
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  className?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  className = '',
  delay = 0.3,
}) => {
  return (
    <motion.div 
      className={cn(
        'p-6 md:p-8 bg-white/90 backdrop-blur-sm border border-audrey-earth-light/50 rounded-lg relative shadow-sm hover:shadow-md transition-all duration-500',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="text-4xl text-audrey-green/50 font-serif absolute top-4 left-4">
        "
      </div>
      <p className="italic text-audrey-text relative z-10 mb-4">
        "{quote}"
      </p>
      <div className="mt-4 font-medium text-audrey-earth-dark">
        {name}
        {role && <span className="text-audrey-text/80 font-normal"> - {role}</span>}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
