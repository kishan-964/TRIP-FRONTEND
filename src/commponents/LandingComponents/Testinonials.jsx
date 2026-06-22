import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Anderson',
      role: 'Adventure Enthusiast',
      content:
        'Wanderlust made my dream trip.',
      rating: 5,
      image: '👩‍🦰',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Traveler',
      content:
        'Best travel platform I have used.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      id: 3,
      name: 'Emma Roberts',
      role: 'Solo Traveler',
      content:
        'The community features helped me connect.',
      rating: 5,
      image: '👩‍🎨',
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Family Vacationer',
      content:
        'Perfect for family trips! book again!',
      rating: 5,
      image: '👨‍👩‍👧‍👦',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const testimonialMarqueeData = [
    ...testimonials,
    ...testimonials,
  ];

  const cardMarqueeVariants = {
    animate: {
      x: [0, -1600],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-card to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by <span className="text-primary">Travelers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real travelers who discovered their perfect
            destinations with Wanderlust.
          </p>
        </motion.div>

        {/* Testimonials Marquee */}
        <div className="overflow-hidden">
          <motion.div
            variants={cardMarqueeVariants}
            animate="animate"
            className="flex gap-6 sm:gap-8 whitespace-nowrap"
          >
            {testimonialMarqueeData.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="group relative flex-shrink-0 w-80 sm:w-96"
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 h-full hover:border-primary/40 transition-all duration-300 cursor-pointer">
                  {/* Quote Icon */}
                  <div className="mb-4 p-2 bg-primary/20 rounded-lg w-fit group-hover:bg-primary/30 transition-colors">
                    <Quote className="text-primary" size={20} />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground mb-6 leading-relaxed text-sm sm:text-base">
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="text-2xl sm:text-3xl">{testimonial.image}</div>
                    <div>
                      <p className="font-semibold text-foreground text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-8 md:p-12"
        >
          {[
            { number: '4.9★', label: 'Avg. Rating' },
            { number: '50K+', label: 'Reviews' },
            { number: '98%', label: 'Recommend' },
            { number: '2M+', label: 'Happy Travelers' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
