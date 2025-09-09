import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [2400, 3200], [100, 0]);
  const opacity = useTransform(scrollY, [2400, 2800], [0, 1]);

  return (
    <motion.footer 
      style={{ y, opacity }}
      className="bg-rivrang-cream border-t border-rivrang-mint/20 w-full relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="w-8 h-8 text-rivrang-mint-dark" />
              <span className="text-2xl font-bold text-rivrang-text-primary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Riv<span className="text-rivrang-mint-dark">Rang</span></span>
            </div>
            <p className="text-rivrang-text-secondary max-w-md mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Where creativity flows into exceptional digital experiences. We craft stunning brand identities, websites, and creative campaigns that bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/_rivrang_?igsh=djNza2txcThqemVn" target="_blank" rel="noopener noreferrer" className="text-rivrang-text-muted hover:text-rivrang-mint-dark transition duration-300">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/posts/rivrang_rivrang-flowofart-digitalagency-activity-7369383716588056576-z5Zy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIyEHcBzb3NYvushAbOQfbaGf3AhhjAjsg" target="_blank" rel="noopener noreferrer" className="text-rivrang-text-muted hover:text-rivrang-mint-dark transition duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:rivrang.agency@gmail.com" className="text-rivrang-text-muted hover:text-rivrang-mint-dark transition duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium text-rivrang-text-primary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Our Services</h3>
            <ul className="space-y-2 text-rivrang-text-secondary">
              <li>
                <a href="#" className="hover:text-rivrang-mint-dark transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Video Editing</a>
              </li>
              <li>
                <a href="#" className="hover:text-rivrang-mint-dark transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Graphic Design</a>
              </li>
              <li>
                <a href="#" className="hover:text-rivrang-mint-dark transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Web Design & Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-rivrang-mint-dark transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Social Media & Presentations</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-rivrang-text-primary font-semibold mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Agency</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-rivrang-text-secondary hover:text-rivrang-mint-dark transition duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Our Story</a></li>
              <li><a href="#" className="text-rivrang-text-secondary hover:text-rivrang-mint-dark transition duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Portfolio</a></li>
              <li><a href="#" className="text-rivrang-text-secondary hover:text-rivrang-mint-dark transition duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Creative Process</a></li>
              <li><a href="#" className="text-rivrang-text-secondary hover:text-rivrang-mint-dark transition duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Start Project</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rivrang-mint/20 mt-8 pt-8 text-center">
          <p className="text-rivrang-text-muted" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            © 2025 RivRang. All rights reserved. Where creativity flows into exceptional digital experiences.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;