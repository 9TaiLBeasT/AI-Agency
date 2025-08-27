import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GaneshFestivalDecorations = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Diyas */}
      <div className="absolute top-10 left-10">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-8 h-8 relative"
        >
          {/* Diya Base */}
          <div className="w-8 h-4 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full relative">
            {/* Flame */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-3 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-2 h-4 bg-gradient-to-t from-yellow-400 via-orange-400 to-red-400 rounded-full opacity-90"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Diyas - Right Side */}
      <div className="absolute top-20 right-16">
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="w-6 h-6 relative"
        >
          <div className="w-6 h-3 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full relative">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-1.5 h-3 bg-gradient-to-t from-yellow-400 via-orange-400 to-red-400 rounded-full opacity-90"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Rangoli Pattern - Top Left */}
      <div className="absolute top-5 left-1/4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-16 h-16 relative opacity-30"
        >
          {/* Rangoli Petals */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-6 bg-gradient-to-t from-pink-400 to-purple-400 rounded-full"
              style={{
                transformOrigin: '50% 100%',
                transform: `rotate(${i * 45}deg) translateY(-20px)`,
                left: '50%',
                top: '50%',
                marginLeft: '-6px',
                marginTop: '-12px'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.9, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full"></div>
        </motion.div>
      </div>

      {/* Rangoli Pattern - Bottom Right */}
      <div className="absolute bottom-10 right-1/4">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-12 h-12 relative opacity-25"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-4 bg-gradient-to-t from-blue-400 to-teal-400 rounded-full"
              style={{
                transformOrigin: '50% 100%',
                transform: `rotate(${i * 60}deg) translateY(-16px)`,
                left: '50%',
                top: '50%',
                marginLeft: '-4px',
                marginTop: '-8px'
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-green-400 to-blue-400 rounded-full"></div>
        </motion.div>
      </div>

      {/* Floating Flower Petals */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-40"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 3) * 20}%`
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -5, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full opacity-60"
          style={{
            left: `${15 + i * 10}%`,
            top: `${15 + (i % 4) * 20}%`
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Lord Ganesha Silhouette (CSS Art) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-32 h-40 relative"
        >
          {/* Head */}
          <div className="w-20 h-20 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full mx-auto relative">
            {/* Trunk */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-8 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full rotate-12"></div>
            {/* Ears */}
            <div className="absolute -left-2 top-2 w-8 h-12 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full transform -rotate-12"></div>
            <div className="absolute -right-2 top-2 w-8 h-12 bg-gradient-to-bl from-orange-200 to-orange-300 rounded-full transform rotate-12"></div>
          </div>
          {/* Body */}
          <div className="w-16 h-20 bg-gradient-to-b from-orange-200 to-orange-300 rounded-t-full mx-auto -mt-2"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default GaneshFestivalDecorations;