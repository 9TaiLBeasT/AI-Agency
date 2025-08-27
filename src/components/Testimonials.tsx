import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionArtisticEnhancements } from './ui/artistic-enhancements';

const Testimonials = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [1600, 2400], [100, 0]);
  const opacity = useTransform(scrollY, [1600, 2000], [0, 1]);

  const testimonials = [
    {
      name: "Alexandra Martinez",
      position: "Creative Director, Bloom Studios",
      content: "RivRang transformed our entire brand identity with their exceptional design vision. The 'Flow of Art' approach brought our creative vision to life in ways we never imagined.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "David Kim",
      position: "Founder, Artisan Collective",
      content: "The website design and digital marketing strategy RivRang created for us increased our client inquiries by 400%. Their creative process is truly inspiring.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sofia Chen",
      position: "Brand Manager, Canvas & Co",
      content: "Working with RivRang was like having a creative partner who understood our vision perfectly. Their UI/UX design elevated our digital presence beyond our expectations.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

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
            What Our <span className="text-rivrang-mint-dark">Clients Say</span>
          </h2>
          <p className="text-xl text-rivrang-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what creative leaders have to say about our design solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-rivrang-mint/30 hover:border-rivrang-sky/50 transition-all duration-300 group relative shadow-sm"
            >
              <div className="absolute top-4 right-4 text-rivrang-lavender/30 group-hover:text-rivrang-lavender/50 transition-colors duration-300">
                <Quote size={40} />
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-rivrang-text-primary font-semibold">{testimonial.name}</h4>
                  <p className="text-rivrang-text-secondary text-sm">{testimonial.position}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-rivrang-blush-warm fill-current" />
                ))}
              </div>

              <p className="text-rivrang-text-secondary leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;