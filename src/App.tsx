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
      <AnimeNavBarDemo />
      
      {/* Hero Section - Added top padding to avoid navbar collision */}
      <section id="home" className="w-full pt-20">
        <LampDemo />
      </section>

      {/* Services Section - Reduced top margin */}
      <section id="services" className="w-full -mt-32">
        <Services />
      </section>

      {/* Features Section */}
      <section id="features" className="w-full">
        <Features />
      </section>

      {/* About Section */}
      <section id="about" className="w-full">
        <About />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;