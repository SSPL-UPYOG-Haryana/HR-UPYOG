import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { EXTERNAL_LINKS } from "../data";

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      aria-label="Contact and Support Desk"
      className="py-16 sm:py-20 bg-brand-offwhite border-b border-brand-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent-light border border-accent/20 px-3 py-1 rounded-full mb-3 inline-block shadow-2xs">
            CONTACT & SUPPORT
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            Need Assistance? Contact Us
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-brand-secondary">
            Centralized Helpdesk for Urban Local Bodies Finance Officers &
            Municipal Staff.
          </p>

          <div className="w-12 h-1 bg-gov-primary mx-auto mt-3 rounded-full"></div>
        </motion.div>

        {/* Clean White Card with Contact Details + Map View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-5xl mx-auto bg-white rounded-2xl border border-brand-border shadow-md overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 border-b border-brand-border bg-white">
            {/* Address */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-brand-offwhite transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-gov-light text-gov-primary flex items-center justify-center flex-shrink-0 border border-brand-border shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-secondary mb-1">
                  Official Address
                </h3>

                <p className="text-sm font-semibold text-brand-dark leading-snug">
                  Directorate of Urban Local Bodies, Haryana
                </p>

                <p className="text-xs text-brand-secondary mt-1">
                  Bays No. 11-14, Sector 4, Panchkula, Haryana – 134112
                </p>
              </div>
            </motion.div>

            {/* Helpline / Phone */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-brand-offwhite transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-gov-light text-gov-primary flex items-center justify-center flex-shrink-0 border border-brand-border shadow-2xs">
                <Phone className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-secondary mb-1">
                  Support Helpline
                </h3>

                <p className="text-sm font-bold text-gov-primary">
                  0172-2570020 / 0172-2570021
                </p>

                <p className="text-xs text-brand-secondary mt-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-secondary" />
                  Mon – Fri, 9:00 AM – 5:00 PM
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-brand-offwhite transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-gov-light text-gov-primary flex items-center justify-center flex-shrink-0 border border-brand-border shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-secondary mb-1">
                  Official Support Email
                </h3>

                <p className="text-sm font-bold text-brand-dark break-all">
                  ulbfinance-support@hry.gov.in
                </p>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <div className="relative h-64 sm:h-72 bg-slate-100 w-full overflow-hidden border-t border-brand-border">
            <iframe
              title="Directorate of Urban Local Bodies Haryana, Panchkula Location"
              src={EXTERNAL_LINKS.GOOGLE_MAP_EMBED_DULB}
              className="w-full h-full border-0 filter grayscale-[20%] contrast-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl shadow-md border border-brand-border text-xs text-brand-dark max-w-xs">
              <p className="font-bold flex items-center gap-1.5 text-brand-dark">
                <Building2 className="w-4 h-4 text-gov-primary" />
                Directorate of Urban Local Bodies
              </p>

              <p className="text-[11px] text-brand-secondary mt-0.5">
                Sector 4, Panchkula, Haryana 134112
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
