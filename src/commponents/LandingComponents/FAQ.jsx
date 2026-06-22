import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [expandedId, setExpandedId] = useState(0);

  const faqs = [
    {
      id: 0,
      question: 'How do I book a trip on Wanderlust?',
      answer:
        'Booking is simple! Browse destinations, select your preferred dates, choose your package, and complete the secure checkout. You will receive confirmation and itinerary details via email.',
    },
    {
      id: 1,
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, digital wallets, bank transfers, and more. All payments are secured with industry-leading encryption.',
    },
    {
      id: 2,
      question: 'Can I cancel or modify my booking?',
      answer:
        'Yes! You can cancel up to 14 days before your trip for a full refund. Modifications can be made through your account dashboard or by contacting our support team.',
    },
    {
      id: 3,
      question: 'Do you provide travel insurance?',
      answer:
        'Yes, we offer comprehensive travel insurance options during checkout. It covers flight delays, cancellations, medical emergencies, and lost luggage.',
    },
    {
      id: 4,
      question: 'Is there 24/7 customer support?',
      answer:
        'Absolutely! Our support team is available 24/7 via chat, email, and phone to assist with any questions or emergencies during your trip.',
    },
    {
      id: 5,
      question: 'Can groups get special discounts?',
      answer:
        'Yes! We offer special group rates for bookings of 10 or more people. Contact our group travel specialists for a customized quote.',
    },
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
    <section
      id="faq"
      className="py-20 bg-gradient-to-b from-background to-card"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and bookings.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="bg-card border border-primary/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === faq.id ? null : faq.id)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-foreground text-left">
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: expandedId === faq.id ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="text-primary" size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-primary/10"
                  >
                    <div className="px-6 py-4 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Contact our support team and we will be happy to help you out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 font-semibold">
              Contact Support
            </button>
            <button className="px-8 py-3 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold">
              Send Email
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
