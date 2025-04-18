"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printEchallan = exports.downloadEchallan = exports.getTextToLocalMapping = exports.downloadHelpFile = exports.setServiceCategory = exports.getEmployeeName = exports.getLabelOnlyValue = exports.getCommonGrayCard = exports.showHideAdhocPopup = exports.gotoApplyWithStep = exports.getFinancialYearDates = exports.getCurrentFinancialYear = exports.convertEpochToDate = exports.ifUserRoleExists = exports.sortByEpoch = exports.getEpochForDate = exports.getMdmsData = exports.convertDateToEpoch = exports.validateFields = exports.getTranslatedLabel = exports.getFeesEstimateCard = exports.transformById = exports.getCommonApplyFooter = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _utils = require("egov-ui-framework/ui-config/screens/specs/utils");

var _actions = require("egov-ui-framework/ui-redux/app/actions");

var _actions2 = require("egov-ui-framework/ui-redux/screen-configuration/actions");

var _utils2 = require("egov-ui-framework/ui-redux/screen-configuration/utils");

var _api = require("egov-ui-framework/ui-utils/api");

var _commons = require("egov-ui-framework/ui-utils/commons");

var _localStorageUtils = require("egov-ui-kit/utils/localStorageUtils");

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _set = require("lodash/set");

var _set2 = _interopRequireDefault(_set);

var _commons2 = require("egov-common/ui-utils/commons");

var _orderBy = require("lodash/orderBy");

var _orderBy2 = _interopRequireDefault(_orderBy);

var _generatePDF = require("egov-ui-kit/utils/pdfUtils/generatePDF");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCommonApplyFooter = exports.getCommonApplyFooter = function getCommonApplyFooter(children) {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    props: {
      className: "apply-wizard-footer"
    },
    children: children
  };
};

var transformById = exports.transformById = function transformById(payload, id) {
  return payload && payload.reduce(function (result, item) {
    result[item[id]] = (0, _extends3.default)({}, item);

    return result;
  }, {});
};

var getFeesEstimateCard = function getFeesEstimateCard(props) {
  var sourceJsonPath = props.sourceJsonPath,
      rest = (0, _objectWithoutProperties3.default)(props, ["sourceJsonPath"]);

  return {
    uiFramework: "custom-containers-local",
    moduleName: "egov-uc",
    componentPath: "EstimateCardContainer",
    props: (0, _extends3.default)({
      sourceJsonPath: sourceJsonPath
    }, rest)
  };
};

exports.getFeesEstimateCard = getFeesEstimateCard;
var getTranslatedLabel = exports.getTranslatedLabel = function getTranslatedLabel(labelKey, localizationLabels) {
  var translatedLabel = null;
  if (localizationLabels && localizationLabels.hasOwnProperty(labelKey)) {
    translatedLabel = localizationLabels[labelKey];
    if (translatedLabel && (typeof translatedLabel === "undefined" ? "undefined" : (0, _typeof3.default)(translatedLabel)) === "object" && translatedLabel.hasOwnProperty("message")) translatedLabel = translatedLabel.message;
  }
  return translatedLabel || labelKey;
};

var validateFields = exports.validateFields = function validateFields(objectJsonPath, state, dispatch, screen
//screen = "apply"
// screen = "newCollection"
) {
  var fields = (0, _get2.default)(state.screenConfiguration.screenConfig[screen], objectJsonPath, {});
  console.info("children==", fields);
  var isFormValid = true;
  for (var variable in fields) {

    if (fields.hasOwnProperty(variable)) {
      if (fields[variable] && fields[variable].props && (fields[variable].props.disabled === undefined || !fields[variable].props.disabled) && !(0, _utils2.validate)(screen, (0, _extends3.default)({}, fields[variable], {
        value: (0, _get2.default)(state.screenConfiguration.preparedFinalObject, fields[variable].jsonPath)
      }), dispatch, true)) {
        isFormValid = false;
      }
    }
  }
  return isFormValid;
};

