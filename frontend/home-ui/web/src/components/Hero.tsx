import React from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  Video,
  LogIn,
  ExternalLink,
  ShieldCheck,
  Landmark,
  ArrowUpRight,
  MessageSquarePlus,
} from "lucide-react";
import { EXTERNAL_LINKS } from "../data/links";
import { PORTAL_CONFIG } from "../data/portalConfig";
import buildingFacade from "../assets/building-facade.jpeg";

interface HeroProps {
  onOpenRaiseQuery?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[560px] lg:min-h-[620px] flex items-center justify-start overflow-hidden bg-brand-offwhite border-b border-brand-border"
    >
      {/* Background Architectural & Urban Highway Infrastructure Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Urban Local Bodies Building Facade Blended Backdrop */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${buildingFacade})`,
          }}
        />

        {/* Stronger left overlay for content readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-offwhite/95 via-brand-offwhite/65 to-brand-offwhite/10" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-offwhite/80 via-brand-offwhite/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 lg:py-20 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-3xl"
        >
          {/* Category Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 rounded-full bg-accent-light border border-accent/20 text-accent font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-2xs whitespace-nowrap"
          >
            <Landmark className="w-3.5 h-3.5 flex-shrink-0" />

            <span className="hidden sm:inline">
              Official Finance Portal • {PORTAL_CONFIG.totalUlbsTag}
            </span>

            <span className="sm:hidden">
              Official Portal • {PORTAL_CONFIG.stats.totalUlbs} ULBs
            </span>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-tight mb-3 sm:mb-4"
          >
            Efficient{" "}
            <span className="text-gov-primary">Financial Management</span>
          </motion.h1>

          {/* Hero Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-base md:text-lg text-brand-secondary leading-relaxed mb-6 max-w-2xl font-normal"
          >
            Streamlining financial operations, double-entry accrual accounting,
            budget allocations, and voucher management across Haryana&apos;s {PORTAL_CONFIG.stats.totalUlbs} Urban Local
            Bodies through a unified digital finance platform.
          </motion.p>

          {/* 3 Quick Resource Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-6 sm:mb-8"
          >
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-secondary mb-2.5 sm:mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-gov-primary" />
              Quick System Resources & Tools
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 max-w-2xl">
              {/* 1. Raise Query */}
              <motion.a
                href={EXTERNAL_LINKS.RAISE_QUERY_FROM}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="hero-raise-query-btn"
                className="bg-white/95 backdrop-blur-xs border border-brand-border p-2.5 sm:p-3 sm:py-3.5 rounded-xl hover:bg-white hover:border-gov-primary hover:shadow-md transition-all group flex items-center justify-between gap-2 text-xs sm:text-sm font-bold text-brand-dark shadow-xs focus:outline-none focus:ring-2 focus:ring-gov-primary cursor-pointer"
                title="Open Finance System Query & Ticket Tracker (Form)"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gov-light text-gov-primary flex items-center justify-center flex-shrink-0 group-hover:bg-gov-primary group-hover:text-white transition-colors">
                    <MessageSquarePlus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  <span className="truncate">Raise Query</span>
                </div>

                <ArrowUpRight className="w-3.5 h-3.5 text-gov-primary opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
              </motion.a>

              {/* 2. FAQs */}
              <motion.a
                href={EXTERNAL_LINKS.FAQS_EXCEL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="hero-faq-btn"
                className="bg-white/95 backdrop-blur-xs border border-brand-border p-2.5 sm:p-3 sm:py-3.5 rounded-xl hover:bg-white hover:border-gov-primary hover:shadow-md transition-all group flex items-center justify-between gap-2 text-xs sm:text-sm font-bold text-brand-dark shadow-xs focus:outline-none focus:ring-2 focus:ring-gov-primary cursor-pointer"
                title="Open Finance FAQs (Excel / Sheets)"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gov-light text-gov-primary flex items-center justify-center flex-shrink-0 group-hover:bg-gov-primary group-hover:text-white transition-colors">
                    <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  <span className="truncate">FAQs</span>
                </div>

                <ArrowUpRight className="w-3.5 h-3.5 text-gov-primary opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
              </motion.a>

              {/* 3. Training Videos */}
              <motion.a
                href={EXTERNAL_LINKS.TRAINING_VEDIO}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="hero-training-video-btn"
                className="bg-white/95 backdrop-blur-xs border border-brand-border p-2.5 sm:p-3 sm:py-3.5 rounded-xl hover:bg-white hover:border-gov-primary hover:shadow-md transition-all group flex items-center justify-between gap-2 text-xs sm:text-sm font-bold text-brand-dark shadow-xs focus:outline-none focus:ring-2 focus:ring-gov-primary cursor-pointer"
                title="Watch Video Tutorials"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent-light text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  <span className="truncate">Training Videos</span>
                </div>

                <ArrowUpRight className="w-3.5 h-3.5 text-accent opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
              </motion.a>
            </div>
          </motion.div>

          {/* Primary Hero Login CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
          >
            <motion.a
              href={EXTERNAL_LINKS.PORTAL_LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="hero-primary-login-btn"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-xs sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 text-center"
            >
              <LogIn className="w-4 h-4 text-white" />

              <span>Login to Finance System</span>

              <ExternalLink className="w-3.5 h-3.5 text-accent-light" />
            </motion.a>

            <span className="text-[11px] sm:text-xs text-brand-secondary flex items-center justify-center sm:justify-start gap-1.5 font-semibold bg-white/80 backdrop-blur-xs px-3 py-2 rounded-lg border border-brand-border/60 shadow-2xs text-center">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-success flex-shrink-0" />

              <span>
                Secure Government Infrastructure • Serving {PORTAL_CONFIG.stats.totalUlbs} ULBs</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
