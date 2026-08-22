import React from "react";
import { motion } from "motion/react";
import { LogIn, ExternalLink } from "lucide-react";
import { HaryanaLogo } from "./HaryanaLogo";
import { EXTERNAL_LINKS } from "../data/links";
import { PORTAL_CONFIG } from "../data";

export const Footer: React.FC = () => {
  return (
    <footer
      id="main-footer"
      aria-label="Official Portal Footer"
      className="bg-gov-dark text-brand-border text-xs overflow-hidden"
    >
      {/* Top Footer with 5 Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center border border-gov-light/30 shadow-md flex-shrink-0">
                <HaryanaLogo size={38} />
              </div>

              <div>
                <span className="text-sm sm:text-base font-extrabold text-white tracking-tight block">
                  Haryana ULB Finance System
                </span>

                <span className="text-[11px] text-gov-light/80 block">
                  Directorate of Urban Local Bodies, Haryana
                </span>
              </div>
            </div>

            <p className="text-xs text-gov-light/80 leading-relaxed max-w-sm">
              A unified municipal financial management and accrual accounting
              platform empowering transparent, accountable, and standardized
              operations across {PORTAL_CONFIG.stats.totalUlbs} Urban Local
              Bodies in Haryana.
            </p>

            <div className="pt-2">
              <motion.a
                href={EXTERNAL_LINKS.PORTAL_LOGIN}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-login-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-xs px-4.5 py-2.5 rounded-xl transition-colors shadow-md border border-accent"
              >
                <LogIn className="w-3.5 h-3.5" />

                <span>Login to Finance System</span>

                <ExternalLink className="w-3 h-3 text-accent-light" />
              </motion.a>
            </div>
          </div>

          {/* Col 2: Finance System Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Finance System
            </h4>

            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-brand-border hover:text-white hover:underline transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-brand-border hover:text-white hover:underline transition-colors"
                >
                  About Platform
                </a>
              </li>

              <li>
                <a
                  href="#modules"
                  className="text-brand-border hover:text-white hover:underline transition-colors"
                >
                  Financial Modules
                </a>
              </li>

              <li>
                <a
                  href="#ulb-section"
                  className="text-brand-border hover:text-white hover:underline transition-colors"
                >
                  Statewide ULBs Architecture
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="text-brand-border hover:text-white hover:underline transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Resources & Help
            </h4>

            <ul className="space-y-2">
              <li>
                <a
                  href={EXTERNAL_LINKS.RAISE_QUERY_FROM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-border hover:text-white hover:underline transition-colors inline-flex items-center gap-1"
                >
                  <span>Raise Query (Form)</span>

                  <ExternalLink className="w-3 h-3 text-brand-border/70" />
                </a>
              </li>

              <li>
                <a
                  href={EXTERNAL_LINKS.FAQS_EXCEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-border hover:text-white hover:underline transition-colors inline-flex items-center gap-1"
                >
                  <span>FAQs Sheet</span>

                  <ExternalLink className="w-3 h-3 text-brand-border/70" />
                </a>
              </li>

              <li>
                <a
                  href={EXTERNAL_LINKS.TRAINING_VEDIO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-border hover:text-white hover:underline transition-colors inline-flex items-center gap-1"
                >
                  <span>Training Video Tutorials</span>

                  <ExternalLink className="w-3 h-3 text-brand-border/70" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Information & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Legal & Info
            </h4>

            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  className="text-brand-border hover:text-white hover:underline transition-colors"
                >
                  Contact Support Desk
                </a>
              </li>

              <li>
                <span className="text-brand-border/70 cursor-default">
                  Privacy Policy
                </span>
              </li>

              <li>
                <span className="text-brand-border/70 cursor-default">
                  Terms of Use
                </span>
              </li>

              <li>
                <span className="text-brand-border/70 cursor-default">
                  Hyperlink Policy
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer & Copyright */}
      <div className="border-t border-gov-primary bg-gov-darker py-6 px-4 sm:px-6 lg:px-8 text-center text-brand-border text-[11px]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Government of Haryana. All Rights
            Reserved.{" "}
            <a
              href={EXTERNAL_LINKS.DULB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Directorate of Urban Local Bodies, Haryana
            </a>
          </p>

          <div className="flex items-center gap-3 text-brand-border/80">
            <span>
              Designed by{" "}
              <a
                href={EXTERNAL_LINKS.DESIGNED_BY_COMPANY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Sparrow Softech Pvt. Ltd.
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
