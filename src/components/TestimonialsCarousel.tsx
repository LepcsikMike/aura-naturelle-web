
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import TestimonialCard from '@/components/TestimonialCard';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  name: string;
  role?: string;
}

interface TestimonialsCarouselProps {
  testimonials: TestimonialProps[];
  className?: string;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials, className }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div 
      className={`relative ${className || ''}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className={`pl-4 ${isMobile ? 'basis-full' : 'basis-1/2 md:basis-1/3'}`}>
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                delay={0.1 * index}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 md:-left-12 bg-white/70 backdrop-blur-sm border border-audrey-earth-light/30 hover:bg-audrey-green-light/70" />
        <CarouselNext className="hidden md:flex -right-4 md:-right-12 bg-white/70 backdrop-blur-sm border border-audrey-earth-light/30 hover:bg-audrey-green-light/70" />
      </Carousel>
      
      <div className="flex justify-center mt-8 gap-3 md:hidden">
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/70 backdrop-blur-sm border border-audrey-earth-light/30 hover:bg-audrey-green-light/70">
          <ArrowLeft size={18} className="text-audrey-earth-dark" />
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/70 backdrop-blur-sm border border-audrey-earth-light/30 hover:bg-audrey-green-light/70">
          <ArrowRight size={18} className="text-audrey-earth-dark" />
        </button>
      </div>
    </motion.div>
  );
};

export default TestimonialsCarousel;
