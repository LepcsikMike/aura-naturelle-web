
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface AnimatedServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
  imageSrc?: string;
  linkTo?: string;
}

const AnimatedServiceCard: React.FC<AnimatedServiceCardProps> = ({ 
  title, 
  description,
  icon,
  className = '',
  delay = 0.2,
  imageSrc,
  linkTo,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={cn(
        'relative group overflow-hidden rounded-xl h-full',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {imageSrc && (
        <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
          <motion.img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
            initial={{ scale: 1.0 }}
            animate={{ scale: isHovered ? 1.08 : 1.0 }}
            transition={{ duration: 0.7 }}
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-audrey-earth-dark/95 via-audrey-earth-dark/70 to-audrey-earth-dark/30" />
        </div>
      )}
      
      <Card className={`h-full border-0 shadow-none ${
        imageSrc 
          ? 'bg-transparent text-white relative z-10' 
          : 'bg-white/80 backdrop-blur-md border border-audrey-earth-light/30'
      }`}>
        <CardContent className="p-6 md:p-8 h-full flex flex-col">
          {icon && (
            <motion.div 
              className="mb-4 text-audrey-green"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: delay + 0.1 }}
            >
              {icon}
            </motion.div>
          )}
          
          <h3 className={`font-serif text-xl md:text-2xl font-medium ${
            imageSrc 
              ? 'text-white drop-shadow-md' 
              : 'text-audrey-earth-dark'
          } mb-4`}>
            {title}
          </h3>
          
          <p className={`${
            imageSrc 
              ? 'text-white/95 drop-shadow-sm' 
              : 'text-audrey-text'
          } flex-grow`}>
            {description}
          </p>
          
          <div className="mt-6">
            <motion.div 
              className={`h-0.5 w-10 ${imageSrc ? 'bg-white/80' : 'bg-audrey-green'}`}
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              animate={{ width: isHovered ? 60 : 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: delay + 0.3 }}
            />
            
            {linkTo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <a 
                  href={linkTo} 
                  className={`group inline-flex items-center gap-2 text-sm ${
                    imageSrc 
                      ? 'text-white hover:text-white/90' 
                      : 'text-audrey-green hover:text-audrey-green-dark'
                  } transition-colors`}
                >
                  Ver más <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnimatedServiceCard;
