import { th } from "motion/react-client";

/**
 * Global Portal Statistics and Configuration
 * Modify values here to automatically update metrics and copy across the entire portal.
 */
export const PORTAL_CONFIG = {
  // Key Numbers & Metrics
  stats: {
    totalUlbs: 87,
    municipalCorporations: 11,
    municipalCouncils: 23,
    municipalCommittees: 53,
    ulbCategoriesCount: 3,
    uptime: '24×7',
    unifiedPlatformsCount: 1,
    financecommission: "15th"
  },

  // Category Names (English & Local naming conventions)
  categories: {
    corporationsName: 'Municipal Corporations (Nagar Nigam)',
    councilsName: 'Municipal Councils (Nagar Parishad)',
    committeesName: 'Municipal Committees (Nagar Palika)',
    shortList: 'Nagar Nigam, Nagar Parishad, Nagar Palika',
  },

  // Generated dynamic summary strings
  get breakdownString() {
    return `${this.stats.municipalCorporations} Corporations, ${this.stats.municipalCouncils} Councils, ${this.stats.municipalCommittees} Committees`;
  },
  
  get totalUlbsTag() {
    return `${this.stats.totalUlbs} Urban Local Bodies`;
  },

  get bannerCoverageText() {
    return `Connecting ${this.stats.totalUlbs} Municipal Corporations, Councils & Committees`;
  },

  get standardizedGovernanceText() {
    return `Standardized Governance across all ${this.stats.totalUlbs} Municipal Entities`;
  }
};
