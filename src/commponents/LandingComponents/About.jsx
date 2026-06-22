import { motion } from 'framer-motion';
import {
  Globe,
  Heart,
  Users,
  Zap,
  Award,
  TrendingUp,
} from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const features = [
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Explore destinations across all continents with expert guides.',
    },
    {
      icon: Heart,
      title: 'Authentic Experiences',
      description: 'Connect with local cultures and create meaningful memories.',
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Join thousands of travelers sharing their stories.',
    },
    {
      icon: Zap,
      title: 'Easy Planning',
      description: 'Hassle-free booking and itinerary planning tools.',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in travel experiences.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Personal growth through cultural immersion.',
    },
  ];

  return (
    <section
      id="aboutus"
      aria-label="About Wanderlust"
      className="py-20 bg-gradient-to-b from-background to-card"
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
            About <span className="text-primary">Chalti-Trip</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe travel transforms lives. Our mission is to make
            exploration accessible, affordable, and unforgettable for everyone.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-card/50 border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Wanderlust?
              </h3>
              <ul className="space-y-4">
                {[
                  'Personalized travel recommendations',
                  'Exclusive deals with partners worldwide',
                  '24/7 travel support and assistance',
                  'Secure payments and insurance',
                  'Community of like-minded explorers',
                  'Sustainability and responsible tourism',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/20">
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold text-primary">2M+</p>
                  <p className="text-muted-foreground">Happy Travelers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">150+</p>
                  <p className="text-muted-foreground">Countries Covered</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">15+</p>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
