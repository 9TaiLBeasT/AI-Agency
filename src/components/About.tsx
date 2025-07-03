import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GradientButton } from './ui/gradient-button';
import { TiltedScroll } from './ui/tilted-scroll';

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [1200, 2000], [100, 0]);
  const opacity = useTransform(scrollY, [1200, 1600], [0, 1]);

  const achievementItems = [
    { id: "1", text: "500+ Happy Clients" },
    { id: "2", text: "1000+ AI Projects" },
    { id: "3", text: "98% Success Rate" },
    { id: "4", text: "150% Growth Rate" },
    { id: "5", text: "24/7 Expert Support" },
    { id: "6", text: "Global AI Solutions" },
    { id: "7", text: "Innovation Leaders" },
    { id: "8", text: "Future-Ready Tech" },
  ];

  return (
    <motion.div 
      style={{ y, opacity }}
      className="py-20 bg-black w-full relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Leading the <span className="text-green-400">AI Revolution</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              At AI Neural, we're pioneering the future of artificial intelligence. Our team of world-class 
              engineers and data scientists work tirelessly to create AI solutions that don't just meet 
              today's challenges, but anticipate tomorrow's opportunities.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Founded by AI researchers from MIT and Stanford</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Trusted by Fortune 500 companies worldwide</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">24/7 support and continuous innovation</span>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Our Expert Team</p>
                <p className="text-gray-300 text-sm">Driving AI innovation worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;