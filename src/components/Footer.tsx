import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import NAP from './NAP';
import { businessData } from '../data/business-data';

const Footer = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [2400, 3200], [100, 0]);
  const opacity = useTransform(scrollY, [2400, 2800], [0, 1]);

  const napData = {
    businessName: businessData.name,
    address: businessData.address,
    phone: businessData.phone,
    email: businessData.email,
    website: businessData.website,
    openingHours: businessData.openingHours
  };
  return (
    <motion.footer 
      style={{ y, opacity }}
      className="bg-rivrang-cream border-t border-rivrang-mint/20 w-full relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="w-8 h-8 text-rivrang-mint-dark" />
              <span className="text-2xl font-bold text-rivrang-text-primary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Riv<span className="text-rivrang-mint-dark">Rang</span></span>
            </div>
            <p className="text-rivrang-text-secondary max-w-md mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Where creativity flows into exceptional digital experiences. Proudly serving {businessData.address.addressLocality} and {businessData.address.addressRegion} with stunning brand identities, websites, and creative campaigns.
            </p>
            <div className="flex space-x-4">
              <a href={businessData.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-rivrang-text-muted hover:text-rivrang-mint-dark transition duration-300">
                <Twitter size={24} />
              </a>
              <a href={businessData.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-rivrang-text-muted hover:text-rivrang-mint-dark transition duration-300">
                <Linkedin size={24} />
              </a>
              <a href={businessData.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-rivrang-text-muted hover:text-rivrang-mint-dark transition duration-300">
                <Instagram size={24} />
              </a>
              <a href={`mailto:${businessData.email}`} className="text-rivrang-text-muted hover:text-rivrang-mint-dark transition duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information with NAP */}
          <div className="space-y-2">
            <NAP 
              data={napData}
              variant="footer"
              showSchema={false}
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-rivrang-text-primary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Our Services</h3>
            <ul className="space-y-2 text-rivrang-text-secondary">
              <li>
                <a href="#services" className="hover:text-rivrang-mint-dark transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Video Editing {businessData.address.addressLocality}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-rivrang-mint-dark transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Graphic Design {businessData.address.addressLocality}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-rivrang-mint-dark transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Web Design {businessData.address.addressLocality}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-rivrang-mint-dark transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Social Media {businessData.address.addressLocality}</a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-rivrang-text-primary font-semibold mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Agency</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-rivrang-text-secondary hover:text-rivrang-mint-dark transition duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>About Us</a></li>
              <li><a href="#portfolio" className="text-rivrang-text-secondary hover:text-rivrang-mint-dark transition duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Portfolio</a></li>
              <li><a href="#about" className="text-rivrang-text-secondary hover:text-rivrang-mint-dark transition duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Our Process</a></li>
              <li><a href="#contact" className="text-rivrang-text-secondary hover:text-rivrang-mint-dark transition duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Start Project</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rivrang-mint/20 mt-8 pt-8 text-center">
          <p className="text-rivrang-text-muted" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            © 2025 {businessData.name}. All rights reserved. Serving {businessData.address.addressLocality}, {businessData.address.addressRegion} with exceptional digital experiences.
          </p>
          <p className="text-sm text-rivrang-text-muted mt-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {businessData.address.formatted} | {businessData.phone} | {businessData.email}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;