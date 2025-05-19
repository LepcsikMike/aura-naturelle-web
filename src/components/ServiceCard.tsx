
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description,
  icon,
  className = '' 
}) => {
  return (
    <div className={cn(
      'bg-white p-6 md:p-8 rounded-lg shadow-sm border border-audrey-earth-light/50 hover:shadow-md transition-shadow duration-300 animate-fade-in opacity-0',
      className
    )} 
    style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
      {icon && (
        <div className="mb-4 text-audrey-green">
          {icon}
        </div>
      )}
      <h3 className="font-serif text-xl md:text-2xl font-medium text-audrey-earth-dark mb-3">
        {title}
      </h3>
      <p className="text-audrey-text">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
