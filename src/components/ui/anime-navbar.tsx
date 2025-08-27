import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, User, Mail, Palette } from 'lucide-react';

interface NavItem {
  name: string;
  icon: React.ComponentType<any>;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'Services', icon: Briefcase, href: '#services' },
  { name: 'Portfolio', icon: Palette, href: '#portfolio' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

// Robot expressions for different sections
const robotExpressions = {
  Home: { eyes: '• •', mouth: '‿', mood: 'happy', color: 'from-green-200 to-green-400' },
  Services: { eyes: '◉ ◉', mouth: '○', mood: 'focused', color: 'from-blue-200 to-blue-400' },
  Portfolio: { eyes: '★ ★', mouth: '‿', mood: 'excited', color: 'from-purple-200 to-purple-400' },
  About: { eyes: '◕ ◕', mouth: '‿', mood: 'friendly', color: 'from-pink-200 to-pink-400' },
  Contact: { eyes: '• •', mouth: '◡', mood: 'welcoming', color: 'from-orange-200 to-orange-400' },
};

const AnimeNavbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isVisible, setIsVisible] = useState(true);

  const [robotMood, setRobotMood] = useState('happy');

  // Section detection using Intersection Observer
  const updateActiveSection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        let sectionName = '';
        
        switch (sectionId) {
          case 'home':
            sectionName = 'Home';
            break;
          case 'services':
            sectionName = 'Services';
            break;
          case 'portfolio':
            sectionName = 'Portfolio';
            break;
          case 'about':
            sectionName = 'About';
            break;
          case 'contact':
            sectionName = 'Contact';
            break;
          default:
            return;
        }
        
        if (sectionName !== activeTab) {
          console.log(`Section changed from ${activeTab} to ${sectionName}`); // Debug log
          setActiveTab(sectionName);
          setRobotMood(robotExpressions[sectionName as keyof typeof robotExpressions].mood);
        }
      }
    });
  }, [activeTab]);

  // Keep navbar always visible and add scroll listener as fallback
  useEffect(() => {
    setIsVisible(true);
    
    // Fallback scroll listener for section detection
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            let sectionName = '';
            switch (sectionId) {
              case 'home':
                sectionName = 'Home';
                break;
              case 'services':
                sectionName = 'Services';
                break;
              case 'portfolio':
                sectionName = 'Portfolio';
                break;
              case 'about':
                sectionName = 'About';
                break;
              case 'contact':
                sectionName = 'Contact';
                break;
              default:
                continue;
            }
            
            if (sectionName !== activeTab) {
              console.log(`Scroll detected: ${sectionName}`); // Debug log
              setActiveTab(sectionName);
              setRobotMood(robotExpressions[sectionName as keyof typeof robotExpressions].mood);
            }
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  // Set up intersection observer for section detection
  useEffect(() => {
    const observer = new IntersectionObserver(updateActiveSection, {
      threshold: 0.3,
      rootMargin: '-20% 0px -20% 0px'
    });

    // Wait for DOM to be ready
    const setupObserver = () => {
      const sections = ['home', 'services', 'portfolio', 'about', 'contact'];
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          console.log(`Observing section: ${id}`); // Debug log
          observer.observe(element);
        } else {
          console.log(`Section not found: ${id}`); // Debug log
        }
      });
    };

    // Setup observer after a longer delay to ensure DOM is ready
    const timer = setTimeout(setupObserver, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [updateActiveSection]);

  const handleNavClick = (name: string, href: string) => {
    setActiveTab(name);
    setRobotMood(robotExpressions[name as keyof typeof robotExpressions].mood);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed top-12 inset-x-0 max-w-2xl mx-auto z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative rounded-lg border border-green-200 bg-white backdrop-blur-md px-8 py-2 shadow-xl">
            <nav className="flex items-center justify-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;
                
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.name, item.href)}
                    className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'text-white bg-green-600 shadow-md' 
                        : 'text-gray-700 bg-white hover:text-green-600 hover:bg-green-50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-700'}`} />
                    <span className="text-sm font-medium">{item.name}</span>
                    
                    {/* Robot positioned above active tab */}
                    {isActive && (
                      <motion.div
                        className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10"
                        initial={{ scale: 0.5, y: 10, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.5, y: 10, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {/* Arrow pointing down to active tab */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-gray-600"></div>
                        <motion.div
                          className="w-10 h-10 relative"
                          animate={{
                            rotate: robotMood === 'excited' ? [0, 10, -10, 0] : [0, 5, -5, 0],
                            scale: robotMood === 'excited' ? [1, 1.2, 1] : [1, 1.1, 1],
                            y: robotMood === 'happy' ? [0, -2, 0] : [0, -1, 0],
                          }}
                          transition={{
                            duration: robotMood === 'excited' ? 2 : 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {/* Robot Body */}
                          <motion.div 
                            className={`w-full h-full bg-gradient-to-br ${robotExpressions[activeTab as keyof typeof robotExpressions].color} border-2 border-gray-600 rounded-lg shadow-lg relative overflow-hidden`}
                            animate={{
                              borderColor: robotMood === 'focused' ? '#3b82f6' : '#4b5563',
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            {/* Robot Face Background */}
                            <div className="absolute inset-1 bg-white/20 rounded-md" />
                            
                            {/* Robot Eyes - Dynamic based on section */}
                            <motion.div 
                              className="absolute top-2 left-2 text-gray-800 text-xs font-bold"
                              animate={{
                                scale: robotMood === 'excited' ? [1, 1.2, 1] : [1, 1.1, 1],
                              }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              {robotExpressions[activeTab as keyof typeof robotExpressions].eyes.split(' ')[0]}
                            </motion.div>
                            <motion.div 
                              className="absolute top-2 right-2 text-gray-800 text-xs font-bold"
                              animate={{
                                scale: robotMood === 'excited' ? [1, 1.2, 1] : [1, 1.1, 1],
                              }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.1 }}
                            >
                              {robotExpressions[activeTab as keyof typeof robotExpressions].eyes.split(' ')[1]}
                            </motion.div>
                            
                            {/* Robot Mouth - Changes with mood */}
                            <motion.div 
                              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-800 text-sm font-bold"
                              animate={{
                                scale: robotMood === 'welcoming' ? [1, 1.3, 1] : [1, 1.1, 1],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {robotExpressions[activeTab as keyof typeof robotExpressions].mouth}
                            </motion.div>
                            
                            {/* Robot Antenna with section-based color */}
                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-gray-700 rounded-sm">
                              <motion.div 
                                className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                                animate={{
                                  backgroundColor: robotMood === 'focused' ? '#3b82f6' : 
                                                 robotMood === 'excited' ? '#8b5cf6' :
                                                 robotMood === 'friendly' ? '#ec4899' :
                                                 robotMood === 'welcoming' ? '#f97316' : '#10b981',
                                  scale: [1, 1.5, 1],
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />
                            </div>
                            
                            {/* Mood indicator particles */}
                            {robotMood === 'excited' && (
                              <>
                                <motion.div
                                  className="absolute top-0 left-0 w-1 h-1 bg-purple-400 rounded-full"
                                  animate={{
                                    x: [0, 8, 0],
                                    y: [0, -4, 0],
                                    opacity: [0, 1, 0],
                                  }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                                <motion.div
                                  className="absolute top-0 right-0 w-1 h-1 bg-pink-400 rounded-full"
                                  animate={{
                                    x: [0, -8, 0],
                                    y: [0, -4, 0],
                                    opacity: [0, 1, 0],
                                  }}
                                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                />
                              </>
                            )}
                            
                            {/* Focus indicator for Services section */}
                            {robotMood === 'focused' && (
                              <motion.div
                                className="absolute inset-0 border border-blue-400 rounded-md"
                                animate={{
                                  opacity: [0.3, 0.7, 0.3],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            )}
                            
                            {/* Friendly glow for About section */}
                            {robotMood === 'friendly' && (
                              <motion.div
                                className="absolute -inset-1 bg-pink-200 rounded-lg -z-10"
                                animate={{
                                  opacity: [0.2, 0.4, 0.2],
                                  scale: [1, 1.05, 1],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                              />
                            )}
                            
                            {/* Welcoming pulse for Contact section */}
                            {robotMood === 'welcoming' && (
                              <motion.div
                                className="absolute -inset-0.5 bg-orange-200 rounded-lg -z-10"
                                animate={{
                                  opacity: [0.3, 0.6, 0.3],
                                  scale: [1, 1.1, 1],
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />
                            )}
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </nav>


          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimeNavbar;