import React from 'react';
import AnimeNavBarDemo from './components/ui/anime-navbar';
import { LampDemo } from './components/ui/lamp';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      {/* Navigation - Fixed position, doesn't take up space in flow */}
      <div className="relative z-50">
        <AnimeNavBarDemo />
      </div>
      
      {/* Hero Section - Full height with proper spacing */}
      <section id="home" className="relative w-full min-h-screen pt-0 pb-0 overflow-hidden">
        <LampDemo />
      </section>

      {/* Services Section - Proper spacing */}
      <section id="services" className="w-full py-16 bg-black">
        <Services />
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-16 bg-black">
        <Features />
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-16 bg-black">
        <About />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-16 bg-black">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 bg-black">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;