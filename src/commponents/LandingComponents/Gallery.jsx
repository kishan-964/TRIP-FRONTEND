import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Thai Temple',
      location: 'Thailand',
      rating: 4.9,
      reviews: 2341,
      image: '/gallery-1.png',
      price: '$1,299',
    },
    {
      id: 2,
      title: 'Bali Beach',
      location: 'Indonesia',
      rating: 4.8,
      reviews: 1987,
      image: '/gallery-2.png',
      price: '$899',
    },
    {
      id: 3,
      title: 'Kerala Backwaters',
      location: 'India',
      rating: 4.7,
      reviews: 1654,
      image: '/gallery-3.png',
      price: '$699',
    },
    {
      id: 4,
      title: 'Eiffel Tower',
      location: 'France',
      rating: 4.9,
      reviews: 3012,
      image: '/gallery-4.png',
      price: '$1,599',
    },
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const marqueeItems = [
    'Bangkok',
    'Bali',
    'Paris',
    'Tokyo',
    'Sydney',
    'Dubai',
    'Rome',
    'Barcelona',
    'Amsterdam',
    'Bangkok',
    'Bali',
    'Paris',
    'Tokyo',
    'Sydney',
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1500],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-background to-card"
    >
      {/* Marquee Section */}
      <div className="mb-20 overflow-hidden">
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-8">
          <motion.div
            variants={marqueeVariants}
            animate="animate"
            className="flex gap-12 whitespace-nowrap"
          >
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full hover:border-primary/60 transition-all duration-300"
              >
                <MapPin className="text-primary flex-shrink-0" size={20} />
                <span className="text-lg font-semibold text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Stunning <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated experiences from around the world. Choose your next adventure.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/10 h-64 sm:h-80">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  {/* Top Info */}
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">
                      {item.price}
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200 mb-4">
                      {item.location}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < Math.floor(item.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-300">
                        {item.rating} ({item.reviews})
                      </span>
                    </div>

                    {/* Button */}
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Static Info - visible without hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-4 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold">
            Explore All Destinations
          </button>
        </motion.div>
      </div>
    </section>
  );
}
