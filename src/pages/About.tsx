
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const About = () => {
  return (
    <>
      <section className="pt-28 pb-16 bg-audrey-green-light/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-audrey-earth-dark mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Sobre mí
            </h1>
            <p className="text-lg md:text-xl text-audrey-text mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Mi historia, mi filosofía y mi visión sobre el bienestar holístico
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <SectionTitle 
                title="Mi camino hacia el bienestar holístico" 
                className="mb-6"
              />
              <div className="prose prose-lg max-w-none text-audrey-text">
                <p>
                  Soy Audrey Tessier, y durante los últimos 15 años he dedicado mi vida a explorar la profunda conexión entre nuestro bienestar interno y cómo esto se refleja en nuestra apariencia exterior.
                </p>
                <p>
                  Mi camino comenzó en la peluquería tradicional, donde descubrí mi pasión por ayudar a las personas a sentirse bien consigo mismas. Sin embargo, con el tiempo, sentí que algo faltaba en este enfoque puramente estético.
                </p>
                <p>
                  Esta inquietud me llevó a formarme en diferentes disciplinas holísticas: desde técnicas de sanación energética hasta coaching emocional, pasando por el estudio de productos naturales para el cuidado personal.
                </p>
                <p>
                  Hoy, mi misión es acompañar principalmente a mujeres que desean reconectar consigo mismas y cuidarse desde un lugar más consciente, combinando mi experiencia como peluquera profesional con mis conocimientos en terapias energéticas y bienestar natural.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Audrey Tessier journey" 
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-audrey-earth-light/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Mi filosofía" 
              centered
            />
            <div className="prose prose-lg max-w-none text-audrey-text animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <p>
                Creo firmemente que la verdadera belleza nace desde el interior. Cuando nos sentimos en armonía con nosotros mismos, esto se refleja naturalmente en nuestra apariencia y en cómo nos presentamos al mundo.
              </p>
              <p>
                Mi enfoque se basa en tres pilares fundamentales:
              </p>
              
              <h3 className="font-serif text-xl text-audrey-earth-dark mt-6">Consciencia</h3>
              <p>
                Estar presentes en cada momento y tomar decisiones alineadas con nuestros valores más profundos, tanto en el cuidado personal como en nuestra relación con los demás y con el entorno.
              </p>
              
              <h3 className="font-serif text-xl text-audrey-earth-dark mt-6">Naturalidad</h3>
              <p>
                Respetar los ritmos y necesidades propias de cada persona y de la naturaleza, utilizando elementos y técnicas que potencien nuestra esencia sin forzar ni agredir.
              </p>
              
              <h3 className="font-serif text-xl text-audrey-earth-dark mt-6">Integración</h3>
              <p>
                Entender que somos seres integrales donde lo físico, lo emocional, lo mental y lo energético están en constante interacción, y que el cuidado de uno afecta positivamente a los demás.
              </p>
              
              <p className="mt-6">
                Este enfoque holístico me permite ofrecer no solo servicios de peluquería consciente sino también un acompañamiento más profundo para quienes buscan una transformación integral en sus vidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1546967900-1c804ae8e470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Mi visión" 
                  className="object-cover w-full"
                />
              </div>
            </div>
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <SectionTitle 
                title="Mi visión" 
                className="mb-6"
              />
              <div className="prose prose-lg max-w-none text-audrey-text">
                <p>
                  Sueño con un mundo donde cada vez más personas vivan en coherencia con sus valores más profundos, cuidándose a sí mismas con amor y respeto, y extendiendo ese cuidado hacia los demás y hacia el planeta.
                </p>
                <p>
                  Aspiro a crear espacios —físicos y emocionales— donde cada persona pueda sentirse segura para explorar su propia esencia, reconectar con su sabiduría interior y expresar su belleza única de forma auténtica.
                </p>
                <p>
                  Mi deseo es que, a través de mi trabajo, pueda inspirar un cambio hacia prácticas de belleza y bienestar más conscientes, naturales y sostenibles, contribuyendo así a una nueva cultura del cuidado integral.
                </p>
              </div>
              
              <Link 
                to="/servicios" 
                className="btn-primary inline-flex items-center gap-2 mt-8"
              >
                Descubre mis servicios <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
