
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Audrey no solo cuida mi cabello de forma extraordinaria, sino que cada sesión con ella es un regalo para mi bienestar general. Su enfoque consciente marca la diferencia.",
      name: "María López",
      role: "Clienta desde 2019"
    },
    {
      quote: "Las sesiones de acompañamiento con Audrey me han ayudado a reconectar conmigo misma en momentos difíciles. Su presencia tranquila y sus conocimientos crean un espacio seguro para la transformación.",
      name: "Carmen Rodríguez",
      role: "Clienta desde 2020"
    },
    {
      quote: "Desde que conozco a Audrey, mi relación con mi imagen personal ha cambiado completamente. Me ha enseñado a cuidarme desde el amor y la consciencia.",
      name: "Lucía Martínez",
      role: "Clienta desde 2018"
    },
    {
      quote: "Lo que más valoro de Audrey es su autenticidad. No solo es una profesional excepcional tanto en peluquería como en acompañamiento energético, sino que vive lo que predica.",
      name: "Ana González",
      role: "Clienta desde 2021"
    },
    {
      quote: "Tenía miedo de teñirme el pelo por las alergias que he sufrido anteriormente, pero Audrey me propuso alternativas naturales que no solo respetan mi salud sino que dejaron mi cabello mejor que nunca.",
      name: "Isabel Fernández",
      role: "Clienta desde 2022"
    },
    {
      quote: "Los talleres de gestos conscientes para mujeres han sido reveladores. He conectado con otras mujeres maravillosas y hemos aprendido juntas a honrar nuestra naturaleza femenina.",
      name: "Laura Sánchez",
      role: "Participante en talleres"
    },
    {
      quote: "El programa de transformación con Audrey cambió mi vida. Fueron tres meses intensos pero profundamente sanadores que me ayudaron a reconectar con mi verdadera esencia.",
      name: "Marta Ruiz",
      role: "Programa de transformación"
    },
    {
      quote: "Acudo regularmente a sus sesiones de sanación energética y siempre salgo renovada, con claridad mental y física. Es sorprendente cómo puede sentirse un cambio tan profundo en apenas una hora.",
      name: "Patricia Domínguez",
      role: "Sanación energética"
    },
    {
      quote: "Audrey tiene una forma única de cortar el pelo. No es solo un corte, es una experiencia completa donde se tiene en cuenta quién eres realmente. ¡El resultado siempre me encanta!",
      name: "Cristina Vázquez",
      role: "Clienta de peluquería"
    },
  ];

  return (
    <>
      <section className="pt-28 pb-16 bg-audrey-green-light/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-audrey-earth-dark mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Testimonios
            </h1>
            <p className="text-lg md:text-xl text-audrey-text mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Historias de transformación y experiencias compartidas por mis clientas
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                className="h-full"
                style={{ animationDelay: `${0.1 * (index % 3) + 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-audrey-earth-light/20 text-center">
        <div className="container-custom max-w-3xl">
          <SectionTitle 
            title="Tu experiencia importa" 
            subtitle="Me encantaría saber cómo ha sido tu experiencia trabajando conmigo"
            centered
          />

          <p className="text-audrey-text mb-8">
            Si has trabajado conmigo y quieres compartir tu experiencia, me encantaría escucharte. Tu testimonio puede inspirar a otras personas que estén considerando dar el paso hacia un cuidado más consciente.
          </p>

          <Link 
            to="/contacto" 
            className="btn-primary"
          >
            Comparte tu experiencia
          </Link>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
