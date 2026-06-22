import { motion } from 'framer-motion';
import { Menu, X, LogIn } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', to: '#home' },
    { label: 'Destinations', to: '#destinations' },
    { label: 'About Us', to: '#aboutus' },
    { label: 'Features', to: '#features' },
    { label: 'Gallery', to: '#gallery' },
    { label: 'Contact', to: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 w-full bg-white/10 dark:bg-slate-900/40 border border-white/10 dark:border-white/10 backdrop-blur-3xl shadow-xl shadow-slate-900/10 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">✈</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Chalti-Trip
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.label}
                custom={i}
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                href={item.to}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop Menu Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
              aria-label="Login"
            >
              <LogIn size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-white/10 bg-white/10 dark:bg-slate-900/40 backdrop-blur-3xl"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.to}
                className="block py-2 text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/login"
              className="flex h-11 w-full items-center justify-center gap-2 px-6 py-2 text-center text-foreground border border-primary/30 rounded-lg hover:bg-primary/10 transition-all duration-300"
              aria-label="Login"
            >
              <LogIn size={18} />
              <span>Login</span>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
