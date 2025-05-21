
import React from 'react';

interface GoogleMapProps {
  address: string;
  className?: string;
  height?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  address, 
  className = "w-full h-96 rounded-lg overflow-hidden", 
  height = "450" 
}) => {
  // Encode the address for the Google Maps embed URL
  const encodedAddress = encodeURIComponent(address);
  
  return (
    <div className={className}>
      <iframe
        width="100%"
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=${encodedAddress}`}
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
