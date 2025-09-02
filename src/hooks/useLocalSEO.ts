import { useEffect } from 'react';
import { businessData, getNAPData, getLocalKeywords } from '../data/business-data';

interface UseLocalSEOOptions {
  pageTitle?: string;
  pageDescription?: string;
  pageKeywords?: string[];
  currentPage?: string;
  trackPageView?: boolean;
}

export const useLocalSEO = ({
  pageTitle,
  pageDescription,
  currentPage = 'home',
  trackPageView = true
}: UseLocalSEOOptions = {}) => {
  
  useEffect(() => {
    // Update page title with local SEO
    if (pageTitle) {
      const localizedTitle = `${pageTitle} | ${businessData.name} - ${businessData.address.addressLocality}`;
      document.title = localizedTitle;
    }

    // Update meta description
    if (pageDescription) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', pageDescription);
      }
    }

    // Track page view for local analytics
    if (trackPageView && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageTitle,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'business_location'
        },
        business_location: businessData.address.addressLocality
      });
    }
  }, [pageTitle, pageDescription, currentPage, trackPageView]);

  // Helper functions
  const getNAP = () => getNAPData();
  
  const getLocalizedKeywords = () => getLocalKeywords(currentPage);
  
  const generateLocalTitle = (baseTitle: string) => {
    return `${baseTitle} | ${businessData.name} - ${businessData.address.addressLocality}, ${businessData.address.addressRegion}`;
  };
  
  const generateLocalDescription = (baseDescription: string) => {
    return `${baseDescription} Located in ${businessData.address.addressLocality}, ${businessData.address.addressRegion}. Call ${businessData.phone} for a free consultation.`;
  };

  const getServiceAreaContent = () => {
    return {
      primaryArea: businessData.address.addressLocality,
      region: businessData.address.addressRegion,
      serviceAreas: businessData.serviceAreas,
      coordinates: businessData.coordinates
    };
  };

  const getBusinessHours = () => businessData.openingHours;
  
  const getContactInfo = () => ({
    phone: businessData.phone,
    email: businessData.email,
    address: businessData.address.formatted,
    alternatePhones: businessData.alternatePhones
  });

  const generateGoogleMapsEmbedUrl = () => {
    const { latitude, longitude } = businessData.coordinates;
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${latitude},${longitude}&zoom=15`;
  };

  const generateLocalStructuredData = (schemaType: string = 'LocalBusiness') => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": businessData.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessData.address.streetAddress,
        "addressLocality": businessData.address.addressLocality,
        "addressRegion": businessData.address.addressRegion,
        "postalCode": businessData.address.postalCode,
        "addressCountry": businessData.address.addressCountry
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": businessData.coordinates.latitude,
        "longitude": businessData.coordinates.longitude
      },
      "telephone": businessData.phone,
      "email": businessData.email,
      "url": businessData.website,
      "openingHoursSpecification": Object.entries(businessData.openingHours).map(([day, hours]) => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": `https://schema.org/${day.charAt(0).toUpperCase() + day.slice(1)}`,
        "opens": hours === "Closed" ? null : hours.split(' - ')[0],
        "closes": hours === "Closed" ? null : hours.split(' - ')[1]
      })).filter(spec => spec.opens && spec.closes),
      "sameAs": Object.values(businessData.socialMedia).filter(Boolean),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": businessData.googleBusiness.rating,
        "reviewCount": businessData.googleBusiness.reviewCount
      }
    };

    return baseStructuredData;
  };

  return {
    // Data getters
    getNAP,
    getLocalizedKeywords,
    getServiceAreaContent,
    getBusinessHours,
    getContactInfo,
    
    // Utility functions
    generateLocalTitle,
    generateLocalDescription,
    generateGoogleMapsEmbedUrl,
    generateLocalStructuredData,
    
    // Business data
    businessData,
    
    // Current page info
    currentPage,
    pageTitle,
    pageDescription
  };
};

// Hook for Google Business Profile integration
export const useGoogleBusinessProfile = () => {
  const generateGoogleBusinessActions = () => {
    const businessName = encodeURIComponent(businessData.name);
    const address = encodeURIComponent(businessData.address.formatted);
    
    return {
      // Direct links for Google Business Profile management
      claimBusiness: `https://business.google.com/create?hl=en`,
      manageBusiness: businessData.googleBusiness.profileUrl,
      
      // Customer-facing links
      viewOnGoogle: `https://www.google.com/search?q=${businessName}+${address}`,
      writeReview: `https://search.google.com/local/writereview?placeid=${businessData.googleBusiness.placeId}`,
      getDirections: `https://www.google.com/maps/dir/?api=1&destination=${address}`,
      
      // Google Posts and Updates
      createPost: `${businessData.googleBusiness.profileUrl}/posts`,
      uploadPhotos: `${businessData.googleBusiness.profileUrl}/photos`,
      
      // Analytics and Insights
      viewInsights: `${businessData.googleBusiness.profileUrl}/insights`,
      manageReviews: `${businessData.googleBusiness.profileUrl}/reviews`
    };
  };

  const getOptimizationTips = () => [
    {
      category: "Profile Completeness",
      tips: [
        "Add high-quality photos of your office and team",
        "Keep business hours updated, especially during holidays",
        "Add detailed business description with local keywords",
        "Include all service categories relevant to your business"
      ]
    },
    {
      category: "Customer Engagement",
      tips: [
        "Respond to all reviews within 24 hours",
        "Post regular updates about services and offers",
        "Share behind-the-scenes content and team photos",
        "Highlight local community involvement"
      ]
    },
    {
      category: "Local SEO Optimization",
      tips: [
        `Include "${businessData.address.addressLocality}" in your business description`,
        "Use local keywords in Google Posts",
        "Encourage satisfied customers to leave reviews",
        "Add location-specific service descriptions"
      ]
    }
  ];

  return {
    generateGoogleBusinessActions,
    getOptimizationTips,
    businessProfile: businessData.googleBusiness
  };
};

export default useLocalSEO;