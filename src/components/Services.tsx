import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Code, Megaphone, Camera } from 'lucide-react';
import { PinContainer } from './ui/3d-pin';
import { SectionArtisticEnhancements } from './ui/artistic-enhancements';

const Services = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [200, 800], [50, 0]);
  const opacity = useTransform(scrollY, [200, 600], [0, 1]);


  const services = [
    {
      icon: Camera,
      title: "Video Editing",
      description: "Professional video editing services for all your content needs. From social media reels to corporate presentations, we bring your vision to life with cinematic quality and creative storytelling.",
      status: "Video Production"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative graphic design solutions for all your branding and marketing needs. Professional designs that make an impact and communicate your brand's unique story through visual excellence.",
      status: "Creative Design"
    },
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Modern, responsive websites that drive results. From landing pages to full business websites, we create digital experiences that engage users and convert visitors into customers.",
      status: "Web Solutions"
    },
    {
      icon: Megaphone,
      title: "Social Media & Presentations",
      description: "Engaging social media content and professional presentations that captivate your audience. We create compelling visual narratives that boost engagement and drive business growth.",
      status: "Content Creation"
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
      className="py-20 bg-rivrang-cream w-full relative"
    >
      {/* Artistic enhancements for this section */}
      <SectionArtisticEnhancements />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-rivrang-text-primary mb-4">
            Our Services
          </h2>
          
          <p className="text-xl text-rivrang-text-secondary max-w-3xl mx-auto">
            Comprehensive digital solutions crafted with creativity and precision. We transform your ideas into exceptional digital experiences that captivate and convert.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
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
                className="h-[24rem] w-full flex items-center justify-center"
              >
                <PinContainer title={service.title}>
                  <div className="flex flex-col p-6 tracking-tight text-rivrang-text-secondary w-[22rem] h-[20rem] bg-gradient-to-b from-white/95 to-rivrang-mint-light/20 backdrop-blur-sm border border-rivrang-mint/30 rounded-2xl shadow-sm relative overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-rivrang-mint/20 rounded-lg flex items-center justify-center border border-rivrang-mint/30">
                        <Icon className="w-6 h-6 text-rivrang-mint-dark" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-sm bg-rivrang-mint-dark animate-pulse" />
                        <div className="text-xs text-rivrang-mint-dark">{service.status}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="text-xl font-bold text-rivrang-text-primary">
                        {service.title}
                      </div>
                      
                      <p className="text-sm text-rivrang-text-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center pt-4 border-t border-rivrang-mint/20">
                      <div className="text-xs text-rivrang-text-muted">
                        Professional Service
                      </div>
                      <div className="text-rivrang-blush-warm text-sm font-medium">
                        Learn More →
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