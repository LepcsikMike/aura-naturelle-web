
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  className = '',
}) => {
  return (
    <div 
      className={cn(
        'p-6 md:p-8 bg-white border border-audrey-earth-light/50 rounded-lg relative animate-fade-in opacity-0',
        className
      )}
      style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
    >
      <div className="text-4xl text-audrey-green/30 font-serif absolute top-4 left-4">
        "
      </div>
      <p className="italic text-audrey-text relative z-10 mb-4">
        "{quote}"
      </p>
      <div className="mt-4 font-medium text-audrey-earth-dark">
        {name}
        {role && <span className="text-audrey-text/70 font-normal"> - {role}</span>}
      </div>
    </div>
  );
};

export default TestimonialCard;
