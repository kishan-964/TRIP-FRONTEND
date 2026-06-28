import { motion } from 'framer-motion';
import { Share2, MessageCircle, Heart, Globe, ArrowRight } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    {
      category: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Press'],
    },
    {
      category: 'Support',
      links: ['Help Center', 'Contact Us', 'Live Chat', 'FAQ'],
    },
    {
      category: 'Legal',
      links: ['Privacy Policy', 'Terms & Conditions', 'Cookies', 'License'],
    },
  ];

  const socialLinks = [
    { icon: Share2, href: '#', label: 'Facebook' },
    { icon: MessageCircle, href: '#', label: 'Twitter' },
    { icon: Heart, href: '#', label: 'Instagram' },
    { icon: Globe, href: '#', label: 'LinkedIn' },
  ];

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

  return (
    <footer className="bg-background border-t border-primary/10 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-muted-foreground mb-6">
              Get exclusive travel deals and inspiration delivered to your
              inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-background border border-primary/20 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 font-semibold flex items-center gap-2 group">
                Subscribe
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">✈</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Chalti-Trip
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Discover the world with Wanderlust. Your trusted companion for
              unforgettable travel experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} className="text-primary" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, i) => (
            <motion.div key={i} variants={itemVariants}>
              <h4 className="font-semibold text-foreground mb-4">
                {section.category}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm"
        >
          <p>&copy; 2026 Chalti-Trip. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-40 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
    </footer>
  );
}
