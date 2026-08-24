import React, { useState, useEffect } from "react";
import { Menu, X, LogIn, ExternalLink } from "lucide-react";
import { HaryanaLogo } from "./HaryanaLogo";
import { EXTERNAL_LINKS } from "../data";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Modules", href: "#modules", id: "modules" },
    { label: "Capabilities", href: "#capabilities", id: "capabilities" },
    { label: "FAQ", href: "#faq", id: "faq" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // ScrollSpy to highlight the active section dynamically as the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 120;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);

        if (!section) continue;

        const { top } = section.getBoundingClientRect();

        if (top <= headerOffset) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="main-header"
      className="bg-white/95 backdrop-blur-md border-b border-brand-border sticky top-0 z-40 shadow-xs transition-all w-full"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20 gap-2">
          {/* Left Side: Haryana Government Emblem & Portal Identity */}
          <a
            href="#"
            id="brand-logo-link"
            onClick={() => setActiveSection("hero")}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-gov-primary rounded-lg p-0.5 sm:p-1 transition-transform duration-200 hover:-translate-y-0.5 min-w-0 lg:flex-shrink-0"
          >
            {/* Official Haryana State Emblem Logo */}
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-brand-border p-0.5 sm:p-1 flex items-center justify-center shadow-xs group-hover:border-accent group-hover:shadow-sm transition-all duration-200 flex-shrink-0">
              <HaryanaLogo size={34} className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>

            <div className="flex flex-col min-w-0 lg:flex-shrink-0">
              <span className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold leading-tight text-brand-dark tracking-tight group-hover:text-gov-primary transition-colors truncate lg:whitespace-nowrap">
                Haryana ULB Finance System
              </span>

              <p className="text-[8px] xs:text-[9px] sm:text-[10px] text-accent uppercase tracking-wider font-bold mt-0.5 truncate lg:whitespace-nowrap">
                Urban Local Bodies, Haryana
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-shrink-0"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs xl:text-sm font-semibold px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "text-gov-primary bg-gov-light font-bold shadow-2xs ring-1 ring-gov-primary/20"
                      : "text-brand-secondary hover:text-gov-primary hover:bg-gov-light/70"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gov-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Side: Login Button */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 flex-shrink-0">
            <a
              href={EXTERNAL_LINKS.PORTAL_LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              id="header-login-btn"
              className="inline-flex items-center justify-center gap-1.5 xl:gap-2 bg-accent hover:bg-accent-dark text-white text-xs xl:text-sm font-bold px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 whitespace-nowrap"
              title="Open Official Haryana ULB Finance System Portal"
            >
              <LogIn className="w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform group-hover:scale-110" />

              <span>Login to System</span>

              <ExternalLink className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-accent-light" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center lg:hidden gap-1.5 sm:gap-2 flex-shrink-0">
            <a
              href={EXTERNAL_LINKS.PORTAL_LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden items-center justify-center gap-1 bg-accent hover:bg-accent-dark text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg shadow-2xs whitespace-nowrap"
              title="Login to Finance Portal"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Login</span>
            </a>

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-brand-secondary hover:text-brand-dark hover:bg-gov-light focus:outline-none focus:ring-2 focus:ring-gov-primary transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <Menu
                  className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 transition-all duration-200 ${
                    isMobileMenuOpen
                      ? "rotate-90 opacity-0 scale-75"
                      : "rotate-0 opacity-100 scale-100"
                  }`}
                />

                <X
                  className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 transition-all duration-200 ${
                    isMobileMenuOpen
                      ? "rotate-0 opacity-100 scale-100"
                      : "-rotate-90 opacity-0 scale-75"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`lg:hidden overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-[500px] opacity-100 translate-y-0 border-t border-brand-border"
            : "max-h-0 opacity-0 -translate-y-2 border-t-0"
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-gov-primary bg-gov-light font-bold"
                    : "text-brand-dark hover:text-gov-primary hover:bg-gov-light"
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <div className="pt-3 border-t border-brand-border">
            <a
              href={EXTERNAL_LINKS.PORTAL_LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-4 py-2.5 rounded-lg text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <LogIn className="w-4 h-4" />

              <span>Login to Finance System</span>

              <ExternalLink className="w-4 h-4 text-accent-light" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
