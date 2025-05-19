
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
  imageSrc?: string;
}

const AnimatedServiceCard: React.FC<AnimatedServiceCardProps> = ({ 
  title, 
  description,
  icon,
  className = '',
  delay = 0.2,
  imageSrc,
}) => {
  // Default fallback image if the provided one fails to load
  const [imgSrc, setImgSrc] = React.useState(imageSrc);
  
  // Handle image loading error
  const handleImageError = () => {
    console.error(`Failed to load image for: ${title}`);
    
    // Set a default fallback based on the title
    if (title.includes("Energético")) {
      setImgSrc("/images/energy-healing.jpg");
    } else if (title.includes("Peluquería")) {
      setImgSrc("/images/hair-salon.jpg");
    } else {
      setImgSrc("/placeholder.svg");
    }
  };

  return (
    <motion.div 
      className={cn(
        'relative group overflow-hidden rounded-xl',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ scale: 1.02 }}
    >
      {imgSrc && (
        <div className="absolute inset-0 z-0">
          <img 
            src={imgSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-audrey-earth-dark/90 via-audrey-earth-dark/40 to-transparent" />
        </div>
      )}
      
      <div className={`p-6 md:p-8 ${imgSrc ? 'text-white relative z-10' : 'bg-white/70 backdrop-blur-sm border border-audrey-earth-light/50'} rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-500`}>
        {icon && (
          <motion.div 
            className="mb-4 text-audrey-green"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.1 }}
          >
            {icon}
          </motion.div>
        )}
        
        <h3 className={`font-serif text-xl md:text-2xl font-medium ${imgSrc ? 'text-white' : 'text-audrey-earth-dark'} mb-3`}>
          {title}
        </h3>
        
        <p className={`${imgSrc ? 'text-white/90' : 'text-audrey-text'}`}>
          {description}
        </p>
        
        <motion.div 
          className="mt-5 h-0.5 w-10 bg-audrey-green"
          initial={{ width: 0 }}
          whileInView={{ width: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedServiceCard;
