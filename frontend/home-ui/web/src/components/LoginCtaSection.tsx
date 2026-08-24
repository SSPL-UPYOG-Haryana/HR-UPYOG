import React from 'react';
import { motion } from 'motion/react';
import {
  LogIn,
  ExternalLink,
  ShieldCheck,
  LockKeyhole,
} from 'lucide-react';
import { EXTERNAL_LINKS } from '../data/links';

export const LoginCtaSection: React.FC = () => {
  return (
    <section
      id="login-cta"
      aria-label="Portal Login Call to Action"
      className="py-16 bg-gov-dark text-white relative overflow-hidden"
    >
      {/* Subtle geometric backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 10,
          }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-gov-light border border-white/20 mb-4 shadow-sm cursor-pointer"
        >
          <LockKeyhole className="w-7 h-7" />
        </motion.div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">
          Access the Haryana ULB Finance System
        </h2>

        <p className="text-sm sm:text-base text-gov-light/90 max-w-2xl mx-auto mb-7 leading-relaxed">
          Authorized municipal finance officers, accountants, and administrators
          can securely access the official Finance System application.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href={EXTERNAL_LINKS.PORTAL_LOGIN}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-login-btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-dark text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-xl hover:shadow-2xl transition-colors focus:outline-none focus:ring-4 focus:ring-accent/40 border border-accent"
          >
            <LogIn className="w-5 h-5 text-white" />

            <span>Login to Finance System</span>

            <ExternalLink className="w-4 h-4 text-accent-light" />
          </motion.a>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gov-light/70">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-success" />
            Official URL: {EXTERNAL_LINKS.PORTAL_LOGIN}
          </span>

          <span className="hidden sm:inline">•</span>

          <span>Secured by Government of Haryana</span>
        </div>
      </motion.div>
    </section>
  );
};