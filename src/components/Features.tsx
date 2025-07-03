import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FeaturesSectionWithBentoGrid } from './ui/feature-section-with-bento-grid';

const Features = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [800, 1600], [100, 0]);
  const opacity = useTransform(scrollY, [800, 1200], [0, 1]);

  return (
    <motion.div 
      style={{ y, opacity }}
      className="py-20 bg-black w-full relative"
    >
      <FeaturesSectionWithBentoGrid />
    </motion.div>
  );
};

export default Features;