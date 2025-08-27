"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { GradientButton } from "./gradient-button";
import ModelViewer from "./ModelViewer";

export function LampContainer({
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
      {/* Clean background - no flowing elements */}

      <div className="relative z-50 flex translate-y-0 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
}

export function LampDemo() {
  return (
    <LampContainer>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 gap-8 lg:gap-16 mt-16 lg:mt-0">
        {/* Left side - Text content */}
        <div className="flex-1 text-center lg:text-left space-y-8 pt-8 lg:pt-0">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Transform <br />
            Business <br />
            with <span className="text-green-400">AI Innovation</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Harness the power of artificial intelligence to revolutionize your operations, 
            enhance decision-making, and drive unprecedented growth in the digital age.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <GradientButton className="px-8 py-3 text-lg">
              Get Started Today
            </GradientButton>
            <GradientButton 
              variant="outline" 
              className="px-8 py-3 text-lg"
            >
              Watch Demo
            </GradientButton>
          </motion.div>
        </div>

        {/* Right side - 3D Model */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: "easeInOut",
          }}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          {/* 3D Model - No background container */}
          <div className="relative">
            <ModelViewer
              url="https://raw.githubusercontent.com/9TaiLBeasT/3D-model/main/A_sleek_humanoid_or_f_0704060935_texture.glb"
              width={400}
              height={400}
              autoRotate={true}
              autoRotateSpeed={0.5}
              enableMouseParallax={true}
              enableHoverRotation={true}
              enableManualRotation={true}
              enableManualZoom={true}
              environmentPreset="night"
              defaultRotationX={-20}
              defaultRotationY={30}
              defaultZoom={2}
              minZoomDistance={1}
              maxZoomDistance={5}
              fadeIn={true}
              showScreenshotButton={false}
            />
            
            {/* Subtle glow effect behind model */}
            <div className="absolute inset-0 bg-green-500/10 rounded-lg blur-3xl -z-10 scale-150" />
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-3 h-3 bg-green-400 rounded-sm animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-green-300 rounded-sm animate-pulse delay-1000" />
            <div className="absolute top-1/2 -left-8 w-1 h-1 bg-green-500 rounded-sm animate-pulse delay-500" />
          </div>
        </motion.div>
      </div>
    </LampContainer>
  );
}