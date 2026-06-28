import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Users, Globe, TrendingUp, ArrowRight, MapPin, Award, Heart } from 'lucide-react';

export default function Connection() {
  const [hoveredPartner, setHoveredPartner] = useState(null);

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
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const partners = [
    {
      id: 1,
      name: 'Global Hotels',
      description: '5-star accommodations worldwide',
      icon: MapPin,
      stat: '500+',
      color: 'from-primary/20 to-cyan-500/20',
      borderColor: 'border-primary/30',
    },
    {
      id: 2,
      name: 'Travel Guides',
      description: 'Expert local experiences',
      icon: Award,
      stat: '1000+',
      color: 'from-accent/20 to-blue-500/20',
      borderColor: 'border-accent/30',
    },
    {
      id: 3,
      name: 'Transport Partners',
      description: 'Seamless transportation',
      icon: Globe,
      stat: '50+',
      color: 'from-secondary/20 to-teal-500/20',
      borderColor: 'border-secondary/30',
    },
    {
      id: 4,
      name: 'Local Communities',
      description: 'Authentic connections',
      icon: Heart,
      stat: '200+',
      color: 'from-rose-500/20 to-pink-500/20',
      borderColor: 'border-rose-500/30',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Real-time availability and instant confirmations for all your travel needs',
    },
    {
      icon: Users,
      title: 'Local Guides',
      description: 'Connect with experienced local guides for authentic travel experiences',
    },
    {
      icon: TrendingUp,
      title: 'Exclusive Deals',
      description: 'Access special rates and packages available only to our members',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Over 50 countries with verified partners and local support',
    },
  ];

  const collaborationSteps = [
    {
      number: '01',
      title: 'Register',
      description: 'Sign up as a traveler and build your profile',
    },
    {
      number: '02',
      title: 'Connect',
      description: 'Browse and connect with local guides and partners',
    },
    {
      number: '03',
      title: 'Experience',
      description: 'Enjoy authentic travel experiences curated just for you',
    },
    {
      number: '04',
      title: 'Share',
      description: 'Share your journey and help others discover new destinations',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold">
              Our Network
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Connected Travel
            </span>
            <br className="hidden sm:block" />
            <span>Experiences</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2"
          >
            Join our global network of travelers, guides, and partners. Connect with authentic experiences and build meaningful relationships around the world.
          </motion.p>
        </motion.div>

        {/* Partner Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 md:mb-24"
        >
          {partners.map((partner) => {
            const IconComponent = partner.icon;
            return (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredPartner(partner.id)}
                onMouseLeave={() => setHoveredPartner(null)}
                className="group relative"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${partner.color} border ${partner.borderColor} p-6 sm:p-8 h-full transition-all duration-300 hover:border-primary/50 cursor-pointer`}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 sm:p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                      </div>
                      <span className="text-2xl sm:text-3xl font-bold text-primary opacity-50 group-hover:opacity-100 transition-opacity">
                        {partner.stat}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                      {partner.description}
                    </p>

                    <div className="flex items-center text-primary font-semibold text-sm sm:text-base group-hover:translate-x-1 transition-transform">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center"
          >
            Why Connect With Us?
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    <div className="relative z-10">
                      <div className="p-3 sm:p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                        <BenefitIcon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                        {benefit.title}
                      </h4>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Collaboration Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-12 sm:mb-16 text-center"
          >
            How It Works
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {collaborationSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Connecting line */}
                {index < collaborationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                )}

                <div className="relative z-10 text-center">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                    <span className="text-3xl sm:text-4xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                    {step.title}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Ready to connect with the world's travel community?
          </p>
          <Link
            to="/register"
            className="group relative inline-flex px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-full font-bold text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-sm sm:text-base overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
            <span className="relative flex items-center justify-center gap-2">
              Start Connecting
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
