"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { GradientButton } from "./gradient-button";
import VariableProximity from "./VariableProximity";


export function ArtisticContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-rivrang-cream w-full rounded-md z-0",
        className
      )}
    >


      <div className="relative z-50 flex translate-y-0 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
}

export function RivRangHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <ArtisticContainer>
      {/* Enhanced artistic elements for hero */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Removed floating bubble elements */}
        
        {/* Festival decorative patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="festivalStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff8c42" />
              <stop offset="30%" stopColor="#fbbf24" />
              <stop offset="60%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <radialGradient id="festivalGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ff8c42" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          
          {/* Decorative mandala-like patterns */}
          <motion.circle
            cx="200" cy="200" r="80"
            fill="url(#festivalGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.circle
            cx="800" cy="300" r="60"
            fill="url(#festivalGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          />
          <motion.circle
            cx="150" cy="700" r="70"
            fill="url(#festivalGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          />
          
          {/* Flowing decorative lines */}
          <motion.path
            d="M100,400 Q300,200 500,400 Q700,600 900,400"
            stroke="url(#festivalStroke)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ 
              duration: 4, 
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
          />
        </svg>
      </div>
      
      <div ref={containerRef} className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 text-center space-y-8 mt-16" style={{ position: 'relative' }}>
        {/* Main RivRang heading - Clean version */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative py-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black tracking-tight text-center"
          >
            <VariableProximity
              label="RivRang"
              className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent font-black"
              fromFontVariationSettings="'wght' 600, 'opsz' 12"
              toFontVariationSettings="'wght' 1000, 'opsz' 48"
              containerRef={containerRef}
              radius={150}
              falloff="exponential"
            />
          </motion.h1>
        </motion.div>
        
        {/* Flow of Art tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-2xl md:text-3xl font-medium text-center tracking-wide"
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%]"
          >
            Flow of Art
          </motion.span>
        </motion.p>

        {/* Descriptive text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-lg md:text-xl text-rivrang-text-secondary max-w-3xl mx-auto leading-relaxed text-center"
        >
          Where creativity meets innovation. We craft digital experiences that flow seamlessly 
          between art and technology, bringing your vision to life through exceptional design 
          and creative solutions.
        </motion.p>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <GradientButton className="px-8 py-3 text-lg">
            Start Your Project
          </GradientButton>
          <GradientButton 
            variant="outline" 
            className="px-8 py-3 text-lg"
          >
            View Our Work
          </GradientButton>
        </motion.div>

        {/* Removed floating bubble particles */}
      </div>
    </ArtisticContainer>
  );
}