import React from 'react';
import { EXTERNAL_LINKS } from '../data/links';

interface TopBarProps {
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  setFontSize: (size: 'sm' | 'base' | 'lg' | 'xl') => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  fontSize,
  setFontSize,
}) => {
  return (
    <div
      id="government-topbar"
      className="bg-gov-dark text-white text-xs py-1.5 px-3 sm:px-4 border-b border-gov-primary relative z-40 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Government identity */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 text-gov-light min-w-0">
          <span className="font-semibold text-white tracking-tight sm:tracking-wide flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs truncate">
            <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-success flex-shrink-0"></span>

            <span className="hidden xs:inline">
              Government of Haryana
            </span>

            <span className="xs:hidden">
              Govt. of Haryana
            </span>
          </span>

          <span className="hidden sm:inline-block opacity-60">|</span>

          <span className="hidden sm:inline-block text-gov-light/90 text-[11px] sm:text-xs truncate">
            Directorate of Urban Local Bodies
          </span>
        </div>

        {/* Right: Controls & Quick Login */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:bg-gov-primary focus:text-white focus:px-2 focus:py-0.5 focus:rounded text-xs font-semibold"
          >
            Skip to content
          </a>

          {/* Font Size Controls */}
          <div className="flex items-center space-x-0.5 sm:space-x-1 bg-[#043B3E]/60 px-1 py-0.5 rounded">
            <span className="sr-only">
              Font size adjustment
            </span>

            <button
              type="button"
              id="font-size-sm-btn"
              onClick={() => setFontSize('sm')}
              className={`px-1 sm:px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] font-medium transition-colors ${
                fontSize === 'sm'
                  ? 'bg-gov-primary text-white font-bold'
                  : 'text-gov-light hover:text-white'
              }`}
              title="Decrease Font Size (A-)"
              aria-label="Decrease Font Size"
            >
              A-
            </button>

            <button
              type="button"
              id="font-size-base-btn"
              onClick={() => setFontSize('base')}
              className={`px-1 sm:px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] font-medium transition-colors ${
                fontSize === 'base'
                  ? 'bg-gov-primary text-white font-bold'
                  : 'text-gov-light hover:text-white'
              }`}
              title="Normal Font Size (A)"
              aria-label="Normal Font Size"
            >
              A
            </button>

            <button
              type="button"
              id="font-size-lg-btn"
              onClick={() => setFontSize('lg')}
              className={`px-1 sm:px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] font-medium transition-colors ${
                fontSize === 'lg'
                  ? 'bg-gov-primary text-white font-bold'
                  : 'text-gov-light hover:text-white'
              }`}
              title="Increase Font Size (A+)"
              aria-label="Increase Font Size"
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};