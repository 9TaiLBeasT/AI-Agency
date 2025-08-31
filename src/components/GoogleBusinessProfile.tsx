import React from 'react';
import { Star, MapPin, Phone, Clock, ExternalLink, MessageCircle } from 'lucide-react';

interface GoogleBusinessProfileProps {
  businessName: string;
  address: string;
  phone: string;
  rating: number;
  reviewCount: number;
  googleBusinessUrl?: string;
  className?: string;
}

const GoogleBusinessProfile: React.FC<GoogleBusinessProfileProps> = ({
  businessName,
  address,
  phone,
  rating,
  reviewCount,
  googleBusinessUrl,
  className = ''
}) => {
  const generateGoogleBusinessUrl = () => {
    if (googleBusinessUrl) return googleBusinessUrl;
    
    // Generate a search URL if direct business URL not provided
    const searchQuery = encodeURIComponent(`${businessName} ${address}`);
    return `https://www.google.com/search?q=${searchQuery}`;
  };

  const generateReviewUrl = () => {
    // This would typically be your actual Google Business Profile review URL
    const searchQuery = encodeURIComponent(`${businessName} reviews ${address}`);
    return `https://www.google.com/search?q=${searchQuery}#lrd=0x0:0x0,1`;
  };

  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-rivrang-mint/30 shadow-lg ${className}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-rivrang-text-primary mb-2">{businessName}</h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-sm font-medium text-rivrang-text-primary">{rating}</span>
            <span className="text-sm text-rivrang-text-secondary">({reviewCount} reviews)</span>
          </div>
        </div>
        
        <a 
          href={generateGoogleBusinessUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rivrang-mint-dark hover:text-rivrang-mint transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      {/* Business Information */}
      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-rivrang-mint-dark mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-rivrang-text-secondary">{address}</p>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-rivrang-mint-dark hover:text-rivrang-mint inline-flex items-center gap-1 mt-1"
            >
              View on Google Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-rivrang-mint-dark" />
          <a 
            href={`tel:${phone}`}
            className="text-rivrang-text-secondary hover:text-rivrang-mint-dark transition-colors"
          >
            {phone}
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-rivrang-mint-dark" />
          <span className="text-rivrang-text-secondary">Open Now • Closes 6:00 PM</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          href={`tel:${phone}`}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-rivrang-mint-dark text-white rounded-lg hover:bg-rivrang-mint transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        
        <a
          href={generateReviewUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-3 border border-rivrang-mint-dark text-rivrang-mint-dark rounded-lg hover:bg-rivrang-mint/10 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Write Review
        </a>
      </div>

      {/* Google Business Profile Integration Tips */}
      <div className="mt-6 p-4 bg-rivrang-mint/10 rounded-lg border border-rivrang-mint/20">
        <h4 className="font-semibold text-rivrang-text-primary mb-2">Google Business Profile Tips</h4>
        <ul className="text-sm text-rivrang-text-secondary space-y-1">
          <li>• Keep business hours updated</li>
          <li>• Respond to customer reviews promptly</li>
          <li>• Post regular updates and photos</li>
          <li>• Use Google Posts for announcements</li>
          <li>• Encourage satisfied customers to leave reviews</li>
        </ul>
      </div>

      {/* Schema Markup for Google Business Profile */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": businessName,
          "address": address,
          "telephone": phone,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": rating,
            "reviewCount": reviewCount,
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
      </script>
    </div>
  );
};

export default GoogleBusinessProfile;