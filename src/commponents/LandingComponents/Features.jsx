import { motion } from 'framer-motion';
import {
  Smartphone,
  MapPin,
  Clock,
  DollarSign,
  Shield,
  HeadsetIcon,
} from 'lucide-react';

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const features = [
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Book and manage trips on the go with our intuitive app.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      title: 'Smart Maps',
      description: 'Interactive maps with curated destinations and attractions.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Get instant notifications about flights, weather, and deals.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: DollarSign,
      title: 'Best Price Guarantee',
      description: 'We match any price - guaranteed lowest deals.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive coverage for peace of mind.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: HeadsetIcon,
      title: '24/7 Support',
      description: 'Expert support team always ready to help.',
      color: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <section
      id="features"
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
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for an amazing travel experience at your
            fingertips.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={featureVariants}
                className="group relative overflow-hidden rounded-2xl bg-card border border-primary/10 p-8 hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`mb-4 p-3 bg-gradient-to-br ${feature.color} rounded-lg w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-all duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the best travel platform?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 font-semibold">
            Get Started for Free
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-40 left-20 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
}
