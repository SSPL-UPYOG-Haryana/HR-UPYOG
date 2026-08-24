import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  HelpCircle,
  FileSpreadsheet,
  ExternalLink,
} from 'lucide-react';
import { FAQ_CONFIG } from '../data/faqConfig';
import { EXTERNAL_LINKS } from '../data/links';

export const FAQSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>(
    FAQ_CONFIG.items[0]?.id || null
  );

  // Dynamic categories list from FAQ_CONFIG or auto-detected from items
  const categories = useMemo(() => {
    if (FAQ_CONFIG.categories && FAQ_CONFIG.categories.length > 0) {
      return FAQ_CONFIG.categories;
    }

    const itemCats = Array.from(
      new Set(FAQ_CONFIG.items.map((f) => f.category))
    );

    return ['All', ...itemCats];
  }, []);

  // Filter items reliably by category
  const filteredFaqs = useMemo(() => {
    if (selectedCategory === 'All') {
      return FAQ_CONFIG.items;
    }

    return FAQ_CONFIG.items.filter(
      (f) =>
        f.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);

    const nextFaqs =
      cat === 'All'
        ? FAQ_CONFIG.items
        : FAQ_CONFIG.items.filter(
            (f) =>
              f.category.toLowerCase() === cat.toLowerCase()
          );

    setOpenId(nextFaqs.length > 0 ? nextFaqs[0].id : null);
  };

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-16 sm:py-20 bg-brand-offwhite border-b border-brand-border overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent-light border border-accent/20 px-3 py-1 rounded-full mb-3 inline-block shadow-2xs">
            F.A.Q
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            Frequently Asked{' '}
            <span className="text-gov-primary">Questions</span>
          </h2>

          <div className="w-12 h-1 bg-gov-primary mx-auto mt-3 rounded-full"></div>
        </motion.div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const isSelected =
              selectedCategory.toLowerCase() === cat.toLowerCase();

            const count =
              cat === 'All'
                ? FAQ_CONFIG.items.length
                : FAQ_CONFIG.items.filter(
                    (f) =>
                      f.category.toLowerCase() === cat.toLowerCase()
                  ).length;

            return (
              <motion.button
                key={cat}
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleCategoryChange(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gov-primary text-white shadow-md ring-2 ring-gov-primary/20 font-bold'
                    : 'bg-white text-brand-secondary hover:bg-gov-light hover:text-gov-primary border border-brand-border shadow-2xs'
                }`}
              >
                <span>{cat}</span>

                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-white/25 text-white'
                      : 'bg-gov-light text-gov-primary'
                  }`}
                >
                  {count}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Accordion List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3 min-h-[220px]"
          >
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-brand-border text-brand-secondary">
                <HelpCircle className="w-8 h-8 mx-auto text-gov-primary mb-2 opacity-50" />

                <p className="text-sm font-semibold">
                  No questions found in this category.
                </p>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    variants={itemVariants}
                    id={`faq-item-${faq.id}`}
                    className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                      isOpen
                        ? 'bg-gov-primary text-white border-gov-dark shadow-md'
                        : 'bg-white text-brand-dark border-brand-border hover:border-gov-primary hover:shadow-xs'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gov-primary cursor-pointer select-none"
                    >
                      <span className="flex items-center gap-2.5">
                        <HelpCircle
                          className={`w-4.5 h-4.5 flex-shrink-0 ${
                            isOpen
                              ? 'text-gov-light'
                              : 'text-gov-primary'
                          }`}
                        />

                        <span>{faq.question}</span>
                      </span>

                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? 'transform rotate-180 text-white'
                            : 'text-brand-secondary'
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.25,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-gov-light leading-relaxed border-t border-gov-dark">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </AnimatePresence>

        {/* External FAQ Excel Sheet Link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-10"
        >
          <motion.a
            href={EXTERNAL_LINKS.FAQS_EXCEL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-white text-gov-primary hover:bg-gov-light border border-gov-primary px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4 text-gov-primary" />

            <span>
              Open Complete FAQ Sheet
            </span>

            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};