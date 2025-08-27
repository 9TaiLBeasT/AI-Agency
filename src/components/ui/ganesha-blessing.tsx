import { motion } from 'framer-motion';

interface GaneshaBlessingProps {
  index: number;
}

const GaneshaBlessing = ({ index }: GaneshaBlessingProps) => {
  const blessings = [
    "विघ्न हर्ता", // Obstacle Remover
    "मंगल मूर्ति", // Auspicious Form
    "गणपति बप्पा", // Lord Ganesha
    "शुभ लाभ" // Good Fortune
  ];

  const blessing = blessings[index % blessings.length];

  return (
    <div className="absolute -top-2 -right-2 z-10">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ 
          scale: [0, 1.2, 1],
          rotate: [0, 10, -5, 0]
        }}
        transition={{ 
          duration: 1.5,
          delay: index * 0.2,
          ease: "easeOut"
        }}
        className="relative"
      >
        {/* Om Symbol Background */}
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-12 h-12 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-300"
        >
          <span className="text-white text-lg font-bold">ॐ</span>
        </motion.div>
        
        {/* Blessing Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-md">
            {blessing}
          </div>
        </motion.div>

        {/* Sparkle Effects */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2 + i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default GaneshaBlessing;