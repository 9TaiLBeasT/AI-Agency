"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DivideIcon as LucideIcon, Home, Settings, Zap, Info, Mail } from "lucide-react"

function cn(...inputs: (string | undefined | null | boolean)[]) {
  return inputs.filter(Boolean).join(" ")
}

interface NavItem {
  name: string
  url: string
  icon: typeof LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
}

export function AnimeNavBar({ items, className, defaultActive = "Home" }: NavBarProps) {
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>(defaultActive)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveTab(sectionId);
  };

  if (!mounted) return null

  return (
    <>
      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
      <div className="fixed top-0 left-0 right-0 z-[9999] pt-5">
        <div className="flex justify-center pt-6">
          <motion.div 
            className="flex items-center gap-3 bg-black/50 border border-white/10 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg relative"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            {items.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.name
              const isHovered = hoveredTab === item.name

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name)}
                  onMouseEnter={() => setHoveredTab(item.name)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
                    "text-white/70 hover:text-white",
                    isActive && "text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.03, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="absolute inset-0 bg-green-500/25 rounded-full blur-md" />
                      <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl" />
                      <div className="absolute inset-0 bg-green-500/15 rounded-full blur-2xl" />
                      <div className="absolute inset-0 bg-green-500/5 rounded-full blur-3xl" />
                      
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0"
                        style={{
                          animation: "shine 3s ease-in-out infinite"
                        }}
                      />
                    </motion.div>
                  )}

                  <motion.span
                    className="hidden md:inline relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                  <motion.span 
                    className="md:hidden relative z-10"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} strokeWidth={2.5} />
                  </motion.span>
            
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      />
                    )}
                  </AnimatePresence>

                  {isActive && (
                    <motion.div
                      layoutId="anime-mascot"
                      className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="relative w-12 h-12">
                        {(() => {
                          const getRobotReaction = () => {
                            switch (activeTab) {
                              case "Home":
                                return {
                                  bodyColor: "from-gray-800 to-black",
                                  borderColor: "border-green-400",
                                  eyeColor: "#00ff00",
                                  eyeShape: "rounded-full",
                                  eyeSize: "w-2 h-2",
                                  mouthColor: "bg-green-400",
                                  mouthShape: "rounded-full",
                                  mouthSize: "w-3 h-1.5",
                                  antennaColor: "bg-green-400",
                                  specialFeature: "happy",
                                  animation: {
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 2, -2, 0],
                                  }
                                }
                              case "Services":
                                return {
                                  bodyColor: "from-gray-800 to-black",
                                  borderColor: "border-green-400",
                                  eyeColor: "#00ff00",
                                  eyeShape: "rounded-sm",
                                  eyeSize: "w-1.5 h-2",
                                  mouthColor: "bg-black",
                                  mouthShape: "rounded-sm",
                                  mouthSize: "w-4 h-1",
                                  antennaColor: "bg-green-400",
                                  specialFeature: "working",
                                  animation: {
                                    x: [0, 1, -1, 0],
                                    scale: [1, 1.02, 1],
                                  }
                                }
                              case "Features":
                                return {
                                  bodyColor: "from-gray-800 to-black",
                                  borderColor: "border-green-400",
                                  eyeColor: "#00ff00",
                                  eyeShape: "rounded-sm",
                                  eyeSize: "w-2 h-2",
                                  mouthColor: "bg-green-400",
                                  mouthShape: "rounded-full",
                                  mouthSize: "w-2 h-2",
                                  antennaColor: "bg-green-400",
                                  specialFeature: "excited",
                                  animation: {
                                    scale: [1, 1.1, 1],
                                    y: [0, -2, 0],
                                  }
                                }
                              case "About":
                                return {
                                  bodyColor: "from-gray-800 to-black",
                                  borderColor: "border-green-400",
                                  eyeColor: "#00ff00",
                                  eyeShape: "rounded-sm",
                                  eyeSize: "w-1.5 h-1.5",
                                  mouthColor: "bg-black",
                                  mouthShape: "rounded-sm",
                                  mouthSize: "w-3 h-1",
                                  antennaColor: "bg-green-400",
                                  specialFeature: "thinking",
                                  animation: {
                                    rotate: [0, -3, 3, 0],
                                    scale: [1, 0.98, 1],
                                  }
                                }
                              case "Contact":
                                return {
                                  bodyColor: "from-gray-800 to-black",
                                  borderColor: "border-green-400",
                                  eyeColor: "#00ff00",
                                  eyeShape: "rounded-full",
                                  eyeSize: "w-2 h-2",
                                  mouthColor: "bg-green-400",
                                  mouthShape: "rounded-full",
                                  mouthSize: "w-4 h-1.5",
                                  antennaColor: "bg-green-400",
                                  specialFeature: "communicating",
                                  animation: {
                                    scale: [1, 1.03, 1],
                                    rotate: [0, 1, -1, 0],
                                  }
                                }
                              default:
                                return {
                                  bodyColor: "from-gray-800 to-black",
                                  borderColor: "border-green-400",
                                  eyeColor: "#00ff00",
                                  eyeShape: "rounded-sm",
                                  eyeSize: "w-2 h-1.5",
                                  mouthColor: "bg-green-400",
                                  mouthShape: "rounded-sm",
                                  mouthSize: "w-4 h-1",
                                  antennaColor: "bg-green-400",
                                  specialFeature: "neutral",
                                  animation: {
                                    y: [0, -2, 0],
                                  }
                                }
                            }
                          }

                          const reaction = getRobotReaction()

                          return (
                            <motion.div 
                              className={`absolute w-10 h-10 bg-gradient-to-b ${reaction.bodyColor} rounded-lg left-1/2 -translate-x-1/2 ${reaction.borderColor} border-2 shadow-lg shadow-green-400/20`}
                              animate={
                                hoveredTab ? {
                                  ...reaction.animation,
                                  boxShadow: ["0 0 10px rgba(0, 255, 0, 0.3)", "0 0 20px rgba(0, 255, 0, 0.6)", "0 0 10px rgba(0, 255, 0, 0.3)"],
                                  transition: {
                                    duration: 0.5,
                                    ease: "easeInOut"
                                  }
                                } : {
                                  y: [0, -3, 0],
                                  boxShadow: ["0 0 5px rgba(0, 255, 0, 0.2)", "0 0 15px rgba(0, 255, 0, 0.4)", "0 0 5px rgba(0, 255, 0, 0.2)"],
                                  transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }
                                }
                              }
                            >
                              {/* Robot antenna */}
                              <motion.div 
                                className={`absolute w-0.5 h-2 bg-gray-300 left-1/2 -translate-x-1/2 -top-2`}
                                animate={{
                                  rotate: hoveredTab ? [0, 15, -15, 0] : [0, 5, -5, 0],
                                  transition: { duration: hoveredTab ? 0.3 : 2, repeat: hoveredTab ? 1 : Infinity }
                                }}
                              />
                              <motion.div 
                                className={`absolute w-1.5 h-1.5 ${reaction.antennaColor} rounded-full left-1/2 -translate-x-1/2 -top-3 shadow-lg shadow-green-400/50`}
                                animate={{
                                  opacity: [0.7, 1, 0.7],
                                  scale: [1, 1.2, 1],
                                  boxShadow: ["0 0 5px rgba(0, 255, 0, 0.5)", "0 0 15px rgba(0, 255, 0, 0.8)", "0 0 5px rgba(0, 255, 0, 0.5)"],
                                  transition: { duration: 1, repeat: Infinity }
                                }}
                              />
                              
                              {/* Robot eyes - different for each tab */}
                              {reaction.specialFeature === "working" ? (
                                // Working eyes for Services
                                <>
                                  <motion.div 
                                    className={`absolute ${reaction.eyeSize} bg-black ${reaction.eyeShape} border border-green-400`}
                                    style={{ left: '20%', top: '30%' }}
                                  >
                                    <motion.div 
                                      className="absolute w-0.5 h-full bg-green-400"
                                      animate={{
                                        x: [0, 6, 0],
                                        opacity: [0.5, 1, 0.5],
                                        transition: { duration: 1.5, repeat: Infinity }
                                      }}
                                    />
                                  </motion.div>
                                  <motion.div 
                                    className={`absolute ${reaction.eyeSize} bg-black ${reaction.eyeShape} border border-green-400`}
                                    style={{ right: '20%', top: '30%' }}
                                  >
                                    <motion.div 
                                      className="absolute w-0.5 h-full bg-green-400"
                                      animate={{
                                        x: [0, 6, 0],
                                        opacity: [0.5, 1, 0.5],
                                        transition: { duration: 1.5, repeat: Infinity, delay: 0.3 }
                                      }}
                                    />
                                  </motion.div>
                                </>
                              ) : reaction.specialFeature === "excited" ? (
                                // Star eyes for Features
                                <>
                                  <motion.div 
                                    className="absolute text-green-400 text-xs font-bold"
                                    style={{ left: '22%', top: '25%' }}
                                    animate={{
                                      scale: [1, 1.3, 1],
                                      rotate: [0, 180, 360],
                                      color: ["#00ff00", "#00cc00", "#00ff00"],
                                      transition: { duration: 1.5, repeat: Infinity }
                                    }}
                                  >
                                    ⚡
                                  </motion.div>
                                  <motion.div 
                                    className="absolute text-green-400 text-xs font-bold"
                                    style={{ right: '22%', top: '25%' }}
                                    animate={{
                                      scale: [1, 1.3, 1],
                                      rotate: [0, 180, 360],
                                      color: ["#00ff00", "#00cc00", "#00ff00"],
                                      transition: { duration: 1.5, repeat: Infinity, delay: 0.3 }
                                    }}
                                  >
                                    ⚡
                                  </motion.div>
                                </>
                              ) : reaction.specialFeature === "communicating" ? (
                                // Communication eyes for Contact
                                <>
                                  <motion.div 
                                    className={`absolute ${reaction.eyeSize} border border-green-400 ${reaction.eyeShape}`}
                                    style={{ left: '20%', top: '30%', backgroundColor: reaction.eyeColor }}
                                    animate={{
                                      scale: [1, 1.2, 1],
                                      backgroundColor: [reaction.eyeColor, "#00cc00", reaction.eyeColor],
                                      transition: { duration: 1, repeat: Infinity }
                                    }}
                                  />
                                  <motion.div 
                                    className={`absolute ${reaction.eyeSize} border border-green-400 ${reaction.eyeShape}`}
                                    style={{ right: '20%', top: '30%', backgroundColor: reaction.eyeColor }}
                                    animate={{
                                      scale: [1, 1.2, 1],
                                      backgroundColor: [reaction.eyeColor, "#00cc00", reaction.eyeColor],
                                      transition: { duration: 1, repeat: Infinity, delay: 0.2 }
                                    }}
                                  />
                                  {/* Communication waves */}
                                  <motion.div
                                    className="absolute w-6 h-0.5 bg-green-400 rounded-full opacity-60"
                                    style={{ left: '45%', top: '20%' }}
                                    animate={{
                                      scaleX: [0, 1, 0],
                                      opacity: [0, 0.8, 0],
                                      transition: { duration: 1.5, repeat: Infinity }
                                    }}
                                  />
                                  <motion.div
                                    className="absolute w-4 h-0.5 bg-green-400 rounded-full opacity-40"
                                    style={{ left: '50%', top: '15%' }}
                                    animate={{
                                      scaleX: [0, 1, 0],
                                      opacity: [0, 0.6, 0],
                                      transition: { duration: 1.5, repeat: Infinity, delay: 0.3 }
                                    }}
                                  />
                                </>
                              ) : reaction.specialFeature === "thinking" ? (
                                // Smaller contemplative eyes for About
                                <>
                                  <motion.div 
                                    className={`absolute ${reaction.eyeSize} border border-green-400 ${reaction.eyeShape}`}
                                    style={{ left: '22%', top: '32%', backgroundColor: reaction.eyeColor }}
                                    animate={{
                                      scaleY: [1, 0.3, 1],
                                      backgroundColor: [reaction.eyeColor, "#008800", reaction.eyeColor],
                                      transition: { duration: 3, repeat: Infinity }
                                    }}
                                  />
                                  <motion.div 
                                    className={`absolute ${reaction.eyeSize} border border-green-400 ${reaction.eyeShape}`}
                                    style={{ right: '22%', top: '32%', backgroundColor: reaction.eyeColor }}
                                    animate={{
                                      scaleY: [1, 0.3, 1],
                                      backgroundColor: [reaction.eyeColor, "#008800", reaction.eyeColor],
                                      transition: { duration: 3, repeat: Infinity, delay: 0.1 }
                                    }}
                                  />
                                </>
                              ) : (
                                // Happy/default eyes for Home
                                <>
                                  <motion.div 
                                    className={`absolute ${reaction.eyeSize} border border-green-400 ${reaction.eyeShape}`}
                                    style={{ left: '20%', top: '30%', backgroundColor: reaction.eyeColor }}
                                    animate={
                                      hoveredTab ? {
                                        scaleY: [1, 0.1, 1],
                                        backgroundColor: [reaction.eyeColor, "#00cc00", reaction.eyeColor],
                                        transition: {
                                          duration: 0.3,
                                          times: [0, 0.5, 1]
                                        }
                                      } : {
                                        backgroundColor: [reaction.eyeColor, "#008800", reaction.eyeColor],
                                        transition: { duration: 2, repeat: Infinity }
                                      }
                                    }
                                  />
                                  <motion.div 
                                    className={`absolute ${reaction.eyeSize} border border-green-400 ${reaction.eyeShape}`}
                                    style={{ right: '20%', top: '30%', backgroundColor: reaction.eyeColor }}
                                    animate={
                                      hoveredTab ? {
                                        scaleY: [1, 0.1, 1],
                                        backgroundColor: [reaction.eyeColor, "#00cc00", reaction.eyeColor],
                                        transition: {
                                          duration: 0.3,
                                          times: [0, 0.5, 1]
                                        }
                                      } : {
                                        backgroundColor: [reaction.eyeColor, "#008800", reaction.eyeColor],
                                        transition: { duration: 2, repeat: Infinity }
                                      }
                                    }
                                  />
                                </>
                              )}
                              
                              {/* Robot mouth/speaker */}
                              <motion.div 
                                className={`absolute ${reaction.mouthSize} ${reaction.mouthColor} ${reaction.mouthShape} border border-green-400`}
                                animate={
                                  hoveredTab ? {
                                    scaleY: 1.5,
                                    y: -1,
                                    boxShadow: "0 0 10px rgba(0, 255, 0, 0.6)"
                                  } : {
                                    scaleY: 1,
                                    y: 0,
                                    boxShadow: "0 0 5px rgba(0, 255, 0, 0.3)"
                                  }
                                }
                                style={{ left: '30%', top: '60%' }}
                              >
                                {reaction.mouthColor === "bg-black" && (
                                  <div className="absolute inset-0.5 bg-gray-900 rounded-sm">
                                    <div className="w-full h-0.5 bg-green-400 mt-0.5 opacity-60"></div>
                                    <div className="w-full h-0.5 bg-green-400 mt-0.5 opacity-40"></div>
                                  </div>
                                )}
                              </motion.div>
                              
                              {/* Robot side panels */}
                              <motion.div 
                                className="absolute w-1 h-1 bg-green-400 rounded-full shadow-sm shadow-green-400/50"
                                animate={{
                                  opacity: hoveredTab ? [1, 0.3, 1] : [0.6, 1, 0.6],
                                  boxShadow: hoveredTab ? 
                                    ["0 0 3px rgba(0, 255, 0, 0.5)", "0 0 8px rgba(0, 255, 0, 0.8)", "0 0 3px rgba(0, 255, 0, 0.5)"] :
                                    ["0 0 2px rgba(0, 255, 0, 0.3)", "0 0 6px rgba(0, 255, 0, 0.6)", "0 0 2px rgba(0, 255, 0, 0.3)"],
                                  transition: { duration: 1, repeat: Infinity }
                                }}
                                style={{ left: '10%', top: '50%' }}
                              />
                              <motion.div 
                                className="absolute w-1 h-1 bg-green-400 rounded-full shadow-sm shadow-green-400/50"
                                animate={{
                                  opacity: hoveredTab ? [1, 0.3, 1] : [0.6, 1, 0.6],
                                  boxShadow: hoveredTab ? 
                                    ["0 0 3px rgba(0, 255, 0, 0.5)", "0 0 8px rgba(0, 255, 0, 0.8)", "0 0 3px rgba(0, 255, 0, 0.5)"] :
                                    ["0 0 2px rgba(0, 255, 0, 0.3)", "0 0 6px rgba(0, 255, 0, 0.6)", "0 0 2px rgba(0, 255, 0, 0.3)"],
                                  transition: { duration: 1.2, repeat: Infinity }
                                }}
                                style={{ right: '10%', top: '50%' }}
                              />

                              {/* Special effects for thinking mode */}
                              {reaction.specialFeature === "thinking" && (
                                <motion.div
                                  className="absolute -top-2 -right-2 text-green-400 text-xs"
                                  animate={{
                                    opacity: [0, 1, 0],
                                    y: [0, -3, 0],
                                    transition: { duration: 2, repeat: Infinity }
                                  }}
                                >
                                  ?
                                </motion.div>
                              )}

                              <AnimatePresence>
                                {hoveredTab && (
                                  <>
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0 }}
                                      className="absolute -top-1 -right-1 w-2 h-2 text-green-400"
                                    >
                                      ✨
                                    </motion.div>
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0 }}
                                      transition={{ delay: 0.1 }}
                                      className="absolute -top-2 left-0 w-2 h-2 text-green-400"
                                    >
                                      ✨
                                    </motion.div>
                                  </>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          )
                        })()}
                        <motion.div
                          className="absolute -bottom-1 left-1/2 w-4 h-4 -translate-x-1/2"
                          animate={
                            hoveredTab ? {
                              y: [0, -4, 0],
                              transition: {
                                duration: 0.3,
                                repeat: Infinity,
                                repeatType: "reverse"
                              }
                            } : {
                              y: [0, 2, 0],
                              transition: {
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }
                            }
                          }
                        >
                          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black border border-green-400 rotate-45 transform origin-center shadow-lg shadow-green-400/30" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </button>
              )
            })}
          </motion.div>
        </div>
      </div>
    </>
  )
} 

const items = [
  {
    name: "Home",
    url: "#home",
    icon: Home,
  },
  {
    name: "Services",
    url: "#services",
    icon: Settings,
  },
  {
    name: "Features",
    url: "#features",
    icon: Zap,
  },
  {
    name: "About",
    url: "#about",
    icon: Info,
  },
  {
    name: "Contact",
    url: "#contact",
    icon: Mail,
  },
]

export default function AnimeNavBarDemo() {
  return <AnimeNavBar items={items} defaultActive="Home" />
}