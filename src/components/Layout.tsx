
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StructuredData from './SEO/StructuredData';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Define base business structured data
  const businessData = {
    name: 'Audrey Tessier - Bienestar Holístico',
    description: 'Especialista en bienestar holístico y peluquería consciente. Acompañamiento energético y emocional para reconectar contigo misma.',
    url: 'https://www.audreytessier.es',
    telephone: '+34600000000',
    email: 'info@audreytessier.es',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Ejemplo 123',
      addressLocality: 'Madrid',
      postalCode: '28001',
      addressCountry: 'ES'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00'
      }
    ],
    image: '/lovable-uploads/21d3c4f5-69e3-4be8-a2dd-ab86039ce555.jpg'
  };
  
  // Page-specific structured data
  const pageData = {
    '@type': 'WebPage',
    '@id': `https://www.audreytessier.es${location.pathname}#webpage`,
    url: `https://www.audreytessier.es${location.pathname}`,
    name: getPageTitle(location.pathname),
    isPartOf: {
      '@id': 'https://www.audreytessier.es/#website'
    },
    inLanguage: 'es-ES'
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Add structured data */}
      <StructuredData type="LocalBusiness" data={businessData} />
      <StructuredData type="WebPage" data={pageData} />
      
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Helper function to get page titles based on path
function getPageTitle(path: string): string {
  switch(path) {
    case '/':
      return 'Audrey Tessier | Bienestar Holístico y Peluquería Consciente';
    case '/sobre-mi':
      return 'Sobre Mí | Audrey Tessier';
    case '/servicios':
      return 'Servicios de Bienestar Holístico y Peluquería Consciente | Audrey Tessier';
    case '/testimonios':
      return 'Testimonios | Audrey Tessier';
    case '/contacto':
      return 'Contacto | Audrey Tessier';
    case '/aviso-legal':
      return 'Aviso Legal | Audrey Tessier';
    case '/privacidad':
      return 'Política de Privacidad | Audrey Tessier';
    default:
      return 'Audrey Tessier | Bienestar Holístico';
  }
}

export default Layout;
