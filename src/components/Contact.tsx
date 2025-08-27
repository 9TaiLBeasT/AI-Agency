import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Palette, Briefcase, Users } from 'lucide-react';
import { GradientButton } from './ui/gradient-button';
import { SectionArtisticEnhancements } from './ui/artistic-enhancements';

const Contact = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [2000, 2800], [100, 0]);
  const opacity = useTransform(scrollY, [2000, 2400], [0, 1]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    creativeBrief: '',
    consultation: false,
    referralSource: '',
    urgency: 'normal'
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gtsganesh2005@gmail.com",
      href: "mailto:gtsganesh2005@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8639050061, +91-7893985181",
      href: "tel:+918639050061"
    },
    {
      icon: Phone,
      label: "Whatsapp",
      value: "+91-7842329947",
      href: "https://wa.me/917842329947"
    }
  ];

  const projectTypes = [
    { value: 'brand-identity', label: 'Brand Identity Design', icon: Palette },
    { value: 'web-design', label: 'Web Design & Development', icon: Briefcase },
    { value: 'digital-marketing', label: 'Digital Marketing Campaign', icon: Users },
    { value: 'ui-ux', label: 'UI/UX Design', icon: Palette },
    { value: 'creative-content', label: 'Creative Content Production', icon: Briefcase },
    { value: 'strategy', label: 'Creative Strategy & Consulting', icon: Users },
    { value: 'rebranding', label: 'Complete Brand Redesign', icon: Palette },
    { value: 'ecommerce', label: 'E-commerce Design & Development', icon: Briefcase },
    { value: 'mobile-app', label: 'Mobile App Design', icon: Palette },
    { value: 'other', label: 'Other Creative Services', icon: Palette }
  ];

  const referralSources = [
    'Google Search',
    'Social Media',
    'Referral from Client',
    'Industry Publication',
    'Conference/Event',
    'Partner Agency',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend
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
            Let's Create Your <span className="bg-gradient-to-r from-rivrang-mint-dark via-rivrang-sky-dark to-rivrang-blush-warm bg-clip-text text-transparent">Flow of Art</span>
          </h2>
          <p className="text-xl text-rivrang-text-secondary max-w-3xl mx-auto">
            Ready to transform your brand vision into reality? Share your creative brief with us and let's craft something extraordinary that flows with your unique story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-rivrang-text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-rivrang-mint/20 rounded-lg flex items-center justify-center group-hover:bg-rivrang-mint/30 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-rivrang-mint-dark" />
                      </div>
                      <div>
                        <p className="text-rivrang-text-muted text-sm">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-rivrang-text-primary hover:text-rivrang-mint-dark transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-rivrang-mint/30 shadow-sm">
              <h4 className="text-xl font-semibold text-rivrang-text-primary mb-4">Your Creative Project Journey</h4>
              <ul className="space-y-3 text-rivrang-text-secondary">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rivrang-mint-dark rounded-full"></div>
                  <span>Free creative consultation and project discovery session</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rivrang-sky-dark rounded-full"></div>
                  <span>Custom creative brief development and strategy planning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rivrang-blush-warm rounded-full"></div>
                  <span>Collaborative design process with regular feedback loops</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rivrang-lavender rounded-full"></div>
                  <span>Dedicated project manager and creative team assignment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rivrang-sky-dark rounded-full"></div>
                  <span>24-hour response time for all project inquiries</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-rivrang-mint/30 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-rivrang-text-primary mb-4">Creative Project Inquiry</h3>
                <p className="text-rivrang-text-secondary text-sm mb-3">Tell us about your vision and we'll craft a personalized creative strategy to bring it to life.</p>
                <div className="bg-rivrang-mint/10 border border-rivrang-mint/20 rounded-lg p-3">
                  <p className="text-rivrang-mint-dark text-xs">
                    💡 <strong>Pro Tip:</strong> The more details you share about your brand, goals, and style preferences, the better we can tailor our creative approach to your unique needs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-rivrang-text-secondary text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary placeholder-rivrang-text-muted focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-rivrang-text-secondary text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary placeholder-rivrang-text-muted focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-rivrang-text-secondary text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary placeholder-rivrang-text-muted focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-rivrang-text-secondary text-sm font-medium mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary placeholder-rivrang-text-muted focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-rivrang-text-secondary text-sm font-medium mb-2">
                  Project Type *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300"
                >
                  <option value="">Select your project type</option>
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-rivrang-text-secondary text-sm font-medium mb-2">
                  Project Budget Range
                </label>
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-30k">$15,000 - $30,000</option>
                  <option value="30k-50k">$30,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                  <option value="discuss">Let's discuss</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-rivrang-text-secondary text-sm font-medium mb-2">
                  Project Timeline
                </label>
                <select 
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300"
                >
                  <option value="">When do you need this completed?</option>
                  <option value="asap">ASAP (Rush project)</option>
                  <option value="1-2months">1-2 months</option>
                  <option value="3-4months">3-4 months</option>
                  <option value="6months+">6+ months</option>
                  <option value="flexible">Flexible timeline</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-rivrang-text-secondary text-sm font-medium mb-2">
                  Creative Brief *
                </label>
                <textarea
                  name="creativeBrief"
                  value={formData.creativeBrief}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary placeholder-rivrang-text-muted focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300 resize-none"
                  placeholder="Describe your vision, goals, target audience, style preferences, and any specific requirements. The more details you share, the better we can understand your creative needs..."
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-rivrang-text-secondary text-sm font-medium mb-2">
                  How did you hear about RivRang?
                </label>
                <select 
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300"
                >
                  <option value="">Select source</option>
                  {referralSources.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-rivrang-text-secondary text-sm font-medium mb-2">
                  Project Priority
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['normal', 'urgent', 'flexible'].map((priority) => (
                    <label key={priority} className="flex items-center space-x-2 text-rivrang-text-secondary text-sm cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value={priority}
                        checked={formData.urgency === priority}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-rivrang-mint-dark bg-rivrang-cream border-rivrang-mint/30 focus:ring-rivrang-mint-dark focus:ring-2"
                      />
                      <span className="capitalize">{priority}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6 space-y-3">
                <label className="flex items-center space-x-2 text-rivrang-text-secondary text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="consultation"
                    checked={formData.consultation}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-rivrang-mint-dark bg-rivrang-cream border-rivrang-mint/30 rounded focus:ring-rivrang-mint-dark focus:ring-2"
                  />
                  <span>I'd like to schedule a free creative consultation call</span>
                </label>
                <label className="flex items-center space-x-2 text-rivrang-text-secondary text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 text-rivrang-mint-dark bg-rivrang-cream border-rivrang-mint/30 rounded focus:ring-rivrang-mint-dark focus:ring-2"
                  />
                  <span>I agree to RivRang's privacy policy and terms of service *</span>
                </label>
              </div>

              <div className="space-y-4">
                <GradientButton 
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Launch My Creative Vision</span>
                </GradientButton>
                
                <p className="text-center text-rivrang-text-muted text-sm">
                  We'll respond within 24 hours with a personalized creative proposal
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;