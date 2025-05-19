
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ParallaxHero = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('/lovable-uploads/cbe7f194-38ba-45bb-b090-6defb3fe07c1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9)",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-audrey-cream via-transparent to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-audrey-cream/90 via-audrey-cream/60 to-transparent z-0" />
      
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="backdrop-blur-sm bg-white/20 p-8 md:p-10 rounded-2xl border border-white/20 shadow-xl"
        >
          <motion.h1 
            className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-audrey-earth-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Reconecta con tu esencia natural
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-audrey-text mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Te acompaño en un viaje de autodescubrimiento y cuidado holístico, donde el bienestar interior se refleja en tu belleza exterior.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link 
              to="/sobre-mi" 
              className="btn-primary flex items-center gap-2 transition-transform hover:scale-105 duration-300"
            >
              Conóceme <ArrowRight size={18} />
            </Link>
            <Link 
              to="/contacto" 
              className="px-6 py-3 border border-audrey-green-dark text-audrey-green-dark rounded-md bg-white/50 backdrop-blur-sm hover:bg-audrey-green-light/50 transition-all duration-300"
            >
              Reserva tu sesión
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1544717684-1243da23b545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Audrey Tessier" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-audrey-green-dark/30 to-transparent mix-blend-overlay" />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-audrey-earth-dark/70 mb-2 text-sm">Descubre más</p>
        <motion.div 
          className="w-1 h-8 bg-audrey-green/40 rounded-full" 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default ParallaxHero;
