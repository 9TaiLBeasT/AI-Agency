import { motion } from 'framer-motion';

const FestivalBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Traditional Border Patterns */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-orange-200/30 to-transparent">
        <div className="flex justify-center items-center h-full space-x-4">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-br from-orange-400 to-red-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-orange-200/30 to-transparent">
        <div className="flex justify-center items-center h-full space-x-4">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.9, 0.5]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.12,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner Decorative Elements */}
      <div className="absolute top-4 left-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 relative opacity-20"
        >
          {/* Lotus Pattern */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-8 bg-gradient-to-t from-pink-400 to-purple-400 rounded-full"
              style={{
                transformOrigin: '50% 100%',
                transform: `rotate(${i * 45}deg) translateY(-24px)`,
                left: '50%',
                top: '50%',
                marginLeft: '-4px',
                marginTop: '-16px'
              }}
            />
          ))}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full"></div>
        </motion.div>
      </div>

      <div className="absolute top-4 right-4">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 relative opacity-20"
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-6 bg-gradient-to-t from-blue-400 to-teal-400 rounded-full"
              style={{
                transformOrigin: '50% 100%',
                transform: `rotate(${i * 30}deg) translateY(-20px)`,
                left: '50%',
                top: '50%',
                marginLeft: '-2px',
                marginTop: '-12px'
              }}
            />
          ))}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-green-300 to-blue-400 rounded-full"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 relative opacity-15"
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-5 bg-gradient-to-t from-rose-400 to-pink-400 rounded-full"
              style={{
                transformOrigin: '50% 100%',
                transform: `rotate(${i * 60}deg) translateY(-18px)`,
                left: '50%',
                top: '50%',
                marginLeft: '-4px',
                marginTop: '-10px'
              }}
            />
          ))}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-orange-300 to-red-400 rounded-full"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 right-4">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 relative opacity-15"
        >
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-4 bg-gradient-to-t from-purple-400 to-indigo-400 rounded-full"
              style={{
                transformOrigin: '50% 100%',
                transform: `rotate(${i * 36}deg) translateY(-16px)`,
                left: '50%',
                top: '50%',
                marginLeft: '-2px',
                marginTop: '-8px'
              }}
            />
          ))}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full"></div>
        </motion.div>
      </div>

      {/* Floating Traditional Elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`traditional-${i}`}
          className="absolute"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${20 + (i * 11) % 60}%`
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 8, -4, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut"
          }}
        >
          <div className={`w-3 h-3 rounded-full opacity-30 ${
            i % 4 === 0 ? 'bg-gradient-to-br from-orange-300 to-red-400' :
            i % 4 === 1 ? 'bg-gradient-to-br from-yellow-300 to-orange-400' :
            i % 4 === 2 ? 'bg-gradient-to-br from-pink-300 to-rose-400' :
            'bg-gradient-to-br from-purple-300 to-indigo-400'
          }`}></div>
        </motion.div>
      ))}

      {/* Sacred Geometry Pattern */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-96 h-96 relative"
        >
          {/* Outer Ring */}
          {[...Array(24)].map((_, i) => (
            <div
              key={`outer-${i}`}
              className="absolute w-2 h-12 bg-gradient-to-t from-orange-200 to-yellow-200 rounded-full"
              style={{
                transformOrigin: '50% 100%',
                transform: `rotate(${i * 15}deg) translateY(-180px)`,
                left: '50%',
                top: '50%',
                marginLeft: '-4px',
                marginTop: '-24px'
              }}
            />
          ))}
          
          {/* Middle Ring */}
          {[...Array(16)].map((_, i) => (
            <div
              key={`middle-${i}`}
              className="absolute w-3 h-8 bg-gradient-to-t from-pink-200 to-rose-200 rounded-full"
              style={{
                transformOrigin: '50% 100%',
                transform: `rotate(${i * 22.5}deg) translateY(-120px)`,
                left: '50%',
                top: '50%',
                marginLeft: '-6px',
                marginTop: '-16px'
              }}
            />
          ))}
          
          {/* Inner Ring */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`inner-${i}`}
              className="absolute w-4 h-6 bg-gradient-to-t from-purple-200 to-indigo-200 rounded-full"
              style={{
                transformOrigin: '50% 100%',
                transform: `rotate(${i * 30}deg) translateY(-80px)`,
                left: '50%',
                top: '50%',
                marginLeft: '-8px',
                marginTop: '-12px'
              }}
            />
          ))}
          
          {/* Center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default FestivalBackground;