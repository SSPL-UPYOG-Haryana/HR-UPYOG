"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nocSummary = exports.nocSummaryDetail = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _utils = require("egov-ui-framework/ui-config/screens/specs/utils");

var _index = require("../../utils/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nocSummaryDetail = exports.nocSummaryDetail = {
  nocType: (0, _utils.getLabelWithValue)({
    labelName: "NOC Type",
    labelKey: "NOC_TYPE_LABEL"
  }, {
    jsonPath: "FireNOCs[0].fireNOCDetails.fireNOCType",
    callBack: _index.checkValueForNA
  }),
  fireNocNumber: (0, _utils.getLabelWithValue)({
    labelName: "Provisional fire NoC number",
    labelKey: "NOC_PROVISIONAL_FIRE_NOC_NO_LABEL"
  }, {
    jsonPath: "FireNOCs[0].fireNOCNumber", //"FireNOCs[0].provisionFireNOCNumber"
    callBack: _index.checkValueForNA
  })
};

var nocSummary = exports.nocSummary = (0, _utils.getCommonGrayCard)({
  header: {
    uiFramework: "custom-atoms",
    componentPath: "Container",
    props: {
      style: { marginBottom: "10px" }
    },
    children: {
      header: (0, _extends3.default)({
        gridDefination: {
          xs: 8
        }
      }, (0, _utils.getCommonSubHeader)({
        labelName: "NOC Details",
        labelKey: "NOC_NOC_DETAILS_HEADER"
      })),
      editSection: {
        componentPath: "Button",
        props: {
          color: "primary",
          style: {
            marginTop: "-10px",
            marginRight: "-18px"
          }
        },
        gridDefination: {
          xs: 4,
          align: "right"
        },
        children: {
          editIcon: {
            uiFramework: "custom-atoms",
            componentPath: "Icon",
            props: {
              iconName: "edit"
            }
          },
          buttonLabel: (0, _utils.getLabel)({
            labelName: "Edit",
            labelKey: "NOC_SUMMARY_EDIT"
          })
        },
        onClickDefination: {
          action: "condition",
          callBack: function callBack(state, dispatch) {
            (0, _index.gotoApplyWithStep)(state, dispatch, 0);
          }
        }
      }
    }
  },
  body: (0, _utils.getCommonContainer)(nocSummaryDetail)
});