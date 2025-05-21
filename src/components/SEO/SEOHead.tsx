
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl = 'https://www.audreytessier.es',
  ogImage = '/lovable-uploads/a9582a4d-a398-4560-9bc6-cc040fd9026b.png',
  ogType = 'website',
  children
}) => {
  // Make the base URL dynamic if needed later
  const baseUrl = 'https://www.audreytessier.es';
  const fullCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical Link */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`} />
      
      {/* Children allows for page-specific additional tags */}
      {children}
    </Helmet>
  );
};

export default SEOHead;
