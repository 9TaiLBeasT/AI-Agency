
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimeNavBarDemo from './components/ui/anime-navbar';
import { RivRangHero } from './components/ui/rivrang-hero';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BackgroundArtisticEnhancements } from './components/ui/artistic-enhancements';
import SplashCursor from './components/ui/SplashCursor';
import SplashScreen from './components/ui/splash-screen';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Path to your video file (place video in public folder)
  // If no video is available, splash screen will automatically skip after 3 seconds
  const videoSrc = "/intro-video.mp4"; // Update this path to match your video file

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen
            videoSrc={videoSrc}
            onComplete={handleSplashComplete}
          />
        )}
      </AnimatePresence>

      {/* Main Website */}
      {!showSplash && (
        <div className="min-h-screen bg-rivrang-cream w-full overflow-x-hidden relative">
        {/* Splash Cursor Effect */}
        <SplashCursor
          DENSITY_DISSIPATION={2.5}
          VELOCITY_DISSIPATION={1.5}
          SPLAT_RADIUS={0.15}
          SPLAT_FORCE={4000}
          COLOR_UPDATE_SPEED={8}
        />

        {/* Global artistic background */}
        <BackgroundArtisticEnhancements />

        {/* Navigation - Fixed position, doesn't take up space in flow */}
        <div className="relative z-50">
          <AnimeNavBarDemo />
        </div>

        {/* Hero Section - Full height with proper spacing */}
        <section id="home" className="relative w-full min-h-screen pt-0 pb-0 overflow-hidden">
          <RivRangHero />
        </section>

        {/* Services Section - Proper spacing */}
        <section id="services" className="w-full py-16 bg-rivrang-cream">
          <Services />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-16 bg-rivrang-cream">
          <Features />
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 bg-rivrang-cream">
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 bg-rivrang-cream">
          <Contact />
        </section>

        {/* Footer */}
        <Footer />
        </div>
      )}
    </>
  );
}

export default App;