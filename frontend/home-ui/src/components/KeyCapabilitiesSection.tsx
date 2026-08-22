import React from "react";
import { motion } from "motion/react";
import {
  Calculator,
  Briefcase,
  Landmark,
  Coins,
  CreditCard,
  Send,
  Building,
  FileCheck,
  History,
  Users,
  Network,
  Eye,
} from "lucide-react";
import { PORTAL_CONFIG } from "../data/portalConfig";

export const KeyCapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      title: "Double-Entry Accounting",
      desc: "Maintains accurate accounts using double-entry accounting principles.",
      icon: Calculator,
    },
    {
      title: "Budget Management",
      desc: "Helps plan, allocate, and track the approved budget.",
      icon: Briefcase,
    },
    {
      title: "Fund Management",
      desc: `Manages Finance Commission, SFC, and AMRUT grant funds and transactions.`,
      icon: Landmark,
    },
    {
      title: "Revenue Management",
      desc: "Records and manages revenue from taxes, licenses, and user charges.",
      icon: Coins,
    },
    {
      title: "Expenditure Management",
      desc: "Records and manages expenses, bills, and other financial transactions.",
      icon: CreditCard,
    },
    {
      title: "Payment Processing",
      desc: "Records payments and tracks their status in the system.",
      icon: Send,
    },
    {
      title: "Bank Reconciliation (BRS)",
      desc: "Helps compare bank transactions with system records.",
      icon: Building,
    },
    {
      title: "Financial Reporting",
      desc: "Generates financial reports such as Balance Sheet, P&L, and Trial Balance.",
      icon: FileCheck,
    },
    {
      title: "Audit Trail",
      desc: "Tracks financial activities for audit and accountability.",
      icon: History,
    },
    {
      title: "Role-Based Access (RBAC)",
      desc: "Provides access based on user roles and responsibilities.",
      icon: Users,
    },
    {
      title: "Multi-ULB Support",
      desc: `Supports ${PORTAL_CONFIG.stats.totalUlbs} ULBs with separate accounts and centralized monitoring.`,
      icon: Network,
    },
    {
      title: "Financial Transparency",
      desc: "Provides clear financial information for monitoring and accountability.",
      icon: Eye,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="capabilities"
      aria-label="Key Financial Capabilities"
      className="py-16 sm:py-20 bg-gov-dark overflow-hidden"
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
          <span className="text-gov-light font-bold text-xs uppercase tracking-widest bg-gov-primary/50 border border-gov-light/20 px-3 py-1 rounded-full mb-3 inline-block">
            FINANCIAL GOVERNANCE
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Secure. Controlled. Accountable.
          </h2>

          <p className="mt-2 text-sm sm:text-base text-gov-light/90">
            Ensuring statutory compliance, data integrity, and strict
            accountability for public funds across Haryana.
          </p>

          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Capability Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="
                  p-5
                  rounded-xl
                  bg-gov-primary
                  border border-gov-light/20
                  shadow-xs
                  hover:border-gov-light/40
                  hover:shadow-lg
                  transition-all
                  flex items-start
                  gap-3.5
                  group
                  cursor-default
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-11 h-11
                    rounded-lg
                    bg-gov-dark/50
                    text-gov-light
                    group-hover:bg-gov-light
                    group-hover:text-gov-dark
                    transition-all duration-300
                    flex items-center justify-center
                    flex-shrink-0
                    border border-gov-light/20
                  "
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="
                      text-sm
                      font-bold
                      text-white
                      mb-1
                      group-hover:text-gov-light
                      transition-colors
                    "
                  >
                    {cap.title}
                  </h3>

                  <p
                    className="
                      text-xs
                      text-gov-light/90
                      leading-relaxed
                    "
                  >
                    {cap.desc}
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