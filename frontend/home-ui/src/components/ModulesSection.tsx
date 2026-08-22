import React from 'react';
import { motion } from 'motion/react';
import {
  PieChart,
  TrendingUp,
  FileCheck2,
  Receipt,
  Scale,
  FileSpreadsheet,
} from 'lucide-react';
import { FINANCE_MODULES } from '../data/modulesData';

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  PieChart,
  TrendingUp,
  FileCheck2,
  Receipt,
  Scale,
  FileSpreadsheet,
};

export const ModulesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="modules"
      aria-label="Finance System Modules"
      className="py-16 sm:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent-light border border-accent/20 px-3 py-1 rounded-full mb-3 inline-block shadow-2xs">
            FINANCE MODULES
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            Powerful Financial Management
          </h2>

          <p className="mt-2 text-sm sm:text-base text-brand-secondary">
            Modular, end-to-end municipal accounting architecture built
            according to the National Municipal Accounting Manual (NMAM).
          </p>

          <div className="w-12 h-1 bg-gov-primary mx-auto mt-3 rounded-full"></div>
        </motion.div>

        {/* 3-column x 2-row clean card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {FINANCE_MODULES.map((mod) => {
            const Icon = iconMap[mod.iconName] || FileSpreadsheet;

            return (
              <motion.div
                key={mod.id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                id={`module-card-${mod.id}`}
                className="group p-6 rounded-2xl border border-brand-border bg-white hover:border-gov-primary hover:shadow-xl transition-all duration-300 flex flex-col justify-start"
              >
                <div>
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-gov-light text-gov-primary group-hover:bg-gov-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 flex items-center justify-center mb-4 border border-brand-border">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-2 group-hover:text-gov-primary transition-colors">
                    {mod.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};