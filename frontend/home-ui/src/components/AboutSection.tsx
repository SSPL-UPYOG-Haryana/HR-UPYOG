import React from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Award,
  FileSpreadsheet,
  Lock,
  Building2,
} from "lucide-react";
import { PORTAL_CONFIG } from "../data/portalConfig";
import buildingFacade from "../assets/building-facade.jpeg";

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      title: "Standardized Processes",
      desc: `Consistent, NMAM-compliant financial workflows across all ${PORTAL_CONFIG.stats.totalUlbs} ULBs.`,
      icon: CheckCircle2,
    },
    {
      title: "Transparent Financial Data",
      desc: "End-to-end visibility, automated ledger updates, and public accountability.",
      icon: FileSpreadsheet,
    },
    {
      title: "Digital Governance",
      desc: "Elimination of manual accounting delays with automated maker-checker approvals.",
      icon: Lock,
    },
  ];

  return (
    <section
      id="about"
      aria-label="About the System"
      className="py-16 sm:py-20 bg-brand-offwhite border-y border-brand-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent-light border border-accent/20 px-3 py-1 rounded-full mb-3 inline-block shadow-2xs">
            ABOUT THE SYSTEM
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            Modernizing Financial Management Across Haryana
          </h2>

          <div className="w-12 h-1 bg-gov-primary mx-auto mt-3 rounded-full"></div>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Civic / Municipal Architecture Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white transition-all duration-300 group-hover:shadow-2xl">
              <img
                src={buildingFacade}
                alt="Haryana Urban Administration & Municipal Finance Governance Complex"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gov-dark/90 via-gov-dark/20 to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="w-4 h-4 text-gov-light" />

                  <span className="text-xs font-bold uppercase tracking-wider text-gov-light">
                    Statewide Finance Portal
                  </span>
                </div>

                <p className="text-sm font-semibold text-white/95">
                  {PORTAL_CONFIG.bannerCoverageText}
                </p>
              </div>
            </div>

            {/* Accent badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -bottom-4 -right-4 bg-gov-primary text-white p-4 rounded-2xl shadow-xl border-2 border-white hidden sm:flex items-center gap-3 transition-transform duration-300 hover:scale-105"
            >
              <Award className="w-7 h-7 text-gov-light flex-shrink-0" />

              <div>
                <div className="text-[11px] font-bold uppercase text-gov-light/80">
                  NMAM Standard
                </div>

                <div className="text-sm font-extrabold">Accrual Accounting</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Explanatory Content & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7 space-y-5"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark leading-snug">
              A comprehensive financial management system designed for Haryana’s
              Urban Local Bodies.
            </h3>

            <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
              The Haryana ULB Finance System is the unified institutional
              platform engineered to standardize double-entry accrual
              accounting, dynamic budgeting, revenue billing, expenditure
              authorization, and statutory audit compliance across all{" "}
              {PORTAL_CONFIG.stats.totalUlbs} Urban Local Bodies in Haryana.
            </p>

            <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
              By shifting from fragmented legacy systems to a single statewide
              ledger, the platform delivers unified financial controls over
              municipal receipts, contractor payment vouchers, bank
              reconciliation, and devolution grants under the Finance Commission
              and State Finance Commission.
            </p>

            {/* Three key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {highlights.map((h, index) => {
                const Icon = h.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.2 },
                    }}
                    className="p-4 rounded-xl bg-white border border-brand-border shadow-xs hover:border-gov-primary hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gov-light text-gov-primary flex items-center justify-center mb-2.5 border border-brand-border">
                      <Icon className="w-4 h-4" />
                    </div>

                    <h4 className="text-xs font-bold text-brand-dark mb-1">
                      {h.title}
                    </h4>

                    <p className="text-[11px] text-brand-secondary leading-snug">
                      {h.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
