/**
 * Finance Sidebar Menu Order Configuration
 *
 * Lower numbers indicate higher display priority.
 * Keys correspond to normalized API path segments.
 */

export const MENU_ORDER = {
  dashboard: 1,
  inbox: 2,
  masters: 3,
  expenditureaccounting: 4,
  journalvoucher: 5,
  general: 6,
  administration: 7,
  budgetandcontrols: 8,
  revenueaccounting: 9,
  yearendactivities: 10,
  reportgeneration: 11,
  migration: 12,
};

export const MASTERS_ORDER = {
  chartofaccounts: 1,
  subledgerconfiguration: 2,
  deductions: 3,
  fund: 4,
  scheme: 5,
  function: 6,
  bank: 7,
  work: 8,
  contractor: 9,
  supplier: 10,
  budgetcontroltype: 11,
  financialyear: 12,
  bankaccountmapping: 13,
};

export const BILLS_ACCOUNTING_ORDER = {
  expensebill: 1,
  contractorbill: 2,
  supplierbill: 3,
  viewbills: 4,
  createvoucher: 5,
};

export const PAYMENTS_ORDER = {
  billpayment: 1,
  directbankpayments: 2,
  rtgsassignment: 3,
  chequeassignment: 4,
  surrenderreassigncheque: 5,
  surrenderrtgs: 6,
};