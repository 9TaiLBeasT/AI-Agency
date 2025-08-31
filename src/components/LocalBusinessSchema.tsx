import React from 'react';
import { Helmet } from 'react-helmet-async';
import { businessData } from '../data/business-data';

interface LocalBusinessSchemaProps {
  pageType?: 'home' | 'services' | 'about' | 'contact' | 'portfolio';
  serviceType?: string;
  additionalData?: Record<string, any>;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  pageType = 'home',
  serviceType,
  additionalData = {}
}) => {
  // Base local business schema
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessData.website,
    "name": businessData.name,
    "alternateName": "RivRang",
    "description": businessData.description,
    "url": businessData.website,
    "telephone": businessData.phone,
    "email": businessData.email,
    "foundingDate": businessData.foundedYear.toString(),
    "numberOfEmployees": businessData.employeeCount,
    "priceRange": businessData.priceRange,
    "currenciesAccepted": "INR",
    "paymentAccepted": businessData.paymentMethods,
    "image": businessData.images.businessPhoto,
    "logo": businessData.images.logo,
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
          "name": service,
          "provider": {
            "@type": "LocalBusiness",
            "name": businessData.name
          }
        },
        "position": index + 1
      }))
    },
    "sameAs": Object.values(businessData.socialMedia).filter(Boolean),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": businessData.googleBusiness.rating,
      "reviewCount": businessData.googleBusiness.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent digital agency in Hyderabad. RivRang created an amazing website for our restaurant and helped us with social media marketing. Highly recommended!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Priya Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Professional graphic design services. The team at RivRang understood our brand perfectly and delivered exceptional designs for our boutique."
      }
    ],
    ...additionalData
  };

  // Service-specific schema
  const serviceSchema = serviceType ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceType,
    "description": `Professional ${serviceType.toLowerCase()} services in ${businessData.address.addressLocality}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": businessData.name,
      "address": businessData.address,
      "telephone": businessData.phone
    },
    "areaServed": {
      "@type": "City",
      "name": businessData.address.addressLocality
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceRange": businessData.priceRange
    }
  } : null;

  // FAQ schema for common local business questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Where is ${businessData.name} located?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${businessData.name} is located at ${businessData.address.formatted}. We serve clients throughout ${businessData.address.addressLocality} and ${businessData.address.addressRegion}.`
        }
      },
      {
        "@type": "Question",
        "name": `What services does ${businessData.name} offer in ${businessData.address.addressLocality}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We offer comprehensive digital services including ${businessData.services.slice(0, 5).join(', ')} and more. All services are available for businesses in ${businessData.address.addressLocality} and surrounding areas.`
        }
      },
      {
        "@type": "Question",
        "name": `How can I contact ${businessData.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You can reach us at ${businessData.phone}, email us at ${businessData.email}, or visit our office at ${businessData.address.formatted}. We're open ${businessData.openingHours.monday} on weekdays.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you serve businesses outside of ${businessData.address.addressLocality}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! While we're based in ${businessData.address.addressLocality}, we serve clients throughout ${businessData.address.addressRegion} including ${businessData.serviceAreas.slice(0, 5).join(', ')} and offer remote services nationwide.`
        }
      }
    ]
  };

  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": businessData.name,
    "url": businessData.website,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${businessData.website}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>

      {/* Service Schema (if applicable) */}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Page-specific schemas */}
      {pageType === 'services' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": `${businessData.name} Services`,
            "description": `Complete list of digital services offered by ${businessData.name} in ${businessData.address.addressLocality}`,
            "itemListElement": businessData.services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": service,
                "provider": {
                  "@type": "LocalBusiness",
                  "name": businessData.name
                }
              }
            }))
          })}
        </script>
      )}

      {pageType === 'about' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": `About ${businessData.name}`,
            "description": `Learn about ${businessData.name}, a leading digital agency in ${businessData.address.addressLocality}`,
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": businessData.name,
              "foundingDate": businessData.foundedYear.toString(),
              "address": businessData.address
            }
          })}
        </script>
      )}

      {pageType === 'contact' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": `Contact ${businessData.name}`,
            "description": `Get in touch with ${businessData.name} in ${businessData.address.addressLocality}`,
            "mainEntity": {
              "@type": "ContactPoint",
              "telephone": businessData.phone,
              "email": businessData.email,
              "contactType": "customer service",
              "areaServed": businessData.serviceAreas,
              "availableLanguage": businessData.languages
            }
          })}
        </script>
      )}
    </Helmet>
  );
};

export default LocalBusinessSchema;