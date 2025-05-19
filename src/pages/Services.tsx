
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  return (
    <>
      <section className="pt-28 pb-16 bg-audrey-green-light/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-audrey-earth-dark mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Mis servicios
            </h1>
            <p className="text-lg md:text-xl text-audrey-text mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Descubre cómo podemos trabajar juntas para tu bienestar integral
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="Acompañamiento energético y emocional" 
            subtitle="Sesiones personalizadas para reconectar contigo misma y liberar bloqueos"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Sesión de reconexión"
              description="Un espacio seguro para explorar tu interior, identificar patrones limitantes y reconectar con tu esencia. Incluye técnicas de respiración, meditación guiada y sanación energética."
            />
            <ServiceCard 
              title="Coaching de bienestar integral"
              description="Acompañamiento personalizado para definir y alcanzar tus objetivos de bienestar, integrando aspectos físicos, emocionales y espirituales. Ideal para procesos de cambio y transformación."
            />
            <ServiceCard 
              title="Rituales de autocuidado"
              description="Aprende prácticas y rutinas diarias para cuidarte desde un lugar consciente. Creamos juntas rituales personalizados que se adapten a tu estilo de vida y necesidades específicas."
            />
            <ServiceCard 
              title="Sanación energética"
              description="Sesiones para equilibrar tu campo energético, liberar bloqueos y facilitar el flujo de vitalidad en tu cuerpo. Una experiencia profundamente relajante y regeneradora."
            />
            <ServiceCard 
              title="Gestos conscientes para mujeres"
              description="Un espacio de encuentro entre mujeres para compartir, aprender y crecer juntas a través de diversos talleres temáticos sobre autoconocimiento y bienestar femenino."
            />
            <ServiceCard 
              title="Programa de transformación"
              description="Un proceso profundo de acompañamiento durante 3 meses para quienes buscan una renovación integral en sus vidas. Incluye sesiones regulares y seguimiento personalizado."
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-audrey-earth-light/20">
        <div className="container-custom">
          <SectionTitle 
            title="Peluquería consciente" 
            subtitle="Cuidado del cabello desde un enfoque natural y respetuoso"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Corte consciente"
              description="Más que un simple corte, es una experiencia completa donde se tiene en cuenta tu energía personal, la forma de tu rostro y tu estilo de vida. Utilizamos técnicas que respetan el movimiento natural de tu cabello."
            />
            <ServiceCard 
              title="Coloración natural"
              description="Tintes vegetales y semi-vegetales que cuidan tanto de tu cabello como del planeta. Colores vibrantes o sutiles que respetan la salud capilar y minimizan la exposición a químicos agresivos."
            />
            <ServiceCard 
              title="Tratamientos capilares holísticos"
              description="Rituales de nutrición profunda para tu cabello utilizando aceites esenciales, hierbas y productos naturales seleccionados específicamente para tus necesidades capilares."
            />
            <ServiceCard 
              title="Peinados para ocasiones especiales"
              description="Creaciones que realzan tu belleza natural para esos momentos importantes, utilizando técnicas y productos respetuosos con tu cabello y con el medio ambiente."
            />
            <ServiceCard 
              title="Asesoría de imagen consciente"
              description="Descubre qué corte, color y estilo se alinean mejor no solo con tus características físicas, sino también con tu esencia personal y estilo de vida."
            />
            <ServiceCard 
              title="Rituales de autocuidado capilar"
              description="Aprende a cuidar tu cabello en casa con productos naturales y técnicas sencillas. Te enseño a preparar tus propios tratamientos capilares con ingredientes accesibles."
            />
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-audrey-earth-dark mb-6">
            ¿Te gustaría hablar sobre tus necesidades específicas?
          </h2>
          <p className="text-lg md:text-xl text-audrey-text mb-8 max-w-2xl mx-auto">
            Ofrezco también servicios personalizados adaptados a cada persona.
            Podemos hablar y crear juntas un plan que se ajuste perfectamente a ti.
          </p>
          <Link 
            to="/contacto" 
            className="btn-primary"
          >
            Contacta conmigo
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
