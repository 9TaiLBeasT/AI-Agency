import React from "react";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Palette, Sparkles, Eye, Layers, Brush, Monitor, Smartphone } from "lucide-react";
import createGlobe from "cobe";

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "Design Process Visualization",
      description:
        "Experience our creative workflow from concept to completion with interactive design process tracking.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r border-purple-500/20",
    },
    {
      title: "Creative Portfolio Gallery",
      description:
        "Explore our stunning collection of brand identities, web designs, and creative campaigns.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b border-purple-500/20",
    },
    {
      title: "Design Showcase Videos",
      description:
        "Watch our creative process in action and see how we bring brands to life through design.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-purple-500/20",
    },
    {
      title: "Creative Tools & Technologies",
      description:
        "Discover the cutting-edge design tools and technologies we use to create exceptional digital experiences.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none",
    },
  ];
  
  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-rivrang-text-primary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Where <span className="text-rivrang-mint-dark">Creativity Flows</span>
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-rivrang-text-secondary text-center font-normal" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          From concept to creation, RivRang transforms your vision into stunning digital experiences 
          that captivate audiences and drive results.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-12 xl:border rounded-md border-rivrang-mint/30 bg-white/60 backdrop-blur-sm shadow-sm">
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
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden bg-white/70 backdrop-blur-sm`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-rivrang-text-primary text-xl md:text-2xl md:leading-snug" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-rivrang-text-secondary text-center font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white/85 backdrop-blur-sm shadow-2xl group h-full border border-rivrang-mint/30 rounded-lg">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          {/* Design Process Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Palette className="w-6 h-6 text-rivrang-mint-dark" />
              <span className="text-rivrang-text-primary font-semibold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Design Process</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-rivrang-mint-dark rounded-sm animate-pulse"></div>
              <span className="text-rivrang-mint-dark text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Active</span>
            </div>
          </div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-rivrang-mint/10 p-3 rounded border border-rivrang-mint/20">
              <div className="text-rivrang-mint-dark text-2xl font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>200+</div>
            <div className="text-rivrang-text-muted text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Projects</div>
            </div>
            <div className="bg-rivrang-sky/10 p-3 rounded border border-rivrang-sky/20">
              <div className="text-rivrang-sky-dark text-2xl font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>98%</div>
            <div className="text-rivrang-text-muted text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Satisfaction</div>
            </div>
            <div className="bg-rivrang-blush/10 p-3 rounded border border-rivrang-blush/20">
              <div className="text-rivrang-blush-warm text-2xl font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>5★</div>
            <div className="text-rivrang-text-muted text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Rating</div>
            </div>
          </div>
          
          {/* Creative Flow Visualization */}
          <div className="flex-1 bg-white/60 rounded p-4 border border-rivrang-mint/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-rivrang-text-secondary text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Creative Workflow</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-rivrang-mint-dark rounded-sm"></div>
                <div className="w-2 h-2 bg-rivrang-sky-dark rounded-sm"></div>
                <div className="w-2 h-2 bg-rivrang-blush-warm rounded-sm"></div>
              </div>
            </div>
            <div className="flex items-end space-x-1 h-16">
              {[60, 80, 95, 70, 85, 90, 75, 100].map((height, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-t from-rivrang-mint-dark via-rivrang-sky-dark to-rivrang-blush-warm rounded-sm flex-1"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 1.2, delay: i * 0.15 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Removed gradient overlays */}
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10 h-full group/image cursor-pointer">
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative bg-white/70 rounded-lg border border-rivrang-mint/30 overflow-hidden">
          {/* Removed gradient overlay */}
          
          {/* Video Thumbnail */}
          <div className="relative flex-1 bg-rivrang-cream flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Design Showcase"
              className="w-full h-full object-cover opacity-80 group-hover/image:opacity-60 transition-all duration-300"
            />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-16 h-16 bg-rivrang-mint-dark/90 rounded-lg flex items-center justify-center backdrop-blur-sm border border-rivrang-mint"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </motion.div>
            </div>
          </div>
          
          {/* Video Info */}
          <div className="p-4 bg-white/85 backdrop-blur-sm">
            <h4 className="text-rivrang-text-primary font-semibold mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Creative Process</h4>
            <p className="text-rivrang-text-secondary text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Watch our design come to life</p>
            <div className="flex items-center mt-2 space-x-2">
              <div className="w-2 h-2 bg-rivrang-mint-dark rounded-sm animate-pulse"></div>
              <span className="text-rivrang-mint-dark text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Behind the Scenes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const portfolioImages = [
    "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
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
        {portfolioImages.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"portfolio-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white/85 border border-rivrang-mint/40 flex-shrink-0 overflow-hidden backdrop-blur-sm shadow-sm"
          >
            <img
              src={image}
              alt="Creative portfolio work"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
            {/* Creative Overlay */}
            <div className="absolute inset-0 bg-rivrang-mint/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-rivrang-mint-dark" />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {portfolioImages.map((image, idx) => (
          <motion.div
            key={"portfolio-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white/85 border border-rivrang-sky/40 flex-shrink-0 overflow-hidden backdrop-blur-sm shadow-sm"
          >
            <img
              src={image}
              alt="Creative portfolio work"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
            {/* Creative Overlay */}
            <div className="absolute inset-0 bg-rivrang-sky/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-rivrang-sky-dark" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-rivrang-cream to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-rivrang-cream to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  const tools = [
    { name: "Figma", icon: <Layers className="w-6 h-6" />, color: "text-rivrang-mint-dark" },
    { name: "Adobe CC", icon: <Brush className="w-6 h-6" />, color: "text-rivrang-sky-dark" },
    { name: "Webflow", icon: <Monitor className="w-6 h-6" />, color: "text-rivrang-blush-warm" },
    { name: "Framer", icon: <Smartphone className="w-6 h-6" />, color: "text-rivrang-lavender" },
  ];

  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent mt-10 p-6">
      <div className="absolute top-4 left-4 z-20">
        <div className="flex items-center space-x-2 bg-white/85 backdrop-blur-sm px-3 py-2 rounded-lg border border-rivrang-mint/30 shadow-sm">
          <Palette className="w-5 h-5 text-rivrang-mint-dark" />
          <span className="text-rivrang-text-primary text-sm font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Creative Suite</span>
        </div>
      </div>
      
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center space-x-2 bg-white/85 backdrop-blur-sm px-3 py-2 rounded-lg border border-rivrang-sky/30 shadow-sm">
          <Sparkles className="w-5 h-5 text-rivrang-sky-dark" />
          <span className="text-rivrang-sky-dark text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Pro Tools</span>
        </div>
      </div>
      
      {/* Creative Tools Grid */}
      <div className="grid grid-cols-2 gap-6 mt-16 w-full max-w-sm">
        {tools.map((tool, idx) => (
          <motion.div
            key={tool.name}
            className="bg-white/75 backdrop-blur-sm border border-rivrang-mint/40 rounded-lg p-4 flex flex-col items-center space-y-2 hover:border-rivrang-mint/60 transition-all duration-300 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={`${tool.color} mb-2`}>
              {tool.icon}
            </div>
            <span className="text-rivrang-text-primary text-sm font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{tool.name}</span>
            <div className="w-full bg-rivrang-cream rounded-sm h-1">
              <motion.div
                className={`h-1 rounded-sm bg-gradient-to-r from-rivrang-mint-dark to-rivrang-sky-dark`}
                initial={{ width: 0 }}
                animate={{ width: `${Math.random() * 40 + 60}%` }}
                transition={{ duration: 1, delay: idx * 0.2 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
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