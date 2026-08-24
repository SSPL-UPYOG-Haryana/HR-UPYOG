import React from 'react';
import { motion } from 'motion/react';
import { Building2, Layers, Clock, ShieldCheck } from 'lucide-react';
import { PORTAL_CONFIG } from '../data/portalConfig';

export const StatisticsSection: React.FC = () => {
  const stats = [
    {
      value: String(PORTAL_CONFIG.stats.totalUlbs),
      label: 'Urban Local Bodies',
      sublabel: PORTAL_CONFIG.breakdownString,
      icon: Building2,
    },
    {
      value: String(PORTAL_CONFIG.stats.ulbCategoriesCount),
      label: 'ULB Categories',
      sublabel: PORTAL_CONFIG.categories.shortList,
      icon: Layers,
    },
    {
      value: PORTAL_CONFIG.stats.uptime,
      label: 'Digital Access & Uptime',
      sublabel: 'High-availability Cloud & SDC Infrastructure',
      icon: Clock,
    },
    {
      value: String(PORTAL_CONFIG.stats.unifiedPlatformsCount),
      label: 'Unified Finance Platform',
      sublabel: 'Standardized NMAM Double-Entry System',
      icon: ShieldCheck,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="stats"
      aria-label="Statewide System Coverage Statistics"
      className="py-14 bg-white border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className="p-6 rounded-2xl border border-brand-border bg-brand-offwhite text-center transition-all duration-300 group cursor-default shadow-xs hover:shadow-lg hover:border-gov-primary hover:bg-white"
              >
                {/* Icon bubble */}
                <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 transition-all duration-300 bg-gov-light text-gov-primary border border-brand-border group-hover:bg-gov-primary group-hover:text-white group-hover:scale-110 shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Big Stat Number */}
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 text-gov-primary group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>

                {/* Primary label */}
                <div className="text-sm font-bold text-brand-dark mb-1">
                  {stat.label}
                </div>

                {/* Subtitle */}
                <div className="text-xs text-brand-secondary">
                  {stat.sublabel}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};