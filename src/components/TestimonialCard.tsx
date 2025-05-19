
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

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
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -5 }}
    >
      <Card className={cn(
        'h-full bg-white/80 backdrop-blur-sm border border-audrey-earth-light/30 shadow-sm hover:shadow-md transition-all duration-500',
        className
      )}>
        <CardContent className="p-6 md:p-8 relative">
          <div className="text-4xl text-audrey-green/30 font-serif absolute top-4 left-4">
            "
          </div>
          <p className="italic text-audrey-text relative z-10 mb-4">
            "{quote}"
          </p>
          <div className="mt-6 pt-4 border-t border-audrey-earth-light/30">
            <div className="font-medium text-audrey-earth-dark">
              {name}
              {role && <span className="text-audrey-text/70 font-normal block text-sm mt-1">{role}</span>}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
