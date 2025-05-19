
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = '' 
}) => {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      <h2 className="font-serif text-3xl md:text-4xl font-light text-audrey-earth-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-audrey-text/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div 
        className={cn(
          'w-20 h-0.5 bg-audrey-green mt-4',
          centered && 'mx-auto'
        )}
      />
    </div>
  );
};

export default SectionTitle;