var convertDateToEpoch = exports.convertDateToEpoch = function convertDateToEpoch(dateString) {
  var dayStartOrEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "dayend";

  //example input format : "2018-10-02"
  try {
    var parts = dateString.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
    var DateObj = new Date(Date.UTC(parts[1], parts[2] - 1, parts[3]));
    DateObj.setMinutes(DateObj.getMinutes() + DateObj.getTimezoneOffset());
    if (dayStartOrEnd === "dayend") {
      DateObj.setHours(DateObj.getHours() + 24);
      DateObj.setSeconds(DateObj.getSeconds() - 1);
    }
    return DateObj.getTime();
  } catch (e) {
    return dateString;
  }
};

var getMdmsData = exports.getMdmsData = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(queryObject) {
    var response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _api.httpRequest)("post", "egov-mdms-service/v1/_get", "", queryObject);

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);

            console.log(_context.t0);
            return _context.abrupt("return", {});

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 7]]);
  }));

  return function getMdmsData(_x2) {
    return _ref.apply(this, arguments);
  };
}();

var getEpochForDate = exports.getEpochForDate = function getEpochForDate(date) {
  if (typeof date === "string") {
    var dateSplit = date.split("/");
    return new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]).getTime();
  }
};

var sortByEpoch = exports.sortByEpoch = function sortByEpoch(data, order) {
  if (order) {
    return data.sort(function (a, b) {
      return a[a.length - 1] - b[b.length - 1];
    });
  } else {
    return data.sort(function (a, b) {
      return b[b.length - 1] - a[a.length - 1];
    });
  }
};

var ifUserRoleExists = exports.ifUserRoleExists = function ifUserRoleExists(role) {
  var userInfo = JSON.parse((0, _localStorageUtils.getUserInfo)());
  var roles = (0, _get2.default)(userInfo, "roles");
  var roleCodes = roles ? roles.map(function (role) {
    return role.code;
  }) : [];
  if (roleCodes.indexOf(role) > -1) {
    return true;
  } else return false;
};

var convertEpochToDate = exports.convertEpochToDate = function convertEpochToDate(dateEpoch) {
  if (dateEpoch == null || dateEpoch == '' || dateEpoch == undefined) {
    return 'NA';
  }
  var dateFromApi = new Date(dateEpoch);
  var month = dateFromApi.getMonth() + 1;
  var day = dateFromApi.getDate();
  var year = dateFromApi.getFullYear();
  month = (month > 9 ? "" : "0") + month;
  day = (day > 9 ? "" : "0") + day;
  return day + "/" + month + "/" + year;
};

var getCurrentFinancialYear = exports.getCurrentFinancialYear = function getCurrentFinancialYear() {
  var today = new Date();
  var curMonth = today.getMonth();
  var fiscalYr = "";
  if (curMonth > 3) {
    var nextYr1 = (today.getFullYear() + 1).toString();
    fiscalYr = today.getFullYear().toString() + "-" + nextYr1;
  } else {
    var nextYr2 = today.getFullYear().toString();
    fiscalYr = (today.getFullYear() - 1).toString() + "-" + nextYr2;
  }
  return fiscalYr;
};

var getFinancialYearDates = exports.getFinancialYearDates = function getFinancialYearDates(format, et) {
  /** Return the starting date and ending date (1st April to 31st March)
   *  of the financial year of the given date in ET. If no ET given then
   *  return the dates for the current financial year */
  var date = !et ? new Date() : new Date(et);
  var curMonth = date.getMonth();
  var financialDates = { startDate: "NA", endDate: "NA" };
  if (curMonth > 3) {
    switch (format) {
      case "dd/mm/yyyy":
        financialDates.startDate = "01/04/" + date.getFullYear().toString();
        financialDates.endDate = "31/03/" + (date.getFullYear() + 1).toString();
        break;
      case "yyyy-mm-dd":
        financialDates.startDate = date.getFullYear().toString() + "-04-01";
        financialDates.endDate = (date.getFullYear() + 1).toString() + "-03-31";
        break;
    }
  } else {
    switch (format) {
      case "dd/mm/yyyy":
        financialDates.startDate = "01/04/" + (date.getFullYear() - 1).toString();
        financialDates.endDate = "31/03/" + date.getFullYear().toString();
        break;
      case "yyyy-mm-dd":
        financialDates.startDate = (date.getFullYear() - 1).toString() + "-04-01";
        financialDates.endDate = date.getFullYear().toString() + "-03-31";
        break;
    }
  }
  return financialDates;
};

var gotoApplyWithStep = exports.gotoApplyWithStep = function gotoApplyWithStep(state, dispatch, step) {
  var applicationNumber = (0, _commons.getQueryArg)(window.location.href, "applicationNumber");
  var applicationNumberQueryString = applicationNumber ? "&applicationNumber=" + applicationNumber : "";
  var applyUrl = process.env.REACT_APP_SELF_RUNNING === "true" ? "/egov-ui-framework/abg/apply?step=" + step + applicationNumberQueryString : "/abg/apply?step=" + step + applicationNumberQueryString;
  dispatch((0, _actions.setRoute)(applyUrl));
};

var showHideAdhocPopup = exports.showHideAdhocPopup = function showHideAdhocPopup(state, dispatch) {
  var toggle = (0, _get2.default)(state.screenConfiguration.screenConfig["search"], "components.adhocDialog.props.open", false);
  dispatch((0, _actions2.handleScreenConfigurationFieldChange)("search", "components.adhocDialog", "props.open", !toggle));
};

var getCommonGrayCard = exports.getCommonGrayCard = function getCommonGrayCard(children) {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Container",
    children: {
      body: {
        uiFramework: "custom-atoms",
        componentPath: "Div",
        children: {
          ch1: (0, _utils.getCommonCard)(children, {
            style: {
              backgroundColor: "rgb(242, 242, 242)",
              boxShadow: "none",
              borderRadius: 0,
              overflow: "visible"
            }
          })
        },
        gridDefination: {
          xs: 12
        }
      }
    },
    gridDefination: {
      xs: 12
    }
  };
};

var getLabelOnlyValue = exports.getLabelOnlyValue = function getLabelOnlyValue(value) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    gridDefination: {
      xs: 6,
      sm: 4
    },
    props: (0, _extends3.default)({
      style: {
        marginBottom: "16px"
      }
    }, props),
    children: {
      value: (0, _utils.getCommonCaption)(value)
    }
  };
};

var getEmployeeName = exports.getEmployeeName = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(queryObject) {
    var employeeName, payload;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            employeeName = "";
            _context2.next = 4;
            return (0, _api.httpRequest)("post", "/egov-hrms/employees/_search", "", queryObject);

          case 4:
            payload = _context2.sent;

            if (payload && payload.Employees && payload.Employees.length > 0) {
              employeeName = payload.Employees[0].user.name;
            }
            return _context2.abrupt("return", employeeName);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);

            console.log(_context2.t0.message);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 9]]);
  }));

  return function getEmployeeName(_x4) {
    return _ref2.apply(this, arguments);
  };
}();

