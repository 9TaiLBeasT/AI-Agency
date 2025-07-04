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
        "relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-green-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-green-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-green-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-green-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-green-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
      </div>

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
            <div className="absolute inset-0 bg-green-500/10 rounded-full blur-3xl -z-10 scale-150" />
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-green-300 rounded-full animate-pulse delay-1000" />
            <div className="absolute top-1/2 -left-8 w-1 h-1 bg-green-500 rounded-full animate-pulse delay-500" />
          </div>
        </motion.div>
      </div>
    </LampContainer>
  );
}