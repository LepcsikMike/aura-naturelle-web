
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre mí', path: '/sobre-mi' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Testimonios', path: '/testimonios' },
    { name: 'Contacto', path: '/contacto' }
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/90 shadow-sm backdrop-blur-sm' : 'bg-transparent'
    )}>
      <div className="container-custom py-4 md:py-5 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl md:text-3xl text-audrey-earth-dark">
          Audrey Tessier
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden z-50 relative" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <div className={cn(
            'block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2',
            isOpen ? 'opacity-0' : 'opacity-100'
          )}>
            <span className="block absolute h-0.5 w-6 bg-audrey-earth-dark rounded-sm"></span>
            <span className="block absolute h-0.5 w-6 bg-audrey-earth-dark rounded-sm mt-1.5"></span>
            <span className="block absolute h-0.5 w-6 bg-audrey-earth-dark rounded-sm mt-3"></span>
          </div>
          <div className={cn(
            'transition-opacity duration-100',
            isOpen ? 'opacity-100' : 'opacity-0'
          )}>
            <span className="block absolute h-0.5 w-6 bg-audrey-earth-dark transform rotate-45"></span>
            <span className="block absolute h-0.5 w-6 bg-audrey-earth-dark transform -rotate-45"></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className="relative text-audrey-text hover:text-audrey-green-dark transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-audrey-green-dark after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            'fixed inset-0 bg-white/95 flex flex-col justify-center items-center transition-opacity duration-300 md:hidden',
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        >
          <nav className="text-center">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name} className="text-2xl font-serif">
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-audrey-earth-dark hover:text-audrey-green-dark transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
