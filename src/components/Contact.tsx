import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, Send, Palette, Briefcase, Users, CheckCircle, AlertCircle } from 'lucide-react';
import { GradientButton } from './ui/gradient-button';
import { SectionArtisticEnhancements } from './ui/artistic-enhancements';
import { submitToGoogleSheets } from '../utils/google-sheets-api';

const Contact = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [2000, 2800], [100, 0]);
  const opacity = useTransform(scrollY, [2000, 2400], [0, 1]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    projectType: '',
    message: '',
    consultation: false
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: null as string | null
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rivrang.agency@gmail.com",
      href: "mailto:rivrang.agency@gmail.com"
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
    { value: 'video-editing', label: 'Video Editing', icon: Palette },
    { value: 'graphic-design', label: 'Graphic Design', icon: Briefcase },
    { value: 'web-design', label: 'Web Design & Development', icon: Users },
    { value: 'social-media', label: 'Social Media & Presentations', icon: Palette },
    { value: 'other', label: 'Other Services', icon: Palette }
  ];

  const businessTypes = [
    'Restaurant',
    'Cafe',
    'Retail Store',
    'Small Business',
    'Startup',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set submitting state
    setFormStatus({
      ...formStatus,
      submitting: true,
      error: null
    });
    
    try {
      console.log('Submitting form data:', formData);
      
      // Submit form data to Google Sheets
      const response = await submitToGoogleSheets(formData);
      
      console.log('Form submitted successfully:', response);
      
      // Handle successful submission
      setFormStatus({
        submitting: false,
        submitted: true,
        success: true,
        error: null
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        projectType: '',
        message: '',
        consultation: false
      });
    } catch (error) {
      // Handle submission error
      console.error('Form submission error:', error);
      
      let errorMessage = 'An unknown error occurred';
      
      if (error instanceof Error) {
        errorMessage = error.message;
        
        // Check for specific error patterns
        if (error.message.includes('500')) {
          errorMessage = 'Server error: The form submission service is currently unavailable. Please try again later or contact us directly.';
        } else if (error.message.includes('CORS')) {
          errorMessage = 'Cross-origin request blocked: Please try again or contact us directly via email.';
        } else if (error.message.includes('network')) {
          errorMessage = 'Network error: Please check your internet connection and try again.';
        }
      }
      
      setFormStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: errorMessage
      });
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
          <h2 className="text-4xl md:text-5xl font-bold text-rivrang-text-primary mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Let's Create Your <span className="bg-gradient-to-r from-rivrang-mint-dark via-rivrang-sky-dark to-rivrang-blush-warm bg-clip-text text-transparent">Flow of Art</span>
          </h2>
          <p className="text-xl text-rivrang-text-secondary max-w-3xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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
              <h3 className="text-2xl font-semibold text-rivrang-text-primary mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Contact Information</h3>
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
              <h4 className="text-xl font-semibold text-rivrang-text-primary mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Why Choose Us</h4>
              <ul className="space-y-3 text-rivrang-text-secondary">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rivrang-mint-dark rounded-full"></div>
                  <span>Quick turnaround times for busy business owners</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rivrang-sky-dark rounded-full"></div>
                  <span>Affordable packages designed for small businesses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rivrang-blush-warm rounded-full"></div>
                  <span>Simple process with minimal time commitment from you</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rivrang-lavender rounded-full"></div>
                  <span>Local support with fast response times</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rivrang-sky-dark rounded-full"></div>
                  <span>Special offers for first-time clients</span>
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
                <h3 className="text-xl font-semibold text-rivrang-text-primary mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Quick Contact Form</h3>
                <p className="text-rivrang-text-secondary text-sm mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Tell us about your business and what you need help with. We'll get back to you within 24 hours!</p>
                <div className="bg-rivrang-mint/10 border border-rivrang-mint/20 rounded-lg p-3">
                  <p className="text-rivrang-mint-dark text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    💡 <strong>Tip:</strong> Just fill in the basics and we'll call you to discuss the details. No complicated forms!
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div>
                  <label className="block text-rivrang-text-secondary text-sm font-medium mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary placeholder-rivrang-text-muted focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-rivrang-text-secondary text-sm font-medium mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary placeholder-rivrang-text-muted focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-rivrang-text-secondary text-sm font-medium mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary placeholder-rivrang-text-muted focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-rivrang-text-secondary text-sm font-medium mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300"
                  >
                    <option value="" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Select your business type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-rivrang-text-secondary text-sm font-medium mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Service Needed *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300"
                  >
                    <option value="" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Select service needed</option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-rivrang-text-secondary text-sm font-medium mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Tell us what you need *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-rivrang-cream border border-rivrang-mint/30 rounded-lg text-rivrang-text-primary placeholder-rivrang-text-muted focus:outline-none focus:border-rivrang-mint-dark transition-colors duration-300 resize-none"
                  placeholder="Briefly describe what you need help with. Don't worry about details - we'll call you to discuss everything!"
                ></textarea>
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
                  <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>I'd like to schedule a free consultation call</span>
                </label>
                <label className="flex items-center space-x-2 text-rivrang-text-secondary text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 text-rivrang-mint-dark bg-rivrang-cream border-rivrang-mint/30 rounded focus:ring-rivrang-mint-dark focus:ring-2"
                  />
                  <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>I agree to RivRang's privacy policy *</span>
                </label>
              </div>

              <div className="space-y-4">
                {formStatus.submitted && formStatus.success && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-800">Thank you for contacting us!</h4>
                      <p className="text-green-700 text-sm">Your message has been received. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}
                
                {formStatus.submitted && !formStatus.success && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-red-800">There was a problem</h4>
                      <p className="text-red-700 text-sm">{formStatus.error || 'Please try again or contact us directly.'}</p>
                    </div>
                  </div>
                )}
                
                <GradientButton 
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Get in Touch</span>
                    </>
                  )}
                </GradientButton>
                
                <p className="text-center text-rivrang-text-muted text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  We'll call you within 24 hours to discuss your needs
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