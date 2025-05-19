import React from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
const Contact = () => {
  return <>
      <section className="pt-28 pb-16 bg-audrey-green/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-audrey-earth-dark mb-6 animate-fade-in opacity-0" style={{
            animationDelay: '0.2s',
            animationFillMode: 'forwards'
          }}>
              Contacto
            </h1>
            <p className="text-lg md:text-xl text-audrey-text mb-8 animate-fade-in opacity-0" style={{
            animationDelay: '0.4s',
            animationFillMode: 'forwards'
          }}>
              Estoy aquí para acompañarte en tu viaje hacia el bienestar integral
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom my-[40px]">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <SectionTitle title="Envíame un mensaje" />
              <ContactForm />
            </div>

            <div className="lg:col-span-2">
              <SectionTitle title="Información de contacto" />
              <div className="bg-white border border-audrey-earth-light/50 rounded-lg p-6 shadow-sm animate-fade-in opacity-0" style={{
              animationDelay: '0.3s',
              animationFillMode: 'forwards'
            }}>
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <Mail size={20} className="text-audrey-green flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-audrey-earth-dark mb-1">Email</h3>
                      <a href="mailto:info@audreytessier.es" className="text-audrey-text hover:text-audrey-green-dark transition-colors">
                        info@audreytessier.es
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone size={20} className="text-audrey-green flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-audrey-earth-dark mb-1">Teléfono</h3>
                      <a href="tel:+34600000000" className="text-audrey-text hover:text-audrey-green-dark transition-colors">
                        +34 600 000 000
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MapPin size={20} className="text-audrey-green flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-audrey-earth-dark mb-1">Ubicación</h3>
                      <p className="text-audrey-text">
                        Calle Ejemplo 123<br />
                        28001 Madrid
                      </p>
                      <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-audrey-green-dark hover:text-audrey-green font-medium text-sm mt-1 inline-block">
                        Ver en Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock size={20} className="text-audrey-green flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-audrey-earth-dark mb-1">Horario</h3>
                      <p className="text-audrey-text">
                        Lunes a Viernes: 10:00 - 19:00<br />
                        Sábado: 10:00 - 14:00
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-audrey-earth-light/50 pt-4 mt-6">
                    <h3 className="font-medium text-audrey-earth-dark mb-3">Sígueme en redes</h3>
                    <div className="flex gap-4">
                      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-audrey-cream hover:bg-audrey-green-light w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                        <Instagram size={20} className="text-audrey-earth-dark" />
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-audrey-cream hover:bg-audrey-green-light w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                        <Facebook size={20} className="text-audrey-earth-dark" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-audrey-earth-light/20">
        <div className="container-custom my-0 py-[40px]">
          <SectionTitle title="Ubicación" subtitle="Encuentra mi estudio en el centro de Madrid" centered />
          
          <div className="mt-8 h-96 rounded-lg overflow-hidden shadow-md animate-fade-in opacity-0" style={{
          animationDelay: '0.3s',
          animationFillMode: 'forwards'
        }}>
            {/* Replace with actual Google Maps embed */}
            <div className="w-full h-full bg-audrey-cream flex items-center justify-center my-0">
              <p className="text-audrey-text">Mapa se cargará aquí</p>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Contact;