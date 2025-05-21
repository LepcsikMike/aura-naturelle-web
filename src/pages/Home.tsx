
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ParallaxHero from '@/components/ParallaxHero';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Home = () => {
  const testimonials = [{
    quote: "Audrey no solo cuida mi cabello de forma extraordinaria, sino que cada sesión con ella es un regalo para mi bienestar general. Su enfoque consciente marca la diferencia.",
    name: "María López"
  }, {
    quote: "Las sesiones de acompañamiento con Audrey me han ayudado a reconectar conmigo misma en momentos difíciles. Su presencia tranquila y sus conocimientos crean un espacio seguro para la transformación.",
    name: "Carmen Rodríguez"
  }, {
    quote: "Desde que conozco a Audrey, mi relación con mi imagen personal ha cambiado completamente. Me ha enseñado a cuidarme desde el amor y la consciencia.",
    name: "Lucía Martínez"
  }, {
    quote: "Lo que más valoro de Audrey es su autenticidad. No solo es una profesional excepcional tanto en peluquería como en acompañamiento energético, sino que vive lo que predica.",
    name: "Ana González",
    role: "Clienta desde 2021"
  }];
  
  return <>
      {/* Add SEO-specific meta tags for this page */}
      <Helmet>
        <title>Audrey Tessier | Bienestar Holístico y Peluquería Consciente</title>
        <meta name="description" content="Especialista en bienestar holístico y peluquería consciente en Madrid. Acompañamiento energético y emocional para reconectar con tu esencia natural." />
        <meta name="keywords" content="bienestar holístico, peluquería consciente, acompañamiento energético, bienestar integral, Madrid" />
        {/* Structured data for this specific page */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'name': 'Audrey Tessier | Bienestar Holístico',
            'description': 'Especialista en bienestar holístico y peluquería consciente en Madrid',
            'mainEntity': {
              '@type': 'Service',
              'name': 'Servicios de Bienestar Holístico',
              'provider': {
                '@type': 'LocalBusiness',
                'name': 'Audrey Tessier'
              }
            }
          })}
        </script>
      </Helmet>

      <ParallaxHero />

      <section className="section-padding relative bg-audrey-cream overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-audrey-green/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-audrey-earth-light/20 blur-3xl"></div>
        
        <div className="container-custom relative z-10 my-[40px]">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }}>
            <SectionTitle title="Mis Servicios" subtitle="Descubre las diferentes formas en que podemos trabajar juntas para tu bienestar integral" centered />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedServiceCard title="Acompañamiento Energético" description="Sesiones individuales para reconectar con tu esencia, liberar bloqueos emocionales y despertar tu potencial interior a través de técnicas energéticas y coaching holístico." imageSrc="/images/services/energy-coaching.jpg" linkTo="/servicios" />
            <AnimatedServiceCard title="Peluquería Consciente" description="Un espacio para el cuidado de tu cabello desde un enfoque natural, respetuoso y personalizado. Utilizamos productos naturales que respetan tanto a ti como al medio ambiente." imageSrc="/images/services/conscious-hairdressing.jpg" delay={0.3} linkTo="/servicios" />
          </div>

          <motion.div className="flex justify-center mt-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          delay: 0.4
        }}>
            <Link to="/servicios" className="group flex items-center gap-2 text-audrey-green-dark hover:text-audrey-green transition-colors">
              Ver todos los servicios 
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="container-custom my-[40px]">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }}>
            <SectionTitle title="Sobre Mí" subtitle="Descubre mi historia y filosofía de vida" />
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <motion.div className="rounded-lg overflow-hidden max-w-sm mx-auto" initial={{
              opacity: 0,
              scale: 0.9,
              rotate: -5
            }} whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }}>
                <img 
                  alt="Audrey Tessier - Especialista en bienestar holístico" 
                  className="object-cover w-full shadow-xl rounded-lg" 
                  src="/lovable-uploads/21d3c4f5-69e3-4be8-a2dd-ab86039ce555.jpg"
                  loading="lazy"
                  width="400"
                  height="600" 
                />
              </motion.div>
            </div>
            <div className="md:col-span-3">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.7,
              delay: 0.2
            }} className="space-y-6">
                <p className="text-lg text-audrey-text">
                  Mi camino comenzó cuando descubrí la profunda conexión entre nuestro bienestar interior y cómo esto se refleja en nuestra apariencia exterior. Tras años dedicándome a la peluquería tradicional, sentí la llamada de expandir mi trabajo hacia un enfoque más holístico e integral.
                </p>
                <p className="text-lg text-audrey-text">
                  Hoy combino mi experiencia como peluquera profesional con mis conocimientos en terapias energéticas, acompañamiento emocional y técnicas de bienestar natural para ofrecer una experiencia transformadora.
                </p>
                <Link to="/sobre-mi" className="btn-primary group inline-flex items-center gap-2 mt-4">
                  Conoce más de mí 
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-audrey-earth-light/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-64 bg-gradient-to-bl from-audrey-green/10 to-transparent blur-3xl"></div>
        
        <div className="container-custom relative z-10 my-[40px]">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }}>
            <SectionTitle title="Lo que dicen mis clientas" centered />
          </motion.div>

          <TestimonialsCarousel testimonials={testimonials} className="mt-8" />

          <motion.div className="flex justify-center mt-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          delay: 0.3
        }}>
            <Link to="/testimonios" className="group flex items-center gap-2 text-audrey-green-dark hover:text-audrey-green transition-colors">
              Ver todos los testimonios 
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-audrey-green/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487260211189-670c54da558d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-audrey-green/10"></div>
        
        <div className="container-custom text-center relative z-10 my-[40px]">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }}>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-audrey-earth-dark mb-6">
              ¿Lista para comenzar tu viaje de bienestar?
            </h2>
            <p className="text-lg md:text-xl text-audrey-text mb-8 max-w-2xl mx-auto">
              Juntas podemos trabajar en tu transformación interior y exterior desde un enfoque consciente y natural.
            </p>
            <Link to="/contacto" className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              Contacta conmigo <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>;
};
export default Home;
