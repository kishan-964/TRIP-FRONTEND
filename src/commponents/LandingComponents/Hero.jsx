import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-background via-background to-card pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 w-fit">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Explore World Destinations
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Your Journey
                </span>
                <br />
                <span>Awaits</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Discover breathtaking destinations, hidden gems, and unforgettable
              experiences. Start your adventure today and create memories that
              last a lifetime.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                to="/register"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group"
              >
                Explore Now
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/login"
                  className="px-6 py-4 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold text-center"
                >
                  Login
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8"
            >
              {[
                { number: '500+', label: 'Destinations' },
                { number: '50K+', label: 'Travelers' },
                { number: '98%', label: 'Satisfaction' },
              ].map((stat, i) => (
                <div key={i} className="border-l border-primary/30 pl-4">
                  <p className="text-2xl font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image with Bento Grid */}
          <motion.div
            variants={imageVariants}
            className="grid grid-cols-2 gap-4 h-fit"
          >
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="col-span-2 rounded-2xl overflow-hidden border border-primary/20"
            >
              <img
                src="/hero-mountains.png"
                alt="Mountain landscape"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Small Cards */}
            {[
              { title: 'Bali Beach', rating: '★★★★★', img: '/gallery-2.png' },
              { title: 'Thai Temple', rating: '★★★★★', img: '/gallery-1.png' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                className="rounded-xl overflow-hidden border border-primary/20 cursor-pointer group"
              >
                <div className="relative h-40 bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div>
                      <p className="font-semibold text-white">{card.title}</p>
                      <p className="text-xs text-yellow-300">{card.rating}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
}
