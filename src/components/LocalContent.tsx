import React from 'react';
import { MapPin, Users, Award, Clock } from 'lucide-react';

interface LocalContentProps {
  city: string;
  region: string;
  businessName: string;
  className?: string;
}

const LocalContent: React.FC<LocalContentProps> = ({ 
  city, 
  region, 
  businessName,
  className = '' 
}) => {
  const localStats = [
    {
      icon: Users,
      value: '200+',
      label: `Local ${city} Businesses Served`,
      description: `Trusted by businesses across ${city} and ${region}`
    },
    {
      icon: Award,
      value: '5 Years',
      label: `Serving ${city} Community`,
      description: `Established local presence in ${city}`
    },
    {
      icon: MapPin,
      value: '24/7',
      label: 'Local Support',
      description: `Always available for ${city} clients`
    },
    {
      icon: Clock,
      value: '< 2 Hours',
      label: 'Response Time',
      description: `Quick response for ${city} area clients`
    }
  ];

  const localServices = [
    {
      title: `${city} Web Design Services`,
      description: `Custom website design and development for ${city} businesses. We understand the local market and create websites that resonate with ${city} customers.`,
      keywords: [`web design ${city}`, `website development ${city}`, `${city} web designer`]
    },
    {
      title: `Graphic Design in ${city}`,
      description: `Professional graphic design services for ${city} businesses. From logos to marketing materials, we help ${city} brands stand out in the local market.`,
      keywords: [`graphic design ${city}`, `logo design ${city}`, `${city} graphic designer`]
    },
    {
      title: `${city} Video Editing Services`,
      description: `Professional video editing for ${city} businesses. Create engaging content that connects with your local ${city} audience and drives results.`,
      keywords: [`video editing ${city}`, `video production ${city}`, `${city} video editor`]
    },
    {
      title: `Social Media Marketing ${city}`,
      description: `Social media management and marketing for ${city} businesses. We help you connect with the local ${city} community and grow your online presence.`,
      keywords: [`social media ${city}`, `digital marketing ${city}`, `${city} social media manager`]
    }
  ];

  const localTestimonials = [
    {
      name: "Rajesh Kumar",
      business: `Kumar Restaurant, ${city}`,
      quote: `${businessName} transformed our restaurant's online presence. Our local ${city} customers can now easily find us online and our orders have increased by 150%.`,
      service: "Web Design & Social Media"
    },
    {
      name: "Priya Sharma",
      business: `Sharma Boutique, ${city}`,
      quote: `The graphic design work for our boutique was exceptional. ${businessName} understood our local ${city} market and created designs that really connect with our customers.`,
      service: "Graphic Design & Branding"
    },
    {
      name: "Amit Patel",
      business: `Patel Electronics, ${city}`,
      quote: `Professional video content for our electronics store. The team at ${businessName} knows the ${city} market well and created videos that showcase our products perfectly.`,
      service: "Video Editing & Content"
    }
  ];

  return (
    <div className={className}>
      {/* Local Hero Section */}
      <section className="py-16 bg-gradient-to-br from-rivrang-cream via-rivrang-mint-light/20 to-rivrang-lavender-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-rivrang-text-primary mb-6">
            {city}'s Premier <span className="text-rivrang-mint-dark">Digital Agency</span>
          </h1>
          <p className="text-xl text-rivrang-text-secondary max-w-3xl mx-auto mb-8">
            {businessName} is proud to serve the {city} community with exceptional digital services. 
            We understand the local {city} market and create solutions that help your business thrive in {region}.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-rivrang-text-muted">
            <span>📍 Located in {city}, {region}</span>
            <span>🏆 Trusted by 200+ local businesses</span>
            <span>⚡ Same-day response for {city} clients</span>
          </div>
        </div>
      </section>

      {/* Local Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-rivrang-text-primary mb-12">
            Why {city} Businesses Choose {businessName}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center bg-white/80 rounded-xl p-6 border border-rivrang-mint/30 shadow-sm">
                  <div className="w-16 h-16 bg-rivrang-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-rivrang-mint-dark" />
                  </div>
                  <div className="text-3xl font-bold text-rivrang-text-primary mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-rivrang-text-primary mb-2">{stat.label}</div>
                  <p className="text-sm text-rivrang-text-secondary">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-16 bg-gradient-to-br from-rivrang-cream via-rivrang-sky-light/20 to-rivrang-blush-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-rivrang-text-primary mb-12">
            Digital Services for {city} Businesses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localServices.map((service, index) => (
              <div key={index} className="bg-white/80 rounded-xl p-6 border border-rivrang-mint/30 shadow-sm">
                <h3 className="text-xl font-semibold text-rivrang-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-rivrang-text-secondary mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.keywords.map((keyword, keyIndex) => (
                    <span 
                      key={keyIndex}
                      className="px-3 py-1 bg-rivrang-mint/10 text-rivrang-mint-dark text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-rivrang-text-primary mb-12">
            What {city} Businesses Say About Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 rounded-xl p-6 border border-rivrang-mint/30 shadow-sm">
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-rivrang-text-secondary italic">"{testimonial.quote}"</p>
                </div>
                
                <div className="border-t border-rivrang-mint/20 pt-4">
                  <p className="font-semibold text-rivrang-text-primary">{testimonial.name}</p>
                  <p className="text-sm text-rivrang-text-secondary">{testimonial.business}</p>
                  <p className="text-xs text-rivrang-mint-dark mt-1">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Area Information */}
      <section className="py-16 bg-gradient-to-br from-rivrang-cream via-rivrang-lavender-light/20 to-rivrang-blush-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-rivrang-text-primary mb-6">
                Proudly Serving {city} & {region}
              </h2>
              <p className="text-lg text-rivrang-text-secondary mb-6">
                As a local {city} digital agency, we understand the unique needs of businesses in our community. 
                From small startups to established enterprises, we've helped {city} businesses grow their online presence 
                and connect with their local customers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rivrang-mint-dark rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-rivrang-text-primary">Local Market Knowledge</h4>
                    <p className="text-rivrang-text-secondary">We know what works for {city} businesses and customers</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rivrang-sky-dark rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-rivrang-text-primary">Community Focused</h4>
                    <p className="text-rivrang-text-secondary">Supporting the growth of {city}'s business community</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rivrang-blush-warm rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-rivrang-text-primary">Local Partnerships</h4>
                    <p className="text-rivrang-text-secondary">Strong relationships with {city} business networks</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-xl p-8 border border-rivrang-mint/30 shadow-sm">
              <h3 className="text-xl font-semibold text-rivrang-text-primary mb-6">Service Areas</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-rivrang-text-primary mb-2">Primary Service Area</h4>
                  <p className="text-rivrang-text-secondary">{city}, {region}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-rivrang-text-primary mb-2">Extended Service Areas</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-rivrang-text-secondary">
                    <span>• Nearby {city} suburbs</span>
                    <span>• {region} metro area</span>
                    <span>• Remote consultations</span>
                    <span>• Online services nationwide</span>
                  </div>
                </div>
                
                <div className="bg-rivrang-mint/10 rounded-lg p-4 mt-6">
                  <p className="text-sm text-rivrang-mint-dark">
                    <strong>Local Advantage:</strong> Being based in {city}, we offer in-person meetings, 
                    local market insights, and same-day support for our {city} clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalContent;