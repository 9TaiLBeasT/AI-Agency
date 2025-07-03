import React from "react";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Brain, Zap, Globe as GlobeIcon, Database, Shield } from "lucide-react";
import createGlobe from "cobe";

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Track and analyze your AI model performance with real-time insights and comprehensive metrics.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r border-green-500/20",
    },
    {
      title: "Smart Image Processing",
      description:
        "Process and analyze images with our advanced computer vision AI technology.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b border-green-500/20",
    },
    {
      title: "AI Neural Demo Videos",
      description:
        "Watch our AI technology in action and see how it can transform your business operations.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-green-500/20",
    },
    {
      title: "Global AI Deployment",
      description:
        "Deploy your AI models globally with our cutting-edge cloud infrastructure and real-time monitoring.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none",
    },
  ];
  
  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          Powered by <span className="text-green-400">Advanced AI Features</span>
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-gray-400 text-center font-normal">
          From machine learning to neural networks, AI Neural provides comprehensive AI solutions 
          that revolutionize how businesses operate and grow.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-12 xl:border rounded-md border-green-500/20 bg-gray-900/20 backdrop-blur-sm">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden bg-black/40 backdrop-blur-sm`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-gray-400 text-center font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-gray-900/80 backdrop-blur-sm shadow-2xl group h-full border border-green-500/20 rounded-lg">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-6 h-6 text-green-400" />
              <span className="text-white font-semibold">AI Analytics</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs">Live</span>
            </div>
          </div>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-green-500/10 p-3 rounded border border-green-500/20">
              <div className="text-green-400 text-2xl font-bold">98.7%</div>
              <div className="text-gray-400 text-xs">Accuracy</div>
            </div>
            <div className="bg-green-500/10 p-3 rounded border border-green-500/20">
              <div className="text-green-400 text-2xl font-bold">1.2M</div>
              <div className="text-gray-400 text-xs">Predictions</div>
            </div>
            <div className="bg-green-500/10 p-3 rounded border border-green-500/20">
              <div className="text-green-400 text-2xl font-bold">24/7</div>
              <div className="text-gray-400 text-xs">Uptime</div>
            </div>
          </div>
          
          {/* Chart Simulation */}
          <div className="flex-1 bg-gray-800/50 rounded p-4 border border-green-500/10">
            <div className="flex items-end space-x-1 h-20">
              {[40, 60, 80, 45, 90, 70, 85, 95].map((height, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-t from-green-600 to-green-400 rounded-sm flex-1"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10 h-full group/image cursor-pointer">
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative bg-gray-900/50 rounded-lg border border-green-500/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
          
          {/* Video Thumbnail */}
          <div className="relative flex-1 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="AI Demo"
              className="w-full h-full object-cover opacity-80 group-hover/image:opacity-60 transition-all duration-300"
            />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-16 h-16 bg-green-500/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </motion.div>
            </div>
          </div>
          
          {/* Video Info */}
          <div className="p-4 bg-gray-900/80 backdrop-blur-sm">
            <h4 className="text-white font-semibold mb-1">AI Neural in Action</h4>
            <p className="text-gray-400 text-sm">See how our AI transforms businesses</p>
            <div className="flex items-center mt-2 space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-400 text-xs">Live Demo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-gray-900/80 border border-green-500/30 flex-shrink-0 overflow-hidden backdrop-blur-sm"
          >
            <img
              src={image}
              alt="AI processed images"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
            {/* Processing Overlay */}
            <div className="absolute inset-0 bg-green-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-gray-900/80 border border-green-500/30 flex-shrink-0 overflow-hidden backdrop-blur-sm"
          >
            <img
              src={image}
              alt="AI processed images"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
            {/* Processing Overlay */}
            <div className="absolute inset-0 bg-green-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-green-400" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent mt-10">
      <div className="absolute top-4 left-4 z-20">
        <div className="flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-green-500/20">
          <GlobeIcon className="w-5 h-5 text-green-400" />
          <span className="text-white text-sm font-medium">Global Network</span>
        </div>
      </div>
      
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-green-500/20">
          <Shield className="w-5 h-5 text-green-400" />
          <span className="text-green-400 text-sm">Secure</span>
        </div>
      </div>
      
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.1, 0.8, 0.4],
      glowColor: [0.1, 0.8, 0.4],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.08 },
        { location: [-33.8688, 151.2093], size: 0.06 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};