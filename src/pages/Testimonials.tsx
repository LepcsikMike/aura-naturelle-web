import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';
import { motion } from 'framer-motion';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
const Testimonials = () => {
  const featuredTestimonials = [{
    quote: "Audrey no solo cuida mi cabello de forma extraordinaria, sino que cada sesión con ella es un regalo para mi bienestar general. Su enfoque consciente marca la diferencia.",
    name: "María López",
    role: "Clienta desde 2019"
  }, {
    quote: "Las sesiones de acompañamiento con Audrey me han ayudado a reconectar conmigo misma en momentos difíciles. Su presencia tranquila y sus conocimientos crean un espacio seguro para la transformación.",
    name: "Carmen Rodríguez",
    role: "Clienta desde 2020"
  }, {
    quote: "Desde que conozco a Audrey, mi relación con mi imagen personal ha cambiado completamente. Me ha enseñado a cuidarme desde el amor y la consciencia.",
    name: "Lucía Martínez",
    role: "Clienta desde 2018"
  }];
  const allTestimonials = [{
    quote: "Audrey no solo cuida mi cabello de forma extraordinaria, sino que cada sesión con ella es un regalo para mi bienestar general. Su enfoque consciente marca la diferencia.",
    name: "María López",
    role: "Clienta desde 2019"
  }, {
    quote: "Las sesiones de acompañamiento con Audrey me han ayudado a reconectar conmigo misma en momentos difíciles. Su presencia tranquila y sus conocimientos crean un espacio seguro para la transformación.",
    name: "Carmen Rodríguez",
    role: "Clienta desde 2020"
  }, {
    quote: "Desde que conozco a Audrey, mi relación con mi imagen personal ha cambiado completamente. Me ha enseñado a cuidarme desde el amor y la consciencia.",
    name: "Lucía Martínez",
    role: "Clienta desde 2018"
  }, {
    quote: "Lo que más valoro de Audrey es su autenticidad. No solo es una profesional excepcional tanto en peluquería como en acompañamiento energético, sino que vive lo que predica.",
    name: "Ana González",
    role: "Clienta desde 2021"
  }, {
    quote: "Tenía miedo de teñirme el pelo por las alergias que he sufrido anteriormente, pero Audrey me propuso alternativas naturales que no solo respetan mi salud sino que dejaron mi cabello mejor que nunca.",
    name: "Isabel Fernández",
    role: "Clienta desde 2022"
  }, {
    quote: "Los talleres de gestos conscientes para mujeres han sido reveladores. He conectado con otras mujeres maravillosas y hemos aprendido juntas a honrar nuestra naturaleza femenina.",
    name: "Laura Sánchez",
    role: "Participante en talleres"
  }, {
    quote: "El programa de transformación con Audrey cambió mi vida. Fueron tres meses intensos pero profundamente sanadores que me ayudaron a reconectar con mi verdadera esencia.",
    name: "Marta Ruiz",
    role: "Programa de transformación"
  }, {
    quote: "Acudo regularmente a sus sesiones de sanación energética y siempre salgo renovada, con claridad mental y física. Es sorprendente cómo puede sentirse un cambio tan profundo en apenas una hora.",
    name: "Patricia Domínguez",
    role: "Sanación energética"
  }, {
    quote: "Audrey tiene una forma única de cortar el pelo. No es solo un corte, es una experiencia completa donde se tiene en cuenta quién eres realmente. ¡El resultado siempre me encanta!",
    name: "Cristina Vázquez",
    role: "Clienta de peluquería"
  }];
  return <>
      <section className="pt-28 pb-16 bg-audrey-green-light/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-audrey-green/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-audrey-earth-light/20 blur-3xl rounded-full"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 className="font-serif text-4xl md:text-5xl font-light text-audrey-earth-dark mb-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              Testimonios
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-audrey-text mb-8" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              Historias de transformación y experiencias compartidas por mis clientas
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute -top-96 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-audrey-earth-light/10 rounded-full blur-3xl"></div>
        
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
            <SectionTitle title="Testimonios destacados" centered className="mb-12" />
          </motion.div>

          <TestimonialsCarousel testimonials={featuredTestimonials} />

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
        }} className="mt-20">
            <SectionTitle title="Todas las experiencias" centered className="mb-12" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} name={testimonial.name} role={testimonial.role} className="h-full" delay={0.1 * (index % 3)} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-audrey-earth-light/20 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501869150797-9bbb596118ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center"></div>
        
        <div className="container-custom max-w-3xl relative z-10 my-[40px]">
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
            <SectionTitle title="Tu experiencia importa" subtitle="Me encantaría saber cómo ha sido tu experiencia trabajando conmigo" centered />

            <p className="text-audrey-text mb-8">
              Si has trabajado conmigo y quieres compartir tu experiencia, me encantaría escucharte. Tu testimonio puede inspirar a otras personas que estén considerando dar el paso hacia un cuidado más consciente.
            </p>

            <Link to="/contacto" className="btn-primary hover:scale-105 transition-transform duration-300">
              Comparte tu experiencia
            </Link>
          </motion.div>
        </div>
      </section>
    </>;
};
export default Testimonials;