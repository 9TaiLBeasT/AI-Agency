
import { motion, useScroll, useTransform } from 'framer-motion';
import { GradientButton } from './ui/gradient-button';
import { TiltedScroll } from './ui/tilted-scroll';
import { SectionArtisticEnhancements } from './ui/artistic-enhancements';

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
      {/* Artistic enhancements for this section */}
      <SectionArtisticEnhancements />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-rivrang-text-primary mb-6">
              Crafting the <span className="text-rivrang-lavender-dark">Flow of Art</span>
            </h2>
            <p className="text-xl text-rivrang-text-secondary mb-8 leading-relaxed">
              At RivRang, we believe in the transformative power of creative design. Our philosophy of "Flow of Art" 
              guides every project we undertake, blending artistic vision with strategic thinking to create digital 
              experiences that don't just look beautiful, but drive meaningful results for your business.
            </p>
            
            <div className="bg-white/80 rounded-lg p-6 mb-8 border border-rivrang-mint/30 shadow-sm">
              <h3 className="text-xl font-semibold text-rivrang-text-primary mb-4 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-rivrang-lavender-dark to-rivrang-sky-dark rounded-full mr-3"></span>
                Our Design Philosophy
              </h3>
              <p className="text-rivrang-text-secondary leading-relaxed">
                "Flow of Art" represents our belief that great design should move like water—fluid, natural, and purposeful. 
                We don't just create static visuals; we craft experiences that flow seamlessly from concept to execution, 
                ensuring every element serves both aesthetic beauty and functional purpose. This philosophy drives us to 
                create digital solutions that feel organic, intuitive, and deeply connected to your brand's essence.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rivrang-lavender-dark rounded-full"></div>
                <span className="text-rivrang-text-secondary">Founded by creative visionaries and design experts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rivrang-sky-dark rounded-full"></div>
                <span className="text-rivrang-text-secondary">Trusted by brands seeking creative excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rivrang-blush-warm rounded-full"></div>
                <span className="text-rivrang-text-secondary">Dedicated to artistic flow and creative innovation</span>
              </div>
            </div>

            <GradientButton className="px-8 py-3">
              Learn More About Us
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
                <p className="text-rivrang-text-primary font-semibold text-lg">Our Creative Team</p>
                <p className="text-rivrang-text-secondary text-sm">Bringing artistic vision to life</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;