
import React from 'react';
import SEOHead from '@/components/SEO/SEOHead';
import StructuredData from '@/components/SEO/StructuredData';

const HomeSEO: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Audrey Tessier | Bienestar Holístico y Peluquería Consciente"
        description="Especialista en bienestar holístico y peluquería consciente en Madrid. Acompañamiento energético y emocional para reconectar con tu esencia natural."
        keywords="bienestar holístico, peluquería consciente, acompañamiento energético, bienestar integral, Madrid"
        canonicalUrl="/"
      />
      
      <StructuredData 
        type="WebPage" 
        data={{
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
        }}
      />
    </>
  );
};

export default HomeSEO;
