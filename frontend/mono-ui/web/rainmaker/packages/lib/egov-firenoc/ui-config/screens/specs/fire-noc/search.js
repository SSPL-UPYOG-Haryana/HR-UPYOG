"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _utils = require("egov-ui-framework/ui-config/screens/specs/utils");

var _fireNocApplication = require("./searchResource/fireNocApplication");

var _utils2 = require("../utils");

var _commons = require("egov-ui-framework/ui-utils/commons");

var _pendingApprovals = require("./searchResource/pendingApprovals");

var _searchResults = require("./searchResource/searchResults");

var _localStorageUtils = require("egov-ui-kit/utils/localStorageUtils");

var _find = require("lodash/find");

var _find2 = _interopRequireDefault(_find);

var _set = require("lodash/set");

var _set2 = _interopRequireDefault(_set);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _actions = require("egov-ui-framework/ui-redux/screen-configuration/actions");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { getRequiredDocuments } from "./requiredDocuments/reqDocs";

var hasButton = (0, _commons.getQueryArg)(window.location.href, "hasButton");
var enableButton = true;
enableButton = hasButton && hasButton === "false" ? false : true;

var header = (0, _utils.getCommonHeader)({
  labelName: "Fire NOC",
  labelKey: "NOC_COMMON_NOC"
});

var pageResetAndChange = function pageResetAndChange(state, dispatch) {
  dispatch((0, _actions.prepareFinalObject)("FireNOCs", [{ "fireNOCDetails.fireNOCType": "NEW" }]));
  // dispatch(setRoute("/tradelicence/apply"));
};

var NOCSearchAndResult = {
  uiFramework: "material-ui",
  name: "search",
  beforeInitScreen: function beforeInitScreen(action, state, dispatch) {
    //  resetFields(state, dispatch);
    dispatch((0, _actions.unMountScreen)("acknowledgement"));
    dispatch((0, _actions.unMountScreen)("apply"));
    dispatch((0, _actions.unMountScreen)("pay"));
    dispatch((0, _actions.unMountScreen)("summary"));
    var tenantId = (0, _localStorageUtils.getTenantId)();
    var BSqueryObject = [{ key: "tenantId", value: tenantId }, { key: "businessServices", value: "FIRENOC" }];
    (0, _commons.setBusinessServiceDataToLocalStorage)(BSqueryObject, dispatch);
    var businessServiceData = JSON.parse((0, _localStorageUtils.localStorageGet)("businessServiceData"));
    var data = (0, _find2.default)(businessServiceData, { businessService: "FIRENOC" });

    var _ref = data || [],
        states = _ref.states;

    if (states && states.length > 0) {
      var status = states.map(function (item, index) {
        return {
          code: item.state
        };
      });
      dispatch((0, _actions.prepareFinalObject)("applyScreenMdmsData.searchScreen.status", status.filter(function (item) {
        return item.code != null;
      })));
    }
    var moduleDetails = [{
      moduleName: "FireNoc",
      masterDetails: [{ name: "Documents" }]
    }];

    (0, _commons.getRequiredDocData)(action, dispatch, moduleDetails);
    (0, _set2.default)(state, "screenConfiguration.preparedFinalObject.searchScreen", {});
    dispatch((0, _actions.prepareFinalObject)("DynamicMdms", {}));
    return action;
  },
  components: {
    div: {
      uiFramework: "custom-atoms",
      componentPath: "Form",
      props: {
        className: "common-div-css",
        id: "search"
      },
      children: {
        headerDiv: {
          uiFramework: "custom-atoms",
          componentPath: "Container",

          children: {
            header: (0, _extends3.default)({
              gridDefination: {
                xs: 12,
                sm: 6
              }
            }, header),
            newApplicationButton: {
              componentPath: "Button",
              gridDefination: {
                xs: 12,
                sm: 6,
                align: "right"
              },
              visible: enableButton,
              props: {
                variant: "contained",
                color: "primary",
                style: {
                  color: "white",
                  borderRadius: "2px",
                  width: "250px",
                  height: "48px"
                }
              },

              children: {
                plusIconInsideButton: {
                  uiFramework: "custom-atoms",
                  componentPath: "Icon",
                  props: {
                    iconName: "add",
                    style: {
                      fontSize: "24px"
                    }
                  }
                },

                buttonLabel: (0, _utils.getLabel)({
                  labelName: "NEW APPLICATION",
                  labelKey: "NOC_HOME_SEARCH_RESULTS_NEW_APP_BUTTON"
                })
              },
              onClickDefination: {
                action: "condition",
                callBack: function callBack(state, dispatch) {
                  pageResetAndChange(state, dispatch);
                  (0, _commons.showHideAdhocPopup)(state, dispatch, "search");
                }
              },
              roleDefination: {
                rolePath: "user-info.roles",
                roles: ["NOC_CEMP", "SUPERUSER"]
              }
            }
          }
        },
        pendingApprovals: _pendingApprovals.pendingApprovals,
        NOCApplication: _fireNocApplication.NOCApplication,
        breakAfterSearch: (0, _utils.getBreak)(),
        // progressStatus,
        searchResults: _searchResults.searchResults
      }
    },
    adhocDialog: {
      uiFramework: "custom-containers",
      componentPath: "DialogContainer",
      props: {
        open: false,
        maxWidth: false,
        screenKey: "search"
      },
      children: {
        popup: {}
      }
    }
  }
};

exports.default = NOCSearchAndResult;