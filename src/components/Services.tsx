import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Bot, Cpu, Database, Eye, Lightbulb } from 'lucide-react';
import { PinContainer } from './ui/3d-pin';

const Services = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [200, 800], [50, 0]);
  const opacity = useTransform(scrollY, [200, 600], [0, 1]);

  const services = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced ML algorithms that learn and adapt to your business needs, delivering predictive insights and automated decision-making.",
      stats: { value: "99.7%", label: "Accuracy Rate" },
      status: "Active Learning"
    },
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent conversational agents that provide 24/7 customer support and enhance user engagement across all platforms.",
      stats: { value: "24/7", label: "Availability" },
      status: "Always Online"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Revolutionary image and video analysis solutions for quality control, security, and automated visual inspection.",
      stats: { value: "1M+", label: "Images Processed" },
      status: "Real-time Analysis"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics and visualization tools.",
      stats: { value: "10TB", label: "Data Processed" },
      status: "Processing Data"
    },
    {
      icon: Cpu,
      title: "Neural Networks",
      description: "Deep learning solutions that mimic human cognition to solve complex problems and pattern recognition.",
      stats: { value: "500+", label: "Models Trained" },
      status: "Deep Learning"
    },
    {
      icon: Lightbulb,
      title: "AI Strategy",
      description: "Comprehensive consulting to develop and implement AI strategies that align with your business objectives.",
      stats: { value: "98%", label: "Success Rate" },
      status: "Strategic Planning"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      style={{ y, opacity }}
      className="py-20 bg-black w-full relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-green-400">AI Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations and drive innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-[25rem] w-full flex items-center justify-center"
              >
                <PinContainer title={`Explore ${service.title}`}>
                  <div className="flex flex-col p-6 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] bg-gradient-to-b from-gray-900/80 to-gray-900/20 backdrop-blur-sm border border-green-400/20 rounded-2xl">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-400/30">
                        <Icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                        <div className="text-xs text-green-400">{service.status}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="text-xl font-bold text-white">
                        {service.title}
                      </div>
                      
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Stats */}
                      <div className="bg-green-500/10 rounded-lg p-3 border border-green-400/20">
                        <div className="text-2xl font-bold text-green-400">{service.stats.value}</div>
                        <div className="text-xs text-gray-400">{service.stats.label}</div>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "85%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: index * 0.2 }}
                        />
                        <motion.div
                          className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-green-300/30 to-transparent"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </div>

                      {/* Footer */}
                      <div className="flex justify-between items-end pt-2">
                        <div className="text-xs text-gray-500">
                          Last updated: now
                        </div>
                        <div className="text-green-400 text-sm font-medium">
                          Learn More →
                        </div>
                      </div>
                    </div>
                  </div>
                </PinContainer>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;