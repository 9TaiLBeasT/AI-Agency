import { motion } from 'framer-motion';

const FestivalHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 relative"
    >
      {/* Decorative Top Border */}
      <div className="flex justify-center mb-6">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex items-center space-x-2"
        >
          {/* Left Decorative Elements */}
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`left-${i}`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 bg-gradient-to-br from-orange-400 to-red-400 rounded-full"
              />
            ))}
          </div>

          {/* Central Om Symbol */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-16 h-16 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-300/50"
          >
            <span className="text-white text-2xl font-bold">ॐ</span>
          </motion.div>

          {/* Right Decorative Elements */}
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`right-${i}`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2 + 0.5,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-rivrang-text-primary mb-4">
        Our Services{' '}
        <motion.span 
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text bg-[length:200%_100%]"
        >
          (Ganesh Chaturthi Special)
        </motion.span>
      </h2>
      
      {/* Festival Greeting */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-6 relative"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block"
        >
          <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text">
            गणपति बप्पा मोरया!
          </span>
        </motion.div>
        
        {/* Floating Sparkles around greeting */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 2) * 40}%`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      {/* Description */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-xl text-rivrang-text-secondary max-w-3xl mx-auto relative"
      >
        Limited time special offers on all our creative services! Get professional quality work at discounted prices.{' '}
        <motion.span
          animate={{
            color: ['#f97316', '#ef4444', '#f59e0b', '#f97316']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="font-semibold"
        >
          Valid until September 7th.
        </motion.span>
      </motion.p>

      {/* Decorative Bottom Border */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-2">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={`bottom-${i}`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
              className={`w-2 h-2 rounded-full ${
                i === 3 ? 'bg-gradient-to-br from-red-400 to-pink-400 w-3 h-3' :
                'bg-gradient-to-br from-orange-400 to-yellow-400'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FestivalHeader;