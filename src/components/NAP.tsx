import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

interface NAPData {
  businessName: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  phone: string;
  email: string;
  website: string;
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

interface NAPProps {
  data: NAPData;
  variant?: 'full' | 'compact' | 'footer' | 'contact';
  showSchema?: boolean;
  className?: string;
}

const NAP: React.FC<NAPProps> = ({ 
  data, 
  variant = 'full', 
  showSchema = true,
  className = '' 
}) => {
  const formatAddress = () => {
    return `${data.address.streetAddress}, ${data.address.addressLocality}, ${data.address.addressRegion} ${data.address.postalCode}, ${data.address.addressCountry}`;
  };



  const generateGoogleMapsUrl = () => {
    const address = encodeURIComponent(formatAddress());
    return `https://www.google.com/maps/search/?api=1&query=${address}`;
  };

  const generateDirectionsUrl = () => {
    const address = encodeURIComponent(formatAddress());
    return `https://www.google.com/maps/dir/?api=1&destination=${address}`;
  };

  // Compact variant for header/footer
  if (variant === 'compact') {
    return (
      <div className={`flex flex-col sm:flex-row gap-4 text-sm ${className}`}>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-rivrang-mint-dark" />
          <a href={`tel:${data.phone}`} className="hover:text-rivrang-mint-dark transition-colors">
            {data.phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-rivrang-mint-dark" />
          <a href={`mailto:${data.email}`} className="hover:text-rivrang-mint-dark transition-colors">
            {data.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-rivrang-mint-dark" />
          <span>{data.address.addressLocality}, {data.address.addressRegion}</span>
        </div>
      </div>
    );
  }

  // Footer variant
  if (variant === 'footer') {
    return (
      <div className={`space-y-4 ${className}`}>
        <div>
          <h3 className="text-lg font-semibold text-rivrang-text-primary mb-3">Contact Information</h3>
          <div className="space-y-2 text-rivrang-text-secondary">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-rivrang-mint-dark mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">{data.businessName}</p>
                <address className="not-italic">
                  {data.address.streetAddress}<br />
                  {data.address.addressLocality}, {data.address.addressRegion} {data.address.postalCode}<br />
                  {data.address.addressCountry}
                </address>
                <a 
                  href={generateGoogleMapsUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-rivrang-mint-dark hover:text-rivrang-mint text-sm inline-flex items-center gap-1 mt-1"
                >
                  View on Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-rivrang-mint-dark" />
              <a href={`tel:${data.phone}`} className="hover:text-rivrang-mint-dark transition-colors">
                {data.phone}
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-rivrang-mint-dark" />
              <a href={`mailto:${data.email}`} className="hover:text-rivrang-mint-dark transition-colors">
                {data.email}
              </a>
            </div>
          </div>
        </div>
        
        {showSchema && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": data.businessName,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": data.address.streetAddress,
                "addressLocality": data.address.addressLocality,
                "addressRegion": data.address.addressRegion,
                "postalCode": data.address.postalCode,
                "addressCountry": data.address.addressCountry
              },
              "telephone": data.phone,
              "email": data.email,
              "url": data.website
            })}
          </script>
        )}
      </div>
    );
  }

  // Contact page variant
  if (variant === 'contact') {
    return (
      <div className={`space-y-6 ${className}`}>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-rivrang-mint/30 shadow-sm">
          <h3 className="text-xl font-semibold text-rivrang-text-primary mb-4 flex items-center">
            <MapPin className="w-6 h-6 text-rivrang-mint-dark mr-2" />
            Visit Our Office
          </h3>
          
          <address className="not-italic text-rivrang-text-secondary mb-4">
            <strong className="text-rivrang-text-primary">{data.businessName}</strong><br />
            {data.address.streetAddress}<br />
            {data.address.addressLocality}, {data.address.addressRegion} {data.address.postalCode}<br />
            {data.address.addressCountry}
          </address>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href={generateGoogleMapsUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-rivrang-mint-dark text-white rounded-lg hover:bg-rivrang-mint transition-colors"
            >
              <MapPin className="w-4 h-4" />
              View on Google Maps
            </a>
            <a 
              href={generateDirectionsUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-rivrang-mint-dark text-rivrang-mint-dark rounded-lg hover:bg-rivrang-mint/10 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-rivrang-mint/30 shadow-sm">
          <h3 className="text-xl font-semibold text-rivrang-text-primary mb-4 flex items-center">
            <Clock className="w-6 h-6 text-rivrang-mint-dark mr-2" />
            Business Hours
          </h3>
          
          <div className="space-y-2 text-rivrang-text-secondary">
            {Object.entries(data.openingHours).map(([day, hours]) => (
              <div key={day} className="flex justify-between items-center">
                <span className="font-medium capitalize">{day}</span>
                <span>{hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-rivrang-mint/30 shadow-sm">
          <h3 className="text-xl font-semibold text-rivrang-text-primary mb-4">Quick Contact</h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-rivrang-mint-dark" />
              <div>
                <p className="text-sm text-rivrang-text-muted">Call us directly</p>
                <a href={`tel:${data.phone}`} className="text-rivrang-text-primary hover:text-rivrang-mint-dark transition-colors font-medium">
                  {data.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-rivrang-mint-dark" />
              <div>
                <p className="text-sm text-rivrang-text-muted">Email us</p>
                <a href={`mailto:${data.email}`} className="text-rivrang-text-primary hover:text-rivrang-mint-dark transition-colors font-medium">
                  {data.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full variant (default)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": data.businessName,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.address.streetAddress,
      "addressLocality": data.address.addressLocality,
      "addressRegion": data.address.addressRegion,
      "postalCode": data.address.postalCode,
      "addressCountry": data.address.addressCountry
    },
    "telephone": data.phone,
    "email": data.email,
    "url": data.website
  };

  return (
    <div className={className}>
      {showSchema && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}
    </div>
  );
};

export default NAP;