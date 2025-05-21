
import React from 'react';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Person' | 'Service' | 'WebPage';
  data: Record<string, any>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  // Base structured data with @context and @type
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
