
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-audrey-cream py-12 border-t border-audrey-earth-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="font-serif text-2xl text-audrey-earth-dark">
              Audrey Tessier
            </Link>
            <p className="mt-4 text-audrey-text">
              Especialista en bienestar holístico y peluquería consciente. Acompañamiento energético y emocional para reconectar contigo misma.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4 text-audrey-earth-dark">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-audrey-text hover:text-audrey-green-dark transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/sobre-mi" className="text-audrey-text hover:text-audrey-green-dark transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-audrey-text hover:text-audrey-green-dark transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/testimonios" className="text-audrey-text hover:text-audrey-green-dark transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-audrey-text hover:text-audrey-green-dark transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4 text-audrey-earth-dark">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-audrey-green" />
                <a href="mailto:info@audreytessier.es" className="text-audrey-text hover:text-audrey-green-dark transition-colors">
                  info@audreytessier.es
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-audrey-green" />
                <a href="tel:+34600000000" className="text-audrey-text hover:text-audrey-green-dark transition-colors">
                  +34 600 000 000
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-audrey-text hover:text-audrey-green-dark transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-audrey-text hover:text-audrey-green-dark transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-audrey-earth-light text-sm text-center text-audrey-text/80">
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
            <p>&copy; {new Date().getFullYear()} Audrey Tessier. Todos los derechos reservados.</p>
            <div className="flex gap-4 justify-center">
              <Link to="/aviso-legal" className="hover:text-audrey-green-dark transition-colors">
                Aviso Legal
              </Link>
              <Link to="/privacidad" className="hover:text-audrey-green-dark transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
