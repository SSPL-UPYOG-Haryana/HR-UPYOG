import { FinanceModule } from '../types';
import { PORTAL_CONFIG } from './portalConfig';

export const FINANCE_MODULES: FinanceModule[] = [
  {
    id: 'mod-1',
    title: 'Budgeting & Fund Allocation',
    description: `Plan budgets, allocate state devolution funds and Finance Commission grants, and monitor financial utilization in real-time across departments and ULBs.`,
    iconName: 'PieChart',
    features: [
      'Annual budget estimates & revised estimates preparation',
      'Scheme-wise & grant-wise fund allocation (XV-FC, SFC, AMRUT)',
      'Automated budget checks before expenditure voucher creation',
      'Real-time fund surrender and re-appropriation workflows'
    ],
    workflowSteps: ['Draft Estimates', 'Committee Review', 'General Body Approval', 'Head Allocation', 'Execution Tracking']
  },
  {
    id: 'mod-2',
    title: 'Revenue & Receipt Management',
    description: 'Manage revenue transactions, tax & non-tax collections, receipts and deposits through standardized, verifiable digital workflows.',
    iconName: 'TrendingUp',
    features: [
      'Property tax & advertisement fee demand generation',
      'Multi-channel payment gateway and counter cash/DD collection',
      'Automated general ledger posting upon receipt generation',
      'Defaulter tracking and recovery management reports'
    ],
    workflowSteps: ['Demand Register', 'Collection Counter', 'Bank Scroll Verification', 'GL Posting', 'Day-end Closing']
  },
  {
    id: 'mod-3',
    title: 'Expenditure & Bill Processing',
    description: 'Process contractor bills, work orders, utility invoices, and establishment charges through automated validations and controlled workflows.',
    iconName: 'FileCheck2',
    features: [
      'Contractor running bills & final bill processing against measurement books',
      'Automatic statutory deduction calculation (IT-TDS, GST-TDS, Labour Cess, Security)',
      'Establishment payroll and HKRNL contractual wages integration',
      '3-way matching of Purchase Order, Invoices, and Goods Receipt Notes'
    ],
    workflowSteps: ['Bill Inward Entry', 'Junior Engineer Scrutiny', 'Accounts Audit', 'Executive Sanction', 'Passed for Payment']
  },
  {
    id: 'mod-4',
    title: 'Voucher & Payment Management',
    description: 'Manage journal vouchers, payment processes, PFMS treasury dispatches, and financial transactions with complete digital audit trails.',
    iconName: 'Receipt',
    features: [
      'Automated generation of Receipt, Payment, Journal & Contra vouchers',
      'Maker-Checker validation with digital sign-off protocols',
      'Direct PFMS & Public Financial Management API integration for DBT/NEFT',
      'Real-time cash and bank ledger maintenance'
    ],
    workflowSteps: ['Voucher Preparation (Maker)', 'Accountant Scrutiny', 'Authorizer Approval (Checker)', 'PFMS/Bank Push', 'Payment Confirmation']
  },
  {
    id: 'mod-5',
    title: 'Reconciliation & Financial Closing',
    description: 'Support multi-bank reconciliation, monthly book closings, period locks, and systematic year-end financial verification processes.',
    iconName: 'Scale',
    features: [
      'Automated bank statement parsing and e-BRS generation',
      'Auto-matching of bank scroll transactions against cash book entries',
      'Period-end ledger closing, interest accruals, and depreciation runs',
      'Prior-period error adjustment with authorized journal entries'
    ],
    workflowSteps: ['Bank Statement Import', 'Automated Rule Matching', 'Unmatched Transaction Review', 'BRS Approval', 'Period Close Lock']
  },
  {
    id: 'mod-6',
    title: 'Reports, Compliance & Audit Trail',
    description: 'Generate standardized statutory financial statements, trial balances, and maintain immutable audit trails for AG Haryana compliance.',
    iconName: 'FileSpreadsheet',
    features: [
      'Generation of Balance Sheet, Income & Expenditure, and Receipts & Payments (NMAM format)',
      `${PORTAL_CONFIG.stats.financecommission} Finance Commission & State Finance Commission compliance certificates`,
      'Complete field-level audit trail with user timestamps and IP logging',
      'Dynamic MIS dashboards for Municipal Commissioners and Directorate'
    ],
    workflowSteps: ['Data Aggregation', 'Classification Audit', 'State MIS Compilation', 'AG Haryana Audit Export', 'Public Financial Disclosure']
  }
];
