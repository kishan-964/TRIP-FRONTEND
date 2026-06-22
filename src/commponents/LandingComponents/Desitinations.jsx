import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, DollarSign, Star, Filter, SortAsc } from 'lucide-react';

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [filterOpen, setFilterOpen] = useState(false);

  const destinations = [
    { id: 1, name: 'Bali, Indonesia', region: 'asia', price: 800, rating: 4.9, image: '/gallery-2.png', description: 'Tropical paradise with pristine beaches' },
    { id: 2, name: 'Tokyo, Japan', region: 'asia', price: 1200, rating: 4.8, image: '/gallery-1.png', description: 'Modern culture meets ancient traditions' },
    { id: 3, name: 'Paris, France', region: 'europe', price: 1500, rating: 4.9, image: '/gallery-4.png', description: 'City of love and iconic landmarks' },
    { id: 4, name: 'Bali Temples', region: 'asia', price: 600, rating: 4.7, image: '/gallery-1.png', description: 'Sacred Hindu temples in lush jungle' },
    { id: 5, name: 'Greece Islands', region: 'europe', price: 1100, rating: 4.8, image: '/gallery-2.png', description: 'Stunning islands with blue waters' },
    { id: 6, name: 'Dubai', region: 'middle-east', price: 1400, rating: 4.6, image: '/hero-mountains.png', description: 'Luxury desert oasis with modern architecture' },
    { id: 7, name: 'New York', region: 'americas', price: 1300, rating: 4.7, image: '/gallery-3.png', description: 'The city that never sleeps' },
    { id: 8, name: 'Machu Picchu, Peru', region: 'americas', price: 950, rating: 4.9, image: '/gallery-1.png', description: 'Ancient Incan wonder in the mountains' },
    { id: 9, name: 'Maldives', region: 'asia', price: 1600, rating: 4.9, image: '/gallery-2.png', description: 'Overwater bungalows and coral reefs' },
    { id: 10, name: 'Iceland', region: 'europe', price: 1350, rating: 4.8, image: '/hero-mountains.png', description: 'Land of fire, ice, and northern lights' },
    { id: 11, name: 'Thailand', region: 'asia', price: 700, rating: 4.7, image: '/gallery-4.png', description: 'Thai temples and vibrant markets' },
    { id: 12, name: 'Rome, Italy', region: 'europe', price: 1000, rating: 4.8, image: '/gallery-3.png', description: 'Ancient history and Renaissance art' },
    { id: 13, name: 'Bangkok', region: 'asia', price: 650, rating: 4.6, image: '/gallery-1.png', description: 'Bustling city with street food and temples' },
    { id: 14, name: 'Santorini', region: 'europe', price: 1250, rating: 4.9, image: '/gallery-2.png', description: 'White-washed buildings overlooking the sea' },
    { id: 15, name: 'Cairo, Egypt', region: 'africa', price: 850, rating: 4.7, image: '/hero-mountains.png', description: 'Pyramids and ancient Egyptian wonders' },
    { id: 16, name: 'Barcelona', region: 'europe', price: 1100, rating: 4.8, image: '/gallery-4.png', description: 'Gaudí architecture and vibrant culture' },
    { id: 17, name: 'Singapore', region: 'asia', price: 1150, rating: 4.7, image: '/gallery-3.png', description: 'Garden city with futuristic skyline' },
    { id: 18, name: 'Istanbul', region: 'middle-east', price: 900, rating: 4.6, image: '/gallery-1.png', description: 'Where East meets West' },
    { id: 19, name: 'Marrakech, Morocco', region: 'africa', price: 750, rating: 4.7, image: '/gallery-2.png', description: 'Exotic markets and desert adventures' },
    { id: 20, name: 'Amsterdam', region: 'europe', price: 1050, rating: 4.8, image: '/hero-mountains.png', description: 'Canals, museums, and cycling culture' },
    { id: 21, name: 'Bali Rice Terraces', region: 'asia', price: 500, rating: 4.8, image: '/gallery-4.png', description: 'Lush green rice paddies' },
    { id: 22, name: 'London', region: 'europe', price: 1200, rating: 4.7, image: '/gallery-3.png', description: 'Historic landmarks and modern culture' },
    { id: 23, name: 'Capetown, South Africa', region: 'africa', price: 1000, rating: 4.8, image: '/gallery-1.png', description: 'Mountains, beaches, and vibrant culture' },
    { id: 24, name: 'Vietnam', region: 'asia', price: 650, rating: 4.7, image: '/gallery-2.png', description: 'Ha Long Bay and ancient temples' },
    { id: 25, name: 'Mexico City', region: 'americas', price: 900, rating: 4.6, image: '/hero-mountains.png', description: 'Ancient ruins and colonial architecture' },
    { id: 26, name: 'Bora Bora', region: 'pacific', price: 1800, rating: 4.9, image: '/gallery-4.png', description: 'Lagoons and overwater resorts' },
    { id: 27, name: 'Kyoto, Japan', region: 'asia', price: 1100, rating: 4.9, image: '/gallery-3.png', description: 'Temples and traditional geisha culture' },
    { id: 28, name: 'Vienna, Austria', region: 'europe', price: 1050, rating: 4.7, image: '/gallery-1.png', description: 'Imperial palaces and classical music' },
    { id: 29, name: 'Fiji', region: 'pacific', price: 1400, rating: 4.8, image: '/gallery-2.png', description: 'Tropical islands and coral reefs' },
    { id: 30, name: 'India (Taj Mahal)', region: 'asia', price: 800, rating: 4.8, image: '/hero-mountains.png', description: 'Monument to love and Ayurveda' },
    { id: 31, name: 'Portugal (Lisbon)', region: 'europe', price: 850, rating: 4.7, image: '/gallery-4.png', description: 'Tiles, wine, and Atlantic coastline' },
    { id: 32, name: 'Sri Lanka', region: 'asia', price: 700, rating: 4.7, image: '/gallery-3.png', description: 'Tea plantations and ancient temples' },
  ];

  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'americas', label: 'Americas' },
    { value: 'africa', label: 'Africa' },
    { value: 'middle-east', label: 'Middle East' },
    { value: 'pacific', label: 'Pacific' },
  ];

  const filteredDestinations = useMemo(() => {
    let result = destinations.filter(dest => {
      const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion === 'all' || dest.region === selectedRegion;
      const matchesPrice = 
        priceRange === 'all' ||
        (priceRange === 'budget' && dest.price < 800) ||
        (priceRange === 'mid' && dest.price >= 800 && dest.price < 1200) ||
        (priceRange === 'luxury' && dest.price >= 1200);

      return matchesSearch && matchesRegion && matchesPrice;
    });

    // Sort
    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [searchTerm, selectedRegion, priceRange, sortBy]);

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="destinations" className="py-20 bg-[#04070a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Popular <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover 32+ handpicked destinations across the globe. Filter by region, price, or search your dream vacation spot.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 md:space-y-0 md:flex md:gap-4 mb-12"
        >
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-3.5 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden w-full px-4 py-3 bg-card border border-primary/30 rounded-lg text-foreground flex items-center justify-center gap-2 hover:border-primary transition-colors"
          >
            <Filter size={20} />
            Filters
          </button>

          {/* Desktop Sort */}
          <div className="hidden md:flex gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-card border border-primary/30 rounded-lg text-foreground cursor-pointer hover:border-primary transition-colors"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </motion.div>

        {/* Mobile Filters Panel */}
        {filterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-8 p-4 bg-card border border-primary/30 rounded-lg space-y-4"
          >
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Region</label>
              <div className="grid grid-cols-2 gap-2">
                {regions.map(region => (
                  <button
                    key={region.value}
                    onClick={() => setSelectedRegion(region.value)}
                    className={`px-3 py-2 rounded-lg text-sm transition-all ${
                      selectedRegion === region.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-primary/20'
                    }`}
                  >
                    {region.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Price Range</label>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: 'budget', label: 'Budget (< $800)' },
                  { value: 'mid', label: 'Mid-Range ($800-$1200)' },
                  { value: 'luxury', label: 'Luxury ($1200+)' },
                ].map(price => (
                  <button
                    key={price.value}
                    onClick={() => setPriceRange(price.value)}
                    className={`w-full px-3 py-2 rounded-lg text-sm transition-all text-left ${
                      priceRange === price.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-primary/20'
                    }`}
                  >
                    {price.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 bg-muted border border-primary/30 rounded-lg text-foreground cursor-pointer"
              >
                <option value="rating">Rating</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </motion.div>
        )}

        {/* Desktop Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:grid md:grid-cols-3 gap-4 mb-12"
        >
          {/* Region Filter */}
          <div className="bg-card border border-primary/30 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              Region
            </h3>
            <div className="space-y-2">
              {regions.map(region => (
                <button
                  key={region.value}
                  onClick={() => setSelectedRegion(region.value)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                    selectedRegion === region.value
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-primary/20'
                  }`}
                >
                  {region.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="bg-card border border-primary/30 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <DollarSign size={16} className="text-primary" />
              Price Range
            </h3>
            <div className="space-y-2">
              {[
                { value: 'all', label: 'All Prices' },
                { value: 'budget', label: 'Budget (< $800)' },
                { value: 'mid', label: 'Mid-Range ($800-$1200)' },
                { value: 'luxury', label: 'Luxury ($1200+)' },
              ].map(price => (
                <button
                  key={price.value}
                  onClick={() => setPriceRange(price.value)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                    priceRange === price.value
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-primary/20'
                  }`}
                >
                  {price.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Filter */}
          <div className="bg-card border border-primary/30 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <SortAsc size={16} className="text-primary" />
              Sort By
            </h3>
            <div className="space-y-2">
              {[
                { value: 'rating', label: 'Rating (High to Low)' },
                { value: 'price-low', label: 'Price (Low to High)' },
                { value: 'price-high', label: 'Price (High to Low)' },
              ].map(sort => (
                <button
                  key={sort.value}
                  onClick={() => setSortBy(sort.value)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                    sortBy === sort.value
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-primary/20'
                  }`}
                >
                  {sort.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-muted-foreground mb-8"
        >
          Showing {filteredDestinations.length} of {destinations.length} destinations
        </motion.p>

        {/* Destinations Grid - Responsive Bento Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer 
                  ${i === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}
                  ${i === 1 ? 'sm:col-span-2 lg:col-span-2' : ''}
                `}
              >
                {/* Image */}
                <div className={`relative bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden
                  ${i === 0 ? 'h-64 sm:h-80 lg:h-96' : i === 1 ? 'h-48 sm:h-56 lg:h-64' : 'h-48'}
                `}>
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white font-semibold text-sm">{dest.description}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-white font-bold text-lg group-hover:text-primary transition-colors">
                    {dest.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-sm">{dest.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <DollarSign size={16} />
                      <span className="text-white font-semibold">{dest.price}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-muted-foreground text-lg">No destinations found. Try adjusting your filters.</p>
            </div>
          )}
        </motion.div>

        {/* Load More Button */}
        {filteredDestinations.length > 0 && filteredDestinations.length < destinations.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 font-semibold">
              Load More Destinations
            </button>
          </motion.div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
}
