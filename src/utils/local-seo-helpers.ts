import { businessData } from '../data/business-data';

// NAP Consistency Helpers
export const validateNAPConsistency = (name: string, address: string, phone: string): boolean => {
  const standardizedName = name.trim().toLowerCase();
  const standardizedAddress = address.trim().toLowerCase();
  const standardizedPhone = phone.replace(/\D/g, ''); // Remove non-digits

  const businessName = businessData.name.trim().toLowerCase();
  const businessAddress = businessData.address.formatted.trim().toLowerCase();
  const businessPhone = businessData.phone.replace(/\D/g, '');

  return (
    standardizedName === businessName &&
    standardizedAddress === businessAddress &&
    standardizedPhone === businessPhone
  );
};

export const getNAPForPlatform = (platform: 'website' | 'google' | 'facebook' | 'directory') => {
  // Ensure consistent formatting across all platforms
  const baseNAP = {
    name: businessData.name,
    address: businessData.address.formatted,
    phone: businessData.phone,
    email: businessData.email
  };

  switch (platform) {
    case 'google':
      return {
        ...baseNAP,
        // Google Business Profile specific formatting
        businessName: businessData.name,
        categories: businessData.categories,
        description: `${businessData.description} Serving ${businessData.address.addressLocality} and ${businessData.address.addressRegion}.`
      };
    
    case 'facebook':
      return {
        ...baseNAP,
        // Facebook Business Page specific formatting
        about: `${businessData.description} Located in ${businessData.address.addressLocality}, ${businessData.address.addressRegion}.`,
        website: businessData.website,
        hours: businessData.openingHours
      };
    
    case 'directory':
      return {
        ...baseNAP,
        // Directory listing specific formatting
        businessDescription: `${businessData.description} Contact us at ${businessData.phone} or visit our ${businessData.address.addressLocality} office.`,
        services: businessData.services.join(', '),
        serviceAreas: businessData.serviceAreas.join(', ')
      };
    
    default:
      return baseNAP;
  }
};

// Local Keyword Generators
export const generateLocalKeywords = (serviceType?: string, location?: string) => {
  const city = location || businessData.address.addressLocality;
  const region = businessData.address.addressRegion;
  
  const baseKeywords = [
    `digital agency ${city}`,
    `creative agency ${city}`,
    `${businessData.name} ${city}`,
    `digital services ${region}`,
    `web design ${city}`,
    `graphic design ${city}`,
    `video editing ${city}`,
    `social media marketing ${city}`
  ];

  if (serviceType) {
    return [
      ...baseKeywords,
      `${serviceType} ${city}`,
      `${serviceType} services ${city}`,
      `best ${serviceType} ${city}`,
      `professional ${serviceType} ${region}`,
      `${serviceType} agency ${city}`,
      `${serviceType} company ${city}`
    ];
  }

  return baseKeywords;
};

export const generateServiceAreaKeywords = () => {
  return businessData.serviceAreas.flatMap(area => [
    `digital agency ${area}`,
    `web design ${area}`,
    `graphic design ${area}`,
    `video editing ${area}`,
    `social media marketing ${area}`,
    `creative services ${area}`
  ]);
};

// Citation and Directory Helpers
export const generateCitationData = () => {
  return {
    businessName: businessData.name,
    address: businessData.address.formatted,
    phone: businessData.phone,
    email: businessData.email,
    website: businessData.website,
    categories: businessData.categories,
    description: businessData.description,
    hours: businessData.openingHours,
    socialMedia: businessData.socialMedia,
    services: businessData.services,
    serviceAreas: businessData.serviceAreas,
    paymentMethods: businessData.paymentMethods,
    languages: businessData.languages
  };
};

// Google Business Profile Optimization
export const getGoogleBusinessOptimization = () => {
  return {
    // Profile completion checklist
    profileCompleteness: {
      basicInfo: true, // Name, address, phone, hours
      description: true,
      categories: true,
      photos: businessData.googleBusiness.photos > 10,
      posts: businessData.googleBusiness.posts > 5,
      reviews: businessData.googleBusiness.reviewCount > 50
    },
    
    // Optimization recommendations
    recommendations: [
      {
        category: "Photos",
        action: "Add more office and team photos",
        priority: "high",
        description: "Upload photos of your office interior, team at work, and completed projects"
      },
      {
        category: "Posts",
        action: "Create weekly Google Posts",
        priority: "medium", 
        description: "Share updates about services, offers, and company news"
      },
      {
        category: "Reviews",
        action: "Encourage customer reviews",
        priority: "high",
        description: "Ask satisfied clients to leave reviews and respond to all reviews promptly"
      },
      {
        category: "Q&A",
        action: "Add frequently asked questions",
        priority: "medium",
        description: "Proactively answer common questions about your services and location"
      }
    ],
    
    // Local SEO keywords for Google Business Profile
    profileKeywords: [
      businessData.name,
      `digital agency ${businessData.address.addressLocality}`,
      `creative services ${businessData.address.addressLocality}`,
      `web design ${businessData.address.addressLocality}`,
      `graphic design ${businessData.address.addressRegion}`,
      ...businessData.services.map(service => `${service} ${businessData.address.addressLocality}`)
    ]
  };
};

// Local Content Generators
export const generateLocalContent = (contentType: 'hero' | 'service' | 'testimonial' | 'cta') => {
  const city = businessData.address.addressLocality;
  const region = businessData.address.addressRegion;
  
  switch (contentType) {
    case 'hero':
      return {
        headline: `${city}'s Premier Creative Digital Agency`,
        subheadline: `Transforming ${city} businesses with exceptional digital experiences`,
        description: `${businessData.name} brings world-class creative services to the ${city} market. From startups to established businesses, we help ${region} companies grow their digital presence.`
      };
    
    case 'service':
      return {
        title: `Digital Services for ${city} Businesses`,
        description: `Comprehensive digital solutions tailored for the ${city} market`,
        benefits: [
          `Local ${city} market expertise`,
          `Same-day support for ${city} clients`,
          `Understanding of ${region} business landscape`,
          `In-person meetings available in ${city}`
        ]
      };
    
    case 'testimonial':
      return {
        localTestimonials: [
          {
            name: "Rajesh Kumar",
            business: `Kumar Restaurant, ${city}`,
            quote: `${businessData.name} helped us reach more customers in ${city}. Our online orders increased by 150% after they redesigned our website and social media.`,
            service: "Web Design & Social Media"
          },
          {
            name: "Priya Sharma", 
            business: `Sharma Boutique, ${city}`,
            quote: `Excellent graphic design work! The team understands the ${city} market and created designs that really connect with our local customers.`,
            service: "Graphic Design & Branding"
          }
        ]
      };
    
    case 'cta':
      return {
        primary: `Start Your Project in ${city}`,
        secondary: `Contact Our ${city} Team Today`,
        description: `Ready to grow your ${city} business? Get in touch with our local team for a free consultation.`,
        urgency: `Limited time offer for ${city} businesses - 20% off first project!`
      };
    
    default:
      return {};
  }
};

// Schema.org Markup Generators
export const generateLocalBusinessMarkup = (pageType: string, additionalData: Record<string, any> = {}) => {
  const baseMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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
    "areaServed": businessData.serviceAreas.map(area => ({
      "@type": "City", 
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Agency Services",
      "itemListElement": businessData.services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        },
        "position": index + 1
      }))
    },
    "sameAs": Object.values(businessData.socialMedia).filter(Boolean),
    "aggregateRating": {
      "@type": "AggregateRating", 
      "ratingValue": businessData.googleBusiness.rating,
      "reviewCount": businessData.googleBusiness.reviewCount
    },
    ...additionalData
  };

  return baseMarkup;
};

// Local SEO Audit Functions
export const auditLocalSEO = () => {
  const checklist = {
    napConsistency: {
      name: businessData.name,
      address: businessData.address.formatted,
      phone: businessData.phone,
      status: 'consistent'
    },
    
    googleBusinessProfile: {
      claimed: true,
      verified: true,
      complete: businessData.googleBusiness.photos > 10 && businessData.googleBusiness.posts > 5,
      rating: businessData.googleBusiness.rating,
      reviewCount: businessData.googleBusiness.reviewCount
    },
    
    localKeywords: {
      implemented: true,
      count: businessData.localKeywords.length,
      coverage: businessData.serviceAreas.length
    },
    
    structuredData: {
      localBusiness: true,
      organization: true,
      service: true,
      faq: true
    },
    
    citations: {
      total: businessData.citations.length,
      claimed: businessData.citations.filter(c => c.status === 'claimed').length,
      pending: businessData.citations.filter(c => c.status === 'pending').length
    }
  };

  return checklist;
};