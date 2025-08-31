
import { motion, useScroll, useTransform } from 'framer-motion';
import { GradientButton } from './ui/gradient-button';
import { TiltedScroll } from './ui/tilted-scroll';
import { SectionArtisticEnhancements } from './ui/artistic-enhancements';
import LocalSEOManager from './LocalSEOManager';
import { businessData } from '../data/business-data';

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [1200, 2000], [100, 0]);
  const opacity = useTransform(scrollY, [1200, 1600], [0, 1]);

  const achievementItems = [
    { id: "1", text: "200+ Brands Created" },
    { id: "2", text: "500+ Websites Launched" },
    { id: "3", text: "98% Client Satisfaction" },
    { id: "4", text: "150+ Creative Projects" },
    { id: "5", text: "24/7 Creative Support" },
    { id: "6", text: "Global Design Solutions" },
    { id: "7", text: "Creative Excellence" },
    { id: "8", text: "Flow of Art Philosophy" },
  ];

  return (
    <motion.div 
      style={{ y, opacity }}
      className="py-20 w-full relative"
    >
      {/* Local SEO for About Page */}
      <LocalSEOManager 
        currentPage="about"
        pageTitle="About Our Agency"
        pageDescription={`Learn about ${businessData.name}, a leading creative digital agency in ${businessData.address.addressLocality}, ${businessData.address.addressRegion}. Founded in ${businessData.foundedYear}, we specialize in artistic digital solutions.`}
        pageKeywords={[
          `about ${businessData.name}`,
          `digital agency ${businessData.address.addressLocality}`,
          {businessData.address.addressLocality}'s Premier <span className="text-rivrang-lavender-dark">Creative Agency</span>
          `${businessData.address.addressLocality} web design company`
        ]}
          At {businessData.name}, we're proud to serve the {businessData.address.addressLocality} business community with exceptional digital services. 
          Since {businessData.foundedYear}, our "Flow of Art" philosophy has guided every project, helping local businesses in {businessData.address.addressRegion} 
          create digital experiences that drive real results.
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
          <h2 className="text-4xl md:text-5xl font-bold text-rivrang-text-primary mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Crafting the <span className="text-rivrang-lavender-dark">Flow of Art</span>
          </h2>
          <p className="text-xl text-rivrang-text-secondary max-w-3xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            At RivRang, we believe in the transformative power of creative design. Our philosophy of "Flow of Art" 
            guides every project we undertake, blending artistic vision with strategic thinking to create digital 
            experiences that don't just look beautiful, but drive meaningful results for your business.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-rivrang-text-secondary mb-8 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Located in the heart of {businessData.address.addressLocality}'s tech hub, {businessData.name} combines global design standards 
              with deep local market knowledge. We understand what works for {businessData.address.addressLocality} businesses and create 
              digital solutions that resonate with local customers while maintaining international quality standards.
            </p>
            
            <div className="bg-white/80 rounded-lg p-6 mb-8 border border-rivrang-mint/30 shadow-sm">
              <h3 className="text-xl font-semibold text-rivrang-text-primary mb-4 flex items-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                <span className="w-3 h-3 bg-gradient-to-r from-rivrang-lavender-dark to-rivrang-sky-dark rounded-full mr-3"></span>
                Why Choose Local {businessData.address.addressLocality} Expertise
              </h3>
              <p className="text-rivrang-text-secondary leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Being based in {businessData.address.addressLocality} gives us unique insights into the local market dynamics, customer preferences, 
                and business challenges. Our "Flow of Art" philosophy, combined with {businessData.foundedYear - 2020 + 5} years of local experience, 
                helps us create digital solutions that not only look beautiful but also connect with {businessData.address.addressRegion} audiences 
                and drive measurable business growth for our clients.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rivrang-lavender-dark rounded-full"></div>
                <span className="text-rivrang-text-secondary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Established in {businessData.address.addressLocality} since {businessData.foundedYear}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rivrang-sky-dark rounded-full"></div>
                <span className="text-rivrang-text-secondary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Trusted by 200+ {businessData.address.addressLocality} businesses</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rivrang-blush-warm rounded-full"></div>
                <span className="text-rivrang-text-secondary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Local support team available in {businessData.address.addressRegion}</span>
              </div>
            </div>

            <GradientButton className="px-8 py-3">
              Visit Our {businessData.address.addressLocality} Office
            </GradientButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center space-y-8"
          >
            {/* TiltedScroll Component */}
            <div className="w-full flex justify-center">
              <TiltedScroll 
                items={achievementItems}
                className="transform scale-110"
              />
            </div>

            {/* Team Image */}
            <div className="relative w-full max-w-md">
              <img
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rivrang-cream/50 to-transparent rounded-xl" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-rivrang-text-primary font-semibold text-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Our Creative Team</p>
                <p className="text-rivrang-text-secondary text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Based in {businessData.address.addressLocality}, serving {businessData.address.addressRegion}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;