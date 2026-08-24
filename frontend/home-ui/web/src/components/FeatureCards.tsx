import React from 'react';
import { motion } from 'motion/react';
import {
  Database,
  RefreshCw,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';
import { PORTAL_CONFIG } from '../data/portalConfig';

export const FeatureCards: React.FC = () => {
  const features = [
    {
      id: 'feat-1',
      title: 'Centralized Financial Management',
      description: `Manage municipal financial operations through a unified digital platform across ${PORTAL_CONFIG.stats.totalUlbs} ULBs.`,
      icon: Database,
    },
    {
      id: 'feat-2',
      title: 'Real-Time Data Synchronization',
      description:
        'Access updated financial ledgers, receipts, and vouchers across connected ULB systems.',
      icon: RefreshCw,
    },
    {
      id: 'feat-3',
      title: 'Automated Reporting & Analytics',
      description:
        'Generate standardized NMAM financial statements, audit reports, and statutory insights effortlessly.',
      icon: BarChart3,
    },
    {
      id: 'feat-4',
      title: 'Role-Based Access Control',
      description:
        'Secure financial operations through strictly controlled Maker-Checker roles and permissions.',
      icon: ShieldCheck,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
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
      id="features"
      aria-label="Core Feature Highlights"
      className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.2 },
              }}
              id={`feature-card-${item.id}`}
              className="p-6 rounded-2xl transition-all duration-300 group cursor-default bg-white text-brand-dark border border-brand-border shadow-xs hover:shadow-xl hover:border-gov-primary"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 bg-gov-light text-gov-primary border border-brand-border group-hover:bg-gov-primary group-hover:text-white group-hover:scale-110 shadow-2xs">
                <Icon className="w-5 h-5" />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold tracking-tight mb-2 text-brand-dark group-hover:text-gov-primary transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm leading-relaxed text-brand-secondary">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};