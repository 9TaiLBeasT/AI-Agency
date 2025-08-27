"use client";

import { ArtisticParticles, FloatingArtElements } from './artistic-particles';
import { FlowingShapes, ArtisticBrushStrokes } from './flowing-shapes';
import { CreativeBackground, ArtisticNoise } from './creative-background';

interface ArtisticEnhancementsProps {
  variant?: 'hero' | 'section' | 'background' | 'minimal';
  className?: string;
  showParticles?: boolean;
  showShapes?: boolean;
  showBackground?: boolean;
  showFloatingElements?: boolean;
  showBrushStrokes?: boolean;
  showNoise?: boolean;
}

export function ArtisticEnhancements({
  variant = 'section',
  className = "",
  showParticles = true,
  showShapes = true,
  showBackground = false,
  showFloatingElements = false,
  showBrushStrokes = false,
  showNoise = false,
}: ArtisticEnhancementsProps) {
  
  // Configure based on variant
  const config = {
    hero: {
      particles: true,
      shapes: true,
      background: true,
      floatingElements: true,
      brushStrokes: true,
      noise: true,
      particleCount: 80,
    },
    section: {
      particles: true,
      shapes: true,
      background: false,
      floatingElements: false,
      brushStrokes: false,
      noise: true,
      particleCount: 40,
    },
    background: {
      particles: false,
      shapes: false,
      background: true,
      floatingElements: false,
      brushStrokes: false,
      noise: true,
      particleCount: 0,
    },
    minimal: {
      particles: true,
      shapes: false,
      background: false,
      floatingElements: false,
      brushStrokes: false,
      noise: false,
      particleCount: 20,
    },
  };

  const settings = config[variant];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Global creative background - only for hero or background variants */}
      {(settings.background || showBackground) && <CreativeBackground />}
      
      {/* Artistic particles */}
      {(settings.particles || showParticles) && (
        <ArtisticParticles 
          count={settings.particleCount}
          colors={['#a7f3d0', '#c4b5fd', '#bfdbfe', '#fce7f3', '#6ee7b7']}
        />
      )}
      
      {/* Flowing organic shapes */}
      {(settings.shapes || showShapes) && <FlowingShapes />}
      
      {/* Floating art elements */}
      {(settings.floatingElements || showFloatingElements) && <FloatingArtElements />}
      
      {/* Artistic brush strokes */}
      {(settings.brushStrokes || showBrushStrokes) && <ArtisticBrushStrokes />}
      
      {/* Subtle artistic noise */}
      {(settings.noise || showNoise) && <ArtisticNoise />}
    </div>
  );
}

// Specialized components for different sections
export function HeroArtisticEnhancements({ className = "" }: { className?: string }) {
  return (
    <ArtisticEnhancements 
      variant="hero" 
      className={className}
    />
  );
}

export function SectionArtisticEnhancements({ className = "" }: { className?: string }) {
  return (
    <ArtisticEnhancements 
      variant="section" 
      className={className}
    />
  );
}

export function MinimalArtisticEnhancements({ className = "" }: { className?: string }) {
  return (
    <ArtisticEnhancements 
      variant="minimal" 
      className={className}
    />
  );
}

export function BackgroundArtisticEnhancements({ className = "" }: { className?: string }) {
  return (
    <ArtisticEnhancements 
      variant="background" 
      className={className}
    />
  );
}