import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Code, Megaphone, Camera } from 'lucide-react';
import { PinContainer } from './ui/3d-pin';
import { SectionArtisticEnhancements } from './ui/artistic-enhancements';

import { useRef } from 'react';

const Services = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [200, 800], [50, 0]);
  const opacity = useTransform(scrollY, [200, 600], [0, 1]);


  const services = [
    {
      icon: Camera,
      title: "Video Editing",
      description: "Professional video editing services for all your content needs. From social media reels to corporate presentations.",
      discount: "20% OFF",
      discountColor: "bg-red-500",
      offerings: [
        { name: "Reels / Shorts", originalPrice: "₹375", discountedPrice: "₹300" },
        { name: "Ads / Corporate", originalPrice: "₹1000", discountedPrice: "₹800" },
        { name: "AI Video (Ad/Reel)", originalPrice: "₹1250", discountedPrice: "₹1000" }
      ],
      validUntil: "Valid Until Sept 7th",
      status: "Special Offer"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative graphic design solutions for all your branding and marketing needs. Professional designs that make an impact.",
      discount: "15% OFF",
      discountColor: "bg-orange-500",
      offerings: [
        { name: "Poster Design", originalPrice: "₹350", discountedPrice: "₹300" },
        { name: "Flyer/Brochure Design", originalPrice: "₹350", discountedPrice: "₹300" },
        { name: "Logo Design", originalPrice: "₹335", discountedPrice: "₹300" }
      ],
      validUntil: "Valid Until Sept 7th",
      status: "Creative Design"
    },
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Modern, responsive websites that drive results. From landing pages to full business websites.",
      discount: "25% OFF",
      discountColor: "bg-green-500",
      offerings: [
        { name: "Landing Page", originalPrice: "₹3125", discountedPrice: "₹2500" },
        { name: "Business Site", originalPrice: "₹1000", discountedPrice: "₹800" }
      ],
      validUntil: "Valid Until Sept 7th",
      status: "Web Solutions"
    },
    {
      icon: Megaphone,
      title: "Social Media & Presentations",
      description: "Engaging social media content and professional presentations that captivate your audience.",
      discount: "30% OFF",
      discountColor: "bg-blue-500",
      offerings: [
        { name: "Social Media Post Design", originalPrice: "₹360", discountedPrice: "₹250" },
        { name: "Presentation Design", originalPrice: "₹610", discountedPrice: "₹510" }
      ],
      validUntil: "Valid Until Sept 7th",
      status: "Content Creation"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      style={{ y, opacity }}
      className="py-20 bg-rivrang-cream w-full relative"
    >
      {/* Artistic enhancements for this section */}
      <SectionArtisticEnhancements />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-rivrang-text-primary mb-4">
            Our Services{' '}
            <span className="text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
              (Ganesh Chaturthi Special)
            </span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text">
              गणपति बप्पा मोरया!
            </span>
          </motion.div>
          
          <p className="text-xl text-rivrang-text-secondary max-w-3xl mx-auto">
            Limited time special offers on all our creative services! Get professional quality work at discounted prices.{' '}
            <span className="font-semibold text-orange-600">Valid until September 7th.</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-[28rem] w-full flex items-center justify-center"
              >
                <PinContainer title={`Get ${service.discount} on ${service.title}`}>
                  <div className="flex flex-col p-6 tracking-tight text-rivrang-text-secondary w-[22rem] h-[24rem] bg-gradient-to-b from-white/95 to-rivrang-mint-light/20 backdrop-blur-sm border border-rivrang-mint/30 rounded-2xl shadow-sm relative overflow-hidden">
                    {/* Discount Badge */}
                    <div className={`absolute top-4 right-4 ${service.discountColor} text-white px-3 py-1 rounded-full text-sm font-bold transform rotate-12 shadow-lg`}>
                      {service.discount}
                    </div>

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-rivrang-mint/20 rounded-lg flex items-center justify-center border border-rivrang-mint/30">
                        <Icon className="w-6 h-6 text-rivrang-mint-dark" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-sm bg-rivrang-mint-dark animate-pulse" />
                        <div className="text-xs text-rivrang-mint-dark">{service.status}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="text-xl font-bold text-rivrang-text-primary">
                        {service.title}
                      </div>
                      
                      <p className="text-sm text-rivrang-text-secondary leading-relaxed">
                        {service.description}
                      </p>

                      {/* Service Offerings */}
                      <div className="space-y-2">
                        {service.offerings.map((offering, offerIndex) => (
                          <div key={offerIndex} className="flex justify-between items-center bg-white/60 rounded-lg p-2 border border-rivrang-mint/20">
                            <span className="text-sm font-medium text-rivrang-text-primary">{offering.name}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500 line-through">{offering.originalPrice}</span>
                              <span className="text-sm font-bold text-green-600">{offering.discountedPrice}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Valid Until */}
                      <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
                        <div className="text-sm font-semibold text-blue-700">{service.validUntil}</div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center pt-3 border-t border-rivrang-mint/20">
                      <div className="text-xs text-rivrang-text-muted">
                        Ganesh Chaturthi Special
                      </div>
                      <div className="text-rivrang-blush-warm text-sm font-medium">
                        Order Now →
                      </div>
                    </div>
                  </div>
                </PinContainer>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;