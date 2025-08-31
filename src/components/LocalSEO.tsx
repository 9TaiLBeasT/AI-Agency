import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalBusinessData {
  name: string;
  description: string;
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
  openingHours: string[];
  services: string[];
  priceRange: string;
  image: string;
  logo: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

interface LocalSEOProps {
  businessData: LocalBusinessData;
  pageTitle?: string;
  pageDescription?: string;
  pageKeywords?: string[];
  currentPage?: string;
}

const LocalSEO: React.FC<LocalSEOProps> = ({
  businessData,
  pageTitle,
  pageDescription,
  pageKeywords = [],
  currentPage = 'home'
}) => {
  // Generate structured data for local business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessData.website,
    "name": businessData.name,
    "description": businessData.description,
    "url": businessData.website,
    "telephone": businessData.phone,
    "email": businessData.email,
    "priceRange": businessData.priceRange,
    "image": businessData.image,
    "logo": businessData.logo,
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
    "openingHoursSpecification": businessData.openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.split(':')[0],
      "opens": hours.split(':')[1]?.split('-')[0],
      "closes": hours.split(':')[1]?.split('-')[1]
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
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Generate organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessData.name,
    "url": businessData.website,
    "logo": businessData.logo,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": businessData.phone,
      "contactType": "customer service",
      "email": businessData.email,
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessData.address.streetAddress,
      "addressLocality": businessData.address.addressLocality,
      "addressRegion": businessData.address.addressRegion,
      "postalCode": businessData.address.postalCode,
      "addressCountry": businessData.address.addressCountry
    },
    "sameAs": Object.values(businessData.socialMedia).filter(Boolean)
  };

  // Generate service schema for each service
  const serviceSchemas = businessData.services.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service,
    "provider": {
      "@type": "LocalBusiness",
      "name": businessData.name,
      "address": businessData.address
    },
    "areaServed": {
      "@type": "City",
      "name": businessData.address.addressLocality
    }
  }));

  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": businessData.website
      },
      ...(currentPage !== 'home' ? [{
        "@type": "ListItem",
        "position": 2,
        "name": pageTitle || currentPage,
        "item": `${businessData.website}/${currentPage}`
      }] : [])
    ]
  };

  // Generate local keywords
  const localKeywords = [
    `${businessData.address.addressLocality} digital agency`,
    `web design ${businessData.address.addressLocality}`,
    `graphic design ${businessData.address.addressLocality}`,
    `video editing services ${businessData.address.addressLocality}`,
    `social media marketing ${businessData.address.addressLocality}`,
    `creative agency near me`,
    `${businessData.address.addressRegion} web development`,
    ...pageKeywords
  ];

  const metaTitle = pageTitle ? 
    `${pageTitle} | ${businessData.name} - ${businessData.address.addressLocality}` :
    `${businessData.name} - Creative Digital Agency in ${businessData.address.addressLocality}`;

  const metaDescription = pageDescription || 
    `Professional digital agency services in ${businessData.address.addressLocality}. ${businessData.description} Call ${businessData.phone} for a free consultation.`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={localKeywords.join(', ')} />
      
      {/* Local Business Meta Tags */}
      <meta name="geo.region" content={`${businessData.address.addressCountry}-${businessData.address.addressRegion}`} />
      <meta name="geo.placename" content={businessData.address.addressLocality} />
      <meta name="geo.position" content={`${businessData.coordinates.latitude};${businessData.coordinates.longitude}`} />
      <meta name="ICBM" content={`${businessData.coordinates.latitude}, ${businessData.coordinates.longitude}`} />
      
      {/* Open Graph Local Business */}
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={businessData.image} />
      <meta property="og:url" content={`${businessData.website}/${currentPage}`} />
      <meta property="business:contact_data:street_address" content={businessData.address.streetAddress} />
      <meta property="business:contact_data:locality" content={businessData.address.addressLocality} />
      <meta property="business:contact_data:region" content={businessData.address.addressRegion} />
      <meta property="business:contact_data:postal_code" content={businessData.address.postalCode} />
      <meta property="business:contact_data:country_name" content={businessData.address.addressCountry} />
      <meta property="business:contact_data:phone_number" content={businessData.phone} />
      <meta property="business:contact_data:email" content={businessData.email} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={businessData.image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`${businessData.website}/${currentPage === 'home' ? '' : currentPage}`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {serviceSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default LocalSEO;