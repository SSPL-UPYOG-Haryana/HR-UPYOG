"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _api = require("egov-ui-kit/utils/api");

var _formUtils = require("egov-ui-kit/utils/PTCommon/FormWizardUtils/formUtils");

var _translationNode = require("egov-ui-kit/utils/translationNode");

var _translationNode2 = _interopRequireDefault(_translationNode);

var _MenuItem = require("material-ui/MenuItem");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _SelectField = require("material-ui/SelectField");

var _SelectField2 = _interopRequireDefault(_SelectField);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _createReceipt = require("../../../PaymentStatus/Components/createReceipt");

var _createReceipt2 = _interopRequireDefault(_createReceipt);

var _receiptsPDF = require("../../../PaymentStatus/Components/receiptsPDF");

var _receiptsPDF2 = _interopRequireDefault(_receiptsPDF);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  customWidth: {
    width: 120,
    backgroundColor: "#F0F0F0",
    height: "25px",
    paddingLeft: "10px"
  },
  iconStyle: { top: "-13px", fill: "#484848", width: "35px" },
  underlineStyle: { display: "none" },
  hintStyle: { color: "#484848", top: 0 }
};

var onSelectFieldChange = function onSelectFieldChange(event, key, payload, history, item) {
  switch (payload) {
    case "Re-Assess":
      history && history.push((0, _formUtils.getPropertyLink)(item.propertyId, item.tenantId, "reassess", item.financialYear, item.assessmentNo));
      break;
    case "Download Receipt":
      //Need 1. Property, 2. Property Details, 3. receiptdetails
      // call receiptcreate func
      downloadReceipt(item);
      break;
    case "Complete Payment":
      history && history.push((0, _formUtils.getPropertyLink)(item.propertyId, item.tenantId, "assess", item.financialYear, item.assessmentNo, true));
      break;
  }
};

var downloadReceipt = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(item) {
    var queryObj, payload, receiptDetails;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryObj = [{ key: "tenantId", value: item.tenantId }, { key: "consumerCode", value: item.consumerCode }];
            _context.prev = 1;
            _context.next = 4;
            return (0, _api.httpRequest)("/collection-services/receipts/_search", "_search", queryObj, {}, [], { ts: 0 });

          case 4:
            payload = _context.sent;
            receiptDetails = payload && payload.Receipt && (0, _createReceipt2.default)(item.property, item.propertyDetails, payload.Receipt[0], item.localizationLabels, item.cities);

            receiptDetails && (0, _receiptsPDF2.default)("pt-reciept-citizen", receiptDetails);
            _context.next = 11;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 9]]);
  }));

  return function downloadReceipt(_x) {
    return _ref.apply(this, arguments);
  };
}();

var DropDown = function DropDown(_ref2) {
  var history = _ref2.history,
      item = _ref2.item;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _SelectField2.default,
      {
        autoWidth: true,
        className: "pt-action-dropDown",
        hintText: _react2.default.createElement(_translationNode2.default, { label: "PT_SELECT_ACTION" }),
        underlineStyle: styles.underlineStyle,
        iconStyle: styles.iconStyle,
        style: styles.customWidth,
        hintStyle: styles.hintStyle,
        onChange: function onChange(event, key, payload) {
          return onSelectFieldChange(event, key, payload, history, item);
        }
      },
      _react2.default.createElement(_MenuItem2.default, { value: "Download Receipt", primaryText: "Download Receipt" }),
      _react2.default.createElement(_MenuItem2.default, { value: "Re-Assess", primaryText: "Re-Assess" }),
      item.status === "Partially Paid" && _react2.default.createElement(_MenuItem2.default, { value: "Complete Payment", primaryText: "Complete Payment" })
    )
  );
};

exports.default = DropDown;