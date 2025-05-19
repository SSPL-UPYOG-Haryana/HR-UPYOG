"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require("egov-ui-framework/ui-config/screens/specs/utils");

var g8Details = (0, _utils.getCommonGrayCard)({
  header: (0, _utils.getCommonSubHeader)({
    labelName: "GEN/G8 Receipt Details (Optional)",
    labelKey: "NOC_PAYMENT_RCPT_DETAILS"
  }),
  receiptDetailsCardContainer: (0, _utils.getCommonContainer)({
    receiptNo: (0, _utils.getTextField)({
      label: {
        labelName: "GEN/G8 Receipt No.",
        labelKey: "NOC_PAYMENT_RCPT_NO_LABEL"
      },
      placeholder: {
        labelName: "Enter GEN/G8 Receipt No.",
        labelKey: "NOC_PAYMENT_RCPT_NO_PLACEHOLDER"
      },
      // Pattern validation for the reciept
      jsonPath: "ReceiptTemp[0].Bill[0].billDetails[0].manualReceiptNumber"
    }),
    receiptIssueDate: (0, _utils.getDateField)({
      label: {
        labelName: "GEN/G8 Receipt Issue Date",
        labelKey: "NOC_PAYMENT_RECEIPT_ISSUE_DATE_LABEL"
      },
      placeholder: {
        labelName: "dd/mm/yy",
        labelKey: "NOC_PAYMENT_RECEIPT_ISSUE_DATE_PLACEHOLDER"
      },
      pattern: (0, _utils.getPattern)("Date"),
      errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",
      jsonPath: "ReceiptTemp[0].Bill[0].billDetails[0].manualReceiptDate"
    })
  })
});

exports.default = g8Details;