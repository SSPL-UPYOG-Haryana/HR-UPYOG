import { FaqItem } from '../types';
import { EXTERNAL_LINKS } from './links';
import { PORTAL_CONFIG } from './portalConfig';

/**
 * FAQ Configuration & Data
 * You can easily add, edit, or remove questions and answers below.
 * Categories are automatically detected from this list, or you can specify custom ones.
 */
export const FAQ_CONFIG: {
  // Custom categories list or auto-extracted categories
  categories: string[];
  // List of all FAQs
  items: FaqItem[];
} = {
  categories: [
    'All',
    'Overview',
    'Access & Roles',
    'Reports & Audit',
    'Support',
  ],

  items: [
    {
      id: 'faq-1',
      question: 'What is the Haryana ULB Finance System?',
      answer: `The Haryana ULB Finance System (${EXTERNAL_LINKS.PORTAL_LOGIN}) is the unified financial management and accrual-based double-entry accounting platform developed by the Directorate of Urban Local Bodies, Government of Haryana. It standardizes budget preparation, revenue demand & collections, vendor bill processing, voucher payments, bank reconciliations, and statutory compliance across all ${PORTAL_CONFIG.stats.totalUlbs} Urban Local Bodies in Haryana.`,
      category: 'Overview',
    },
    {
      id: 'faq-2',
      question: 'Who is authorized to access the Finance System?',
      answer: `Access is restricted to authorized financial officers, Municipal Commissioners, Executive Officers (EOs), Secretaries, Municipal Engineers (ME), Accounts Officers, Accountants, Bill Dealing Assistants, and State Directorate Auditors across Haryana’s ${PORTAL_CONFIG.stats.totalUlbs} Urban Local Bodies. Access is governed by strictly defined Role-Based Access Control (RBAC) and Maker-Checker hierarchies.`,
      category: 'Access & Roles',
    },
    {
      id: 'faq-3',
      question: 'How do authorized municipal officers log in to the system?',
      answer: `Authorized personnel can access the application by clicking the “Login to Finance System” button on the portal or visiting the Finance System. Users log in using their official credentials and access is based on their designated ULB and assigned permissions. OTP verification is required when changing or resetting the password.`,
      category: 'Access & Roles',
    },
    {
      id: 'faq-6',
      question: 'Does the system support multiple ULBs with distinct accounting boundaries?',
      answer: `Yes. The architecture supports all ${PORTAL_CONFIG.stats.totalUlbs} Urban Local Bodies (${PORTAL_CONFIG.breakdownString}) independently with isolated books of accounts, unique bank ledgers, and distinct sanction powers, while providing consolidated state-level dashboards for the Directorate.`,
      category: 'Overview',
    },
    {
      id: 'faq-7',
      question: 'How is security and financial accountability enforced?',
      answer: 'The system uses role-based access and Maker-Checker workflows to ensure that financial activities are reviewed and approved by authorized users. User activities and transaction records are maintained in the system for monitoring and audit purposes.',
      category: 'Reports & Audit',
    },
    {
      id: 'faq-8',
      question: 'How can ULB finance staff raise technical or accounting queries?',
      answer: 'ULB finance teams can email the dedicated state support desk at ulbfinance-support@hry.gov.in or contact the Centralized ULB Finance Helpdesk at Panchkula during official working hours.',
      category: 'Support',
    },
  ],
};
