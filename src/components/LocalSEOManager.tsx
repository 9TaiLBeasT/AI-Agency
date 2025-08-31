import React from 'react';
import LocalSEO from './LocalSEO';
import NAP from './NAP';
import LocalContent from './LocalContent';
import GoogleBusinessProfile from './GoogleBusinessProfile';
import { businessData } from '../data/business-data';

interface LocalSEOManagerProps {
  currentPage?: string;
  pageTitle?: string;
  pageDescription?: string;
  pageKeywords?: string[];
  showLocalContent?: boolean;
  showGoogleBusiness?: boolean;
  napVariant?: 'full' | 'compact' | 'footer' | 'contact';
}

const LocalSEOManager: React.FC<LocalSEOManagerProps> = ({
  currentPage = 'home',
  pageTitle,
  pageDescription,
  pageKeywords = [],
  showLocalContent = false,
  showGoogleBusiness = false,
  napVariant = 'full'
}) => {
  // Prepare business data for LocalSEO component
  const localBusinessData = {
    name: businessData.name,
    description: businessData.description,
    address: businessData.address,
    phone: businessData.phone,
    email: businessData.email,
    website: businessData.website,
    openingHours: businessData.structuredOpeningHours,
    services: businessData.services,
    priceRange: businessData.priceRange,
    image: businessData.images.businessPhoto,
    logo: businessData.images.logo,
    socialMedia: businessData.socialMedia,
    coordinates: businessData.coordinates
  };

  // Prepare NAP data
  const napData = {
    businessName: businessData.name,
    address: businessData.address,
    phone: businessData.phone,
    email: businessData.email,
    website: businessData.website,
    openingHours: businessData.openingHours
  };

  return (
    <>
      {/* SEO Meta Tags and Structured Data */}
      <LocalSEO
        businessData={localBusinessData}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
        currentPage={currentPage}
      />

      {/* NAP Information */}
      <NAP 
        data={napData}
        variant={napVariant}
        showSchema={currentPage === 'home'}
      />

      {/* Local Content (optional) */}
      {showLocalContent && (
        <LocalContent
          city={businessData.address.addressLocality}
          region={businessData.address.addressRegion}
          businessName={businessData.name}
        />
      )}

      {/* Google Business Profile Widget (optional) */}
      {showGoogleBusiness && (
        <GoogleBusinessProfile
          businessName={businessData.name}
          address={businessData.address.formatted}
          phone={businessData.phone}
          rating={businessData.googleBusiness.rating}
          reviewCount={businessData.googleBusiness.reviewCount}
          googleBusinessUrl={businessData.googleBusiness.profileUrl}
        />
      )}
    </>
  );
};

export default LocalSEOManager;