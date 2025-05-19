"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOCApplication = undefined;

var _utils = require("egov-ui-framework/ui-config/screens/specs/utils");

var _actions = require("egov-ui-framework/ui-redux/screen-configuration/actions");

var _functions = require("./functions");

var resetFields = function resetFields(state, dispatch) {
  dispatch((0, _actions.handleScreenConfigurationFieldChange)("search", "components.div.children.NOCApplication.children.cardContent.children.appNOCAndMobNumContainer.children.applicationNo", "props.value", ""));
  dispatch((0, _actions.handleScreenConfigurationFieldChange)("search", "components.div.children.NOCApplication.children.cardContent.children.appNOCAndMobNumContainer.children.NOCNo", "props.value", ""));
  dispatch((0, _actions.handleScreenConfigurationFieldChange)("search", "components.div.children.NOCApplication.children.cardContent.children.appNOCAndMobNumContainer.children.ownerMobNo", "props.value", ""));
  dispatch((0, _actions.handleScreenConfigurationFieldChange)("search", "components.div.children.NOCApplication.children.cardContent.children.appStatusAndToFromDateContainer.children.applicationNo", "props.value", ""));
  dispatch((0, _actions.handleScreenConfigurationFieldChange)("search", "components.div.children.NOCApplication.children.cardContent.children.appStatusAndToFromDateContainer.children.fromDate", "props.value", ""));
  dispatch((0, _actions.handleScreenConfigurationFieldChange)("search", "components.div.children.NOCApplication.children.cardContent.children.appStatusAndToFromDateContainer.children.toDate", "props.value", ""));
};

var NOCApplication = exports.NOCApplication = (0, _utils.getCommonCard)({
  subHeader: (0, _utils.getCommonTitle)({
    labelName: "Search NOC Application",
    labelKey: "NOC_HOME_SEARCH_RESULTS_HEADING"
  }),
  subParagraph: (0, _utils.getCommonParagraph)({
    labelName: "Provide at least one parameter to search for an application",
    labelKey: "NOC_HOME_SEARCH_RESULTS_DESC"
  }),
  appNOCAndMobNumContainer: (0, _utils.getCommonContainer)({
    applicationNo: (0, _utils.getTextField)({
      label: {
        labelName: "Application No.",
        labelKey: "NOC_HOME_SEARCH_RESULTS_APP_NO_LABEL"
      },
      placeholder: {
        labelName: "Enter Application No.",
        labelKey: "NOC_HOME_SEARCH_RESULTS_APP_NO_PLACEHOLDER"
      },
      gridDefination: {
        xs: 12,
        sm: 4
      },
      required: false,
      pattern: /^[a-zA-Z0-9-]*$/i,
      errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",
      jsonPath: "searchScreen.applicationNumber"
    }),
    NOCNo: (0, _utils.getTextField)({
      label: {
        labelName: "NOC No.",
        labelKey: "NOC_HOME_SEARCH_RESULTS_NOC_NO_LABEL"
      },
      placeholder: {
        labelName: "Enter NOC No.",
        labelKey: "NOC_HOME_SEARCH_RESULTS_NOC_NO_PLACEHOLDER"
      },
      gridDefination: {
        xs: 12,
        sm: 4
      },
      required: false,
      pattern: /^[a-zA-Z0-9-]*$/i,
      errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",
      jsonPath: "searchScreen.fireNOCNumber"
    }),
    ownerMobNo: (0, _utils.getTextField)({
      label: {
        labelName: "Owner Mobile No.",
        labelKey: "NOC_HOME_SEARCH_RESULTS_OWN_MOB_LABEL"
      },
      placeholder: {
        labelName: "Enter your mobile No.",
        labelKey: "NOC_HOME_SEARCH_RESULTS_OWN_MOB_PLACEHOLDER"
      },
      gridDefination: {
        xs: 12,
        sm: 4
      },
      iconObj: {
        label: "+91 |",
        position: "start"
      },
      required: false,
      pattern: (0, _utils.getPattern)("MobileNo"),
      jsonPath: "searchScreen.mobileNumber",
      errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG"
    })
  }),
  appStatusAndToFromDateContainer: (0, _utils.getCommonContainer)({
    applicationNo: {
      uiFramework: "custom-containers-local",
      moduleName: "egov-firenoc",
      componentPath: "AutosuggestContainer",
      props: {
        label: {
          labelName: "Application status",
          labelKey: "NOC_APPLICATION_NOC_LABEL"
        },
        placeholder: {
          labelName: "Select Application Status",
          labelKey: "NOC_APPLICATION_PLACEHOLDER"
        },
        localePrefix: {
          moduleName: "WF",
          masterName: "FIRENOC"
        },
        jsonPath: "searchScreen.status",
        sourceJsonPath: "applyScreenMdmsData.searchScreen.status",
        required: false,
        isClearable: true,
        labelsFromLocalisation: true,
        className: "autocomplete-dropdown"
      },
      jsonPath: "searchScreen.status",
      gridDefination: {
        xs: 12,
        sm: 4
      }
    },

    fromDate: (0, _utils.getDateField)({
      label: { labelName: "From Date", labelKey: "NOC_FROM_DATE_LABEL" },
      placeholder: {
        labelName: "From Date",
        labelKey: "NOC_FROM_DATE_PLACEHOLDER"
      },
      jsonPath: "searchScreen.fromDate",
      gridDefination: {
        xs: 12,
        sm: 4
      },
      pattern: (0, _utils.getPattern)("Date"),
      errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",
      required: false
    }),

    toDate: (0, _utils.getDateField)({
      label: { labelName: "To Date", labelKey: "NOC_TO_DATE_LABEL" },
      placeholder: {
        labelName: "To Date",
        labelKey: "NOC_TO_DATE_PLACEHOLDER"
      },
      jsonPath: "searchScreen.toDate",
      gridDefination: {
        xs: 12,
        sm: 4
      },
      pattern: (0, _utils.getPattern)("Date"),
      errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",
      required: false
    })
  }),

  button: (0, _utils.getCommonContainer)({
    buttonContainer: (0, _utils.getCommonContainer)({
      resetButton: {
        componentPath: "Button",
        gridDefination: {
          xs: 12,
          sm: 6
          // align: "center"
        },
        props: {
          variant: "outlined",
          style: {
            color: "#FE7A51",
            borderColor: "#FE7A51",
            width: "220px",
            height: "48px",
            margin: "8px",
            float: "right"
          }
        },
        children: {
          buttonLabel: (0, _utils.getLabel)({
            labelName: "Reset",
            labelKey: "NOC_HOME_SEARCH_RESET_BUTTON"
          })
        },
        onClickDefination: {
          action: "condition",
          callBack: resetFields
        }
      },
      searchButton: {
        componentPath: "Button",
        gridDefination: {
          xs: 12,
          sm: 6
          // align: "center"
        },
        props: {
          variant: "contained",
          style: {
            color: "white",
            margin: "8px",
            backgroundColor: "rgba(0, 0, 0, 0.6000000238418579)",
            borderRadius: "2px",
            width: "220px",
            height: "48px"
          }
        },
        children: {
          buttonLabel: (0, _utils.getLabel)({
            labelName: "Search",
            labelKey: "NOC_HOME_SEARCH_RESULTS_BUTTON_SEARCH"
          })
        },
        onClickDefination: {
          action: "condition",
          callBack: _functions.searchApiCall
        }
      }
    }, { className: "firenoc-btn-search-reset" })
  })
}, {
  style: { overflow: "visible" }
});