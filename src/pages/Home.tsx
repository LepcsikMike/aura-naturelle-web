
import React from 'react';
import ParallaxHero from '@/components/ParallaxHero';
import HomeSEO from '@/components/home/HomeSEO';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import { homeTestimonials } from '@/data/testimonials';

const Home = () => {
  return (
    <>
      <HomeSEO />
      <ParallaxHero />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection testimonials={homeTestimonials} />
      <CtaSection />
    </>
  );
};

export default Home;