var setServiceCategory = exports.setServiceCategory = function setServiceCategory(businessServiceData, dispatch, state) {
  var setCategory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var nestedServiceData = {};
  businessServiceData.forEach(function (item) {
    if (item.code && item.code.indexOf(".") > 0) {
      if (nestedServiceData[item.code.split(".")[0]]) {
        var child = (0, _get2.default)(nestedServiceData, item.code.split(".")[0] + ".child", []);
        child.push(item);
        (0, _set2.default)(nestedServiceData, item.code.split(".")[0] + ".child", child);
      } else {
        (0, _set2.default)(nestedServiceData, item.code.split(".")[0] + ".code", item.code.split(".")[0]);
        (0, _set2.default)(nestedServiceData, item.code.split(".")[0] + ".child[0]", item);
      }
    } else {
      (0, _set2.default)(nestedServiceData, "" + item.code, item);
    }
  });
  console.log("nestedServiceData", nestedServiceData);
  dispatch((0, _actions2.prepareFinalObject)("applyScreenMdmsData.nestedServiceData", nestedServiceData));
  var serviceCategories = Object.values(nestedServiceData).filter(function (item) {
    return item.code;
  });
  setCategory && dispatch((0, _actions2.prepareFinalObject)("applyScreenMdmsData.serviceCategories", serviceCategories));
  var editingMode = (0, _get2.default)(state.screenConfiguration, "preparedFinalObject.Challan[0].id", null);
  if (editingMode != null) {
    dispatch((0, _actions2.handleScreenConfigurationFieldChange)("newCollection", "components.div.children.newCollectionServiceDetailsCard.children.cardContent.children.searchContainer.children.serviceCategory", "props.value", (0, _get2.default)(state.screenConfiguration, "preparedFinalObject.Challan[0].consumerType", null)));
    // dispatch(
    //   handleField(
    //     "newCollection",
    //     "components.div.children.newCollectionServiceDetailsCard.children.cardContent.children.searchContainer.children.serviceType",
    //     "props.value",
    //     get(
    //       state.screenConfiguration,
    //       "preparedFinalObject.Challan[0].serviceType",
    //       null
    //     )
    //   )
    // );
  }
};

var downloadHelpFile = exports.downloadHelpFile = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(state, dispatch) {
    var helpurl;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            helpurl = (0, _get2.default)(state.screenConfiguration.preparedFinalObject, "helpFileUrl", "");
            // window.open(helpurl,"_blank");

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function downloadHelpFile(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

var getTextToLocalMapping = exports.getTextToLocalMapping = function getTextToLocalMapping(label) {
  var localisationLabels = (0, _commons.getTransformedLocalStorgaeLabels)();
  switch (label) {
    case "Receipt No.":
      return (0, _commons.getLocaleLabels)("Receipt No", "UC_COMMON_TABLE_COL_RECEIPT_NO", localisationLabels);
    case "Payee Name":
      return (0, _commons.getLocaleLabels)("Consumer Name", "UC_COMMON_TABLE_COL_PAYEE_NAME", localisationLabels);
    case "Service Type":
      return (0, _commons.getLocaleLabels)("Service Category", "UC_SERVICE_TYPE_LABEL", localisationLabels);
    case "Date":
      return (0, _commons.getLocaleLabels)("Receipt Date", "UC_COMMON_TABLE_COL_DATE", localisationLabels);
    case "Amount[INR]":
      return (0, _commons.getLocaleLabels)("Amount Paid[INR]", "UC_COMMON_TABLE_COL_AMOUNT", localisationLabels);
    case "Status":
      return (0, _commons.getLocaleLabels)("Status", "UC_COMMON_TABLE_COL_STATUS", localisationLabels);
    case "BILLINGSERVICE_BUSINESSSERVICE_PT":
      return (0, _commons.getLocaleLabels)("Property Tax", "BILLINGSERVICE_BUSINESSSERVICE_PT", localisationLabels);
    default:
      return (0, _commons.getLocaleLabels)(label, label, localisationLabels);
  }
};

var downloadEchallan = exports.downloadEchallan = function downloadEchallan(queryObj, fileName) {
  (0, _generatePDF.searchAndDownloadPdf)('/egov-pdf/download/UC/mcollect-challan', queryObj, fileName);
};

var printEchallan = exports.printEchallan = function printEchallan(queryObj) {
  (0, _generatePDF.searchAndPrintPdf)('/egov-pdf/download/UC/mcollect-challan', queryObj);
};