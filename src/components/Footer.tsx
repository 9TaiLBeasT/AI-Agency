import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [2400, 3200], [100, 0]);
  const opacity = useTransform(scrollY, [2400, 2800], [0, 1]);

  return (
    <motion.footer 
      style={{ y, opacity }}
      className="bg-black border-t border-gray-800 w-full relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold text-white">AI<span className="text-green-400">Neural</span></span>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              Leading the AI revolution with cutting-edge solutions that transform businesses and drive innovation across industries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">Machine Learning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">AI Chatbots</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">Computer Vision</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">Data Analytics</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 AI Neural. All rights reserved. Powered by the future of artificial intelligence.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;