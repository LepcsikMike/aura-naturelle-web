
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const Home = () => {
  return (
    <>
      <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-audrey-green-light/50 to-transparent">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="animate-fade-in opacity-0" 
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-audrey-earth-dark mb-6">
              Reconecta con tu esencia natural
            </h1>
            <p className="text-lg md:text-xl text-audrey-text mb-8 max-w-lg">
              Te acompaño en un viaje de autodescubrimiento y cuidado holístico, donde el bienestar interior se refleja en tu belleza exterior.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/sobre-mi" 
                className="btn-primary flex items-center gap-2"
              >
                Conóceme <ArrowRight size={18} />
              </Link>
              <Link 
                to="/contacto" 
                className="px-6 py-3 border border-audrey-green-dark text-audrey-green-dark rounded-md hover:bg-audrey-green-light/50 transition-colors duration-300"
              >
                Reserva tu sesión
              </Link>
            </div>
          </div>
          <div 
            className="hidden md:block animate-fade-in opacity-0" 
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544717684-1243da23b545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Audrey Tessier" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-audrey-cream">
        <div className="container-custom">
          <SectionTitle 
            title="Mis Servicios" 
            subtitle="Descubre las diferentes formas en que podemos trabajar juntas para tu bienestar integral"
            centered 
          />

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard 
              title="Acompañamiento Energético"
              description="Sesiones individuales para reconectar con tu esencia, liberar bloqueos emocionales y despertar tu potencial interior a través de técnicas energéticas y coaching holístico."
            />
            <ServiceCard 
              title="Peluquería Consciente"
              description="Un espacio para el cuidado de tu cabello desde un enfoque natural, respetuoso y personalizado. Utilizamos productos naturales que respetan tanto a ti como al medio ambiente."
            />
          </div>

          <div className="flex justify-center mt-12">
            <Link 
              to="/servicios" 
              className="flex items-center gap-2 text-audrey-green-dark hover:text-audrey-green transition-colors"
            >
              Ver todos los servicios <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="Sobre Mí" 
            subtitle="Descubre mi historia y filosofía de vida"
          />

          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div 
                className="rounded-lg overflow-hidden max-w-sm mx-auto animate-fade-in opacity-0" 
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Audrey Tessier portrait" 
                  className="object-cover w-full"
                />
              </div>
            </div>
            <div 
              className="md:col-span-3 animate-fade-in opacity-0" 
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <p className="text-lg mb-6 text-audrey-text">
                Mi camino comenzó cuando descubrí la profunda conexión entre nuestro bienestar interior y cómo esto se refleja en nuestra apariencia exterior. Tras años dedicándome a la peluquería tradicional, sentí la llamada de expandir mi trabajo hacia un enfoque más holístico e integral.
              </p>
              <p className="text-lg mb-6 text-audrey-text">
                Hoy combino mi experiencia como peluquera profesional con mis conocimientos en terapias energéticas, acompañamiento emocional y técnicas de bienestar natural para ofrecer una experiencia transformadora.
              </p>
              <Link 
                to="/sobre-mi" 
                className="btn-primary inline-flex items-center gap-2 mt-4"
              >
                Conoce más de mí <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-audrey-earth-light/30">
        <div className="container-custom">
          <SectionTitle 
            title="Lo que dicen mis clientas" 
            centered 
          />

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="Audrey no solo cuida mi cabello de forma extraordinaria, sino que cada sesión con ella es un regalo para mi bienestar general. Su enfoque consciente marca la diferencia."
              name="María López"
            />
            <TestimonialCard 
              quote="Las sesiones de acompañamiento con Audrey me han ayudado a reconectar conmigo misma en momentos difíciles. Su presencia tranquila y sus conocimientos crean un espacio seguro para la transformación."
              name="Carmen Rodríguez"
            />
            <TestimonialCard 
              quote="Desde que conozco a Audrey, mi relación con mi imagen personal ha cambiado completamente. Me ha enseñado a cuidarme desde el amor y la consciencia."
              name="Lucía Martínez"
            />
          </div>

          <div className="flex justify-center mt-12">
            <Link 
              to="/testimonios" 
              className="flex items-center gap-2 text-audrey-green-dark hover:text-audrey-green transition-colors"
            >
              Ver todos los testimonios <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-audrey-green/10">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-audrey-earth-dark mb-6">
            ¿Lista para comenzar tu viaje de bienestar?
          </h2>
          <p className="text-lg md:text-xl text-audrey-text mb-8 max-w-2xl mx-auto">
            Juntas podemos trabajar en tu transformación interior y exterior desde un enfoque consciente y natural.
          </p>
          <Link 
            to="/contacto" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Contacta conmigo <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
