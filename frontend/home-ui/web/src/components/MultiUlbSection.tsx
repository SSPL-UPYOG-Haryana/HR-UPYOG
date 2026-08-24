import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  Landmark,
  ShieldAlert,
  BarChart4,
  ArrowDown,
  ArrowRight,
} from 'lucide-react';
import { PORTAL_CONFIG } from '../data/portalConfig';

export const MultiUlbSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Haryana ULB Finance System',
      desc: 'Centralized Cloud Core, NMAM Chart of Accounts & State Policies',
      icon: Landmark,
      badge: 'State Directorate',
    },
    {
      step: '02',
      title: PORTAL_CONFIG.totalUlbsTag,
      desc: `${PORTAL_CONFIG.breakdownString} with isolated ledgers`,
      icon: Building2,
      badge: 'Municipal Level',
    },
    {
      step: '03',
      title: 'Financial Operations',
      desc: 'Budgets, Tax Receipts, Works Bills, Vouchers, e-Payments & Bank Reconciliation',
      icon: ShieldAlert,
      badge: 'Field Execution',
    },
    {
      step: '04',
      title: 'Reports & Analytics',
      desc: 'Automated Balance Sheets, Grant Utilization & State Consolidated Dashboards',
      icon: BarChart4,
      badge: 'Governance & Audit',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
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
      id="ulb-section"
      aria-label="Multi-ULB Architecture"
      className="py-16 sm:py-20 bg-white border-y border-brand-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent-light border border-accent/20 px-3 py-1 rounded-full mb-3 inline-block shadow-2xs">
            STATEWIDE ARCHITECTURE
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            One Platform. Multiple ULBs.
          </h2>

          <p className="mt-2 text-sm sm:text-base text-brand-secondary leading-relaxed">
            A unified finance platform designed to support financial operations
            across Haryana's Urban Local Bodies while maintaining appropriate
            organizational and access boundaries.
          </p>

          <div className="w-12 h-1 bg-gov-primary mx-auto mt-3 rounded-full"></div>
        </motion.div>

        {/* Visual Architecture Flow: Step 1 -> Step 2 -> Step 3 -> Step 4 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className="relative p-6 rounded-2xl bg-brand-offwhite border border-brand-border hover:border-gov-primary hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-accent bg-accent-light border border-accent/20 px-2.5 py-0.5 rounded-full shadow-2xs">
                      Step {item.step}
                    </span>

                    <span className="text-[11px] font-semibold text-brand-secondary uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-gov-light border border-brand-border text-gov-primary group-hover:bg-gov-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 flex items-center justify-center mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-brand-dark mb-2 group-hover:text-gov-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow indicator for desktop layout */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-gov-primary text-white items-center justify-center shadow-md text-xs border-2 border-white">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}

                {/* Arrow indicator for mobile layout */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <ArrowDown className="w-4 h-4 text-brand-secondary" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Multi-ULB Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gov-dark text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-gov-primary"
        >
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-1">
              {PORTAL_CONFIG.standardizedGovernanceText}
            </h4>

            <p className="text-xs sm:text-sm text-gov-light/90 leading-relaxed">
              Includes Gurugram, Faridabad, Rohtak, Panipat, Karnal,
              Yamunanagar, Panchkula, Sonipat, Ambala, Hisar, Manesar & all{' '}
              {PORTAL_CONFIG.stats.municipalCouncils +
                PORTAL_CONFIG.stats.municipalCommittees}{' '}
              Councils and Committees.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};