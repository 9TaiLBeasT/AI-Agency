// Centralized business data for NAP consistency

export const businessData = {
  // Core Business Information
  name: "RivRang Digital Agency",
  tagline: "Flow of Art",
  description: "Creative digital agency specializing in video editing, graphic design, web development, and social media services for businesses in Hyderabad and Telangana.",
  
  // NAP (Name, Address, Phone) - MUST be consistent across all platforms
  address: {
    streetAddress: "Plot No. 123, Cyber Hills, Gachibowli",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500032",
    addressCountry: "India",
    formatted: "Plot No. 123, Cyber Hills, Gachibowli, Hyderabad, Telangana 500032, India"
  },
  
  // Contact Information
  phone: "+91-8639050061",
  alternatePhones: ["+91-7893985181", "+91-7842329947"],
  email: "rivrang.agency@gmail.com",
  website: "https://rivrang.com",
  
  // Business Hours
  openingHours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed"
  },
  
  // Structured opening hours for schema
  structuredOpeningHours: [
    "Monday:09:00-18:00",
    "Tuesday:09:00-18:00",
    "Wednesday:09:00-18:00",
    "Thursday:09:00-18:00",
    "Friday:09:00-18:00",
    "Saturday:10:00-16:00",
    "Sunday:Closed"
  ],
  
  // Geographic Information
  coordinates: {
    latitude: 17.4239,
    longitude: 78.3776
  },
  
  // Service Areas
  serviceAreas: [
    "Hyderabad",
    "Secunderabad", 
    "Gachibowli",
    "HITEC City",
    "Madhapur",
    "Kondapur",
    "Jubilee Hills",
    "Banjara Hills",
    "Kukatpally",
    "Miyapur"
  ],
  
  // Services Offered
  services: [
    "Video Editing Services",
    "Graphic Design",
    "Web Design and Development",
    "Social Media Marketing",
    "Brand Identity Design",
    "Digital Marketing",
    "Logo Design",
    "Presentation Design",
    "Content Creation",
    "SEO Services"
  ],
  
  // Business Categories
  categories: [
    "Digital Marketing Agency",
    "Web Design Company",
    "Graphic Design Studio",
    "Video Production Service",
    "Creative Agency",
    "Marketing Consultant"
  ],
  
  // Social Media Profiles
  socialMedia: {
    facebook: "https://facebook.com/rivrangagency",
    instagram: "https://instagram.com/rivrangagency", 
    linkedin: "https://linkedin.com/company/rivrang",
    twitter: "https://twitter.com/rivrangagency",
    youtube: "https://youtube.com/@rivrangagency"
  },
  
  // Business Details
  foundedYear: 2020,
  employeeCount: "5-10",
  priceRange: "₹₹",
  paymentMethods: ["Cash", "UPI", "Bank Transfer", "Credit Card"],
  languages: ["English", "Hindi", "Telugu"],
  
  // Images and Media
  images: {
    logo: "/logo-rivrang.png",
    businessPhoto: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    teamPhoto: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    officePhotos: [
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  
  // Local SEO Keywords
  localKeywords: [
    "digital agency Hyderabad",
    "web design Gachibowli",
    "graphic design Telangana",
    "video editing Hyderabad",
    "social media marketing HITEC City",
    "creative agency near me",
    "web development Hyderabad",
    "logo design Telangana",
    "digital marketing Gachibowli",
    "brand design Hyderabad"
  ],
  
  // Google Business Profile Information
  googleBusiness: {
    profileUrl: "https://business.google.com/rivrang-digital-agency",
    placeId: "ChIJxxxxxxxxxxxxxxxx", // Replace with actual Place ID
    rating: 4.9,
    reviewCount: 127,
    photos: 45,
    posts: 23
  },
  
  // Local Citations and Directories
  citations: [
    {
      name: "Justdial",
      url: "https://www.justdial.com/rivrang-digital-agency",
      status: "claimed"
    },
    {
      name: "Sulekha",
      url: "https://www.sulekha.com/rivrang-digital-agency",
      status: "claimed"
    },
    {
      name: "IndiaMART",
      url: "https://www.indiamart.com/rivrang-digital-agency",
      status: "claimed"
    },
    {
      name: "Yellow Pages",
      url: "https://www.yellowpages.in/rivrang-digital-agency",
      status: "pending"
    }
  ],
  
  // Local Competitors (for competitive analysis)
  competitors: [
    "Digital marketing agencies in Hyderabad",
    "Web design companies in Gachibowli",
    "Creative agencies in HITEC City",
    "Video production services in Telangana"
  ]
};

// Helper functions for NAP consistency
export const getNAPData = () => ({
  name: businessData.name,
  address: businessData.address.formatted,
  phone: businessData.phone
});

export const getFormattedAddress = (includeCountry = true) => {
  const { streetAddress, addressLocality, addressRegion, postalCode, addressCountry } = businessData.address;
  
  if (includeCountry) {
    return `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}, ${addressCountry}`;
  }
  
  return `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`;
};

export const getLocalKeywords = (page?: string) => {
  const baseKeywords = businessData.localKeywords;
  
  if (page) {
    return [
      ...baseKeywords,
      `${page} services Hyderabad`,
      `${page} ${businessData.address.addressLocality}`,
      `best ${page} agency Telangana`
    ];
  }
  
  return baseKeywords;
};

export const getServiceAreaKeywords = () => {
  return businessData.serviceAreas.flatMap(area => [
    `digital agency ${area}`,
    `web design ${area}`,
    `graphic design ${area}`,
    `video editing ${area}`
  ]);
};