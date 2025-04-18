"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propertyLocationDetails = exports.onchangeOfTenant = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _utils = require("egov-ui-framework/ui-config/screens/specs/utils");

var _actions = require("egov-ui-framework/ui-redux/screen-configuration/actions");

var _localStorageUtils = require("egov-ui-kit/utils/localStorageUtils");

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _api = require("../../../../../ui-utils/api");

var _actions2 = require("egov-ui-kit/redux/app/actions");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onchangeOfTenant = exports.onchangeOfTenant = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(action, state, dispatch) {
    var payload, mohallaData, mohallaLocalePrefix, fireStationsList, fireStations;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch((0, _actions.prepareFinalObject)("FireNOCs[0].fireNOCDetails.propertyDetails.address.city", action.value));
            _context.prev = 1;

            dispatch((0, _actions2.fetchLocalizationLabel)((0, _localStorageUtils.getLocale)(), action.value, action.value));
            _context.next = 5;
            return (0, _api.httpRequest)("post", "/egov-location/location/v11/boundarys/_search?hierarchyTypeCode=REVENUE&boundaryType=Locality", "_search", [{ key: "tenantId", value: action.value }], {});

          case 5:
            payload = _context.sent;
            mohallaData = payload && payload.TenantBoundary[0] && payload.TenantBoundary[0].boundary && payload.TenantBoundary[0].boundary.reduce(function (result, item) {
              result.push((0, _extends3.default)({}, item, {
                name: action.value.toUpperCase().replace(/[.]/g, "_") + "_REVENUE_" + item.code.toUpperCase().replace(/[._:-\s\/]/g, "_")
              }));
              return result;
            }, []);


            dispatch((0, _actions.prepareFinalObject)("applyScreenMdmsData.tenant.localities", mohallaData));
            dispatch((0, _actions.handleScreenConfigurationFieldChange)("apply", "components.div.children.formwizardSecondStep.children.propertyLocationDetails.children.cardContent.children.propertyDetailsConatiner.children.propertyMohalla", "props.suggestions", mohallaData));
            mohallaLocalePrefix = {
              moduleName: action.value,
              masterName: "REVENUE"
            };

            dispatch((0, _actions.handleScreenConfigurationFieldChange)("apply", "components.div.children.formwizardSecondStep.children.propertyLocationDetails.children.cardContent.children.propertyDetailsConatiner.children.propertyMohalla", "props.localePrefix", mohallaLocalePrefix));

            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);

            console.log(_context.t0);

          case 16:
            // Set Firestation based on ULBl
            fireStationsList = (0, _get2.default)(state, "screenConfiguration.preparedFinalObject.applyScreenMdmsData.firenoc.FireStations", []);
            fireStations = fireStationsList.filter(function (firestation) {
              return firestation.baseTenantId === action.value;
            });

            dispatch((0, _actions.handleScreenConfigurationFieldChange)("apply", "components.div.children.formwizardSecondStep.children.propertyLocationDetails.children.cardContent.children.propertyDetailsConatiner.children.propertyFirestation", "props.data", fireStations));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 13]]);
  }));

  return function onchangeOfTenant(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var showHideMapPopup = function showHideMapPopup(state, dispatch) {
  var toggle = (0, _get2.default)(state.screenConfiguration.screenConfig["apply"], "components.div.children.formwizardSecondStep.children.propertyLocationDetails.children.cardContent.children.mapsDialog.props.open", false);
  dispatch((0, _actions.handleScreenConfigurationFieldChange)("apply", "components.div.children.formwizardSecondStep.children.propertyLocationDetails.children.cardContent.children.mapsDialog", "props.open", !toggle));
};

var getMapLocator = function getMapLocator(textSchema) {
  return {
    uiFramework: "custom-molecules-local",
    moduleName: "egov-firenoc",
    componentPath: "MapLocator",
    props: {}
  };
};

var getDetailsFromProperty = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(state, dispatch) {
    var propertyId, tenantId, payload;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            propertyId = (0, _get2.default)(state.screenConfiguration.preparedFinalObject, "FireNOCs[0].fireNOCDetails.propertyDetails.propertyId", "");
            tenantId = (0, _localStorageUtils.getTenantId)();

            if (tenantId) {
              _context2.next = 6;
              break;
            }

            dispatch((0, _actions.toggleSnackbar)(true, {
              labelName: "Please select city to search by property id !!",
              labelKey: "ERR_SELECT_CITY_TO_SEARCH_PROPERTY_ID"
            }, "warning"));
            return _context2.abrupt("return");

          case 6:
            if (!propertyId) {
              _context2.next = 11;
              break;
            }

            _context2.next = 9;
            return (0, _api.httpRequest)("post", "/property-services/property/_search?tenantId=" + tenantId + "&propertyIds=" + propertyId, "_search", [], {});

          case 9:
            payload = _context2.sent;

            if (payload && payload.Properties && payload.Properties.hasOwnProperty("length")) {
              if (payload.Properties.length === 0) {
                dispatch((0, _actions.toggleSnackbar)(true, {
                  labelName: "Property is not found with this Property Id",
                  labelKey: "ERR_PROPERTY_NOT_FOUND_WITH_PROPERTY_ID"
                }, "info"));
                dispatch((0, _actions.handleScreenConfigurationFieldChange)("apply", "components.div.children.formwizardSecondStep.children.tradeLocationDetails.children.cardContent.children.tradeDetailsConatiner.children.tradeLocPropertyID", "props.value", ""));
              } else {
                dispatch((0, _actions.handleScreenConfigurationFieldChange)("apply", "components.div.children.formwizardSecondStep.children.propertyLocationDetails.children.cardContent.children.propertyDetailsConatiner.children.propertyMohalla", "props.value", {
                  value: payload.Properties[0].address.locality.code,
                  label: payload.Properties[0].address.locality.name
                }));
                dispatch((0, _actions.prepareFinalObject)("FireNOCs[0].fireNOCDetails.propertyDetails.address", payload.Properties[0].address));
                // dispatch(
                //   handleField(
                //     "apply",
                //     "components.div.children.formwizardSecondStep.children.tradeLocationDetails.children.cardContent.children.tradeDetailsConatiner.children.tradeLocCity.children.cityDropdown",
                //     "props.value",
                //     payload.Properties[0].address.tenantId
                //   )
                // );
              }
            }

          case 11:
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);

            console.log(_context2.t0);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 13]]);
  }));

  return function getDetailsFromProperty(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

var propertyLocationDetails = exports.propertyLocationDetails = (0, _utils.getCommonCard)({
  header: (0, _utils.getCommonTitle)({
    labelName: "Property Location Details",
    labelKey: "NOC_PROPERTY_LOCATION_DETAILS_HEADER"
  }, {
    style: {
      marginBottom: 18
    }
  }),

  propertyDetailsConatiner: (0, _utils.getCommonContainer)({
    propertyId: (0, _utils.getTextField)({
      label: {
        labelName: "Property ID",
        labelKey: "NOC_PROPERTY_ID_LABEL"
      },
      placeholder: {
        labelName: "Enter Property ID",
        labelKey: "NOC_PROPERTY_ID_PLACEHOLDER"
      },
      iconObj: {
        iconName: "search",
        position: "end",
        color: "#FE7A51",
        onClickDefination: {
          action: "condition",
          callBack: function callBack(state, dispatch) {
            getDetailsFromProperty(state, dispatch);
          }
        }
      },
      // title: {
      //   value:
      //     "If you have already assessed your property, then please search your property by your PAID",
      //   key: "NOC_PROPERTY_ID_TOOLTIP_MESSAGE"
      // },
      // infoIcon: "info_circle",
      jsonPath: "FireNOCs[0].fireNOCDetails.propertyDetails.propertyId"
    }),
    propertyCity: {
      uiFramework: "custom-containers-local",
      moduleName: "egov-firenoc",
      componentPath: "AutosuggestContainer",
      jsonPath: "FireNOCs[0].fireNOCDetails.propertyDetails.address.city",
      props: {
        label: {
          labelName: "City",
          labelKey: "NOC_PROPERTY_CITY_LABEL"
        },
        localePrefix: {
          moduleName: "TENANT",
          masterName: "TENANTS"
        },
        optionLabel: "name",
        placeholder: {
          labelName: "Select City",
          labelKey: "NOC_PROPERTY_CITY_PLACEHOLDER"
        },
        jsonPath: "FireNOCs[0].fireNOCDetails.propertyDetails.address.city",
        sourceJsonPath: "applyScreenMdmsData.tenant.tenants",
        className: "applicant-details-error autocomplete-dropdown",
        required: true
      },
      required: true,
      gridDefination: {
        xs: 12,
        sm: 12,
        md: 6
      },
      beforeFieldChange: function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(action, state, dispatch) {
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return onchangeOfTenant(action, state, dispatch);

                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, undefined);
        }));

        return function beforeFieldChange(_x6, _x7, _x8) {
          return _ref3.apply(this, arguments);
        };
      }()
    },
    propertyPlotSurveyNo: (0, _utils.getTextField)({
      label: {
        labelName: "Plot/Survey No.",
        labelKey: "NOC_PROPERTY_PLOT_NO_LABEL"
      },
      props: {
        className: "applicant-details-error"
      },
      placeholder: {
        labelName: "Enter Plot/Survey No.",
        labelKey: "NOC_PROPERTY_PLOT_NO_PLACEHOLDER"
      },
      pattern: (0, _utils.getPattern)("DoorHouseNo"),
      errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",
      jsonPath: "FireNOCs[0].fireNOCDetails.propertyDetails.address.doorNo"
    }),
    propertyBuilidingName: (0, _utils.getTextField)({
      label: {
        labelName: "Building/Colony Name",
        labelKey: "NOC_PROPERTY_DETAILS_BLDG_NAME_LABEL"
      },
      props: {
        className: "applicant-details-error"
      },
      placeholder: {
        labelName: "Enter Building/Colony Name",
        labelKey: "NOC_PROPERTY_DETAILS_BLDG_NAME_PLACEHOLDER"
      },
      pattern: (0, _utils.getPattern)("BuildingStreet"),
      errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",

      jsonPath: "FireNOCs[0].fireNOCDetails.propertyDetails.address.buildingName"
    }),
    propertyStreetName: (0, _utils.getTextField)({
      label: {
        labelName: "Street Name",
        labelKey: "NOC_PROPERTY_DETAILS_SRT_NAME_LABEL"
      },
      props: {
        className: "applicant-details-error"
      },
      placeholder: {
        labelName: "Enter Street Name",
        labelKey: "NOC_PROPERTY_DETAILS_SRT_NAME_PLACEHOLDER"
      },
      pattern: (0, _utils.getPattern)("BuildingStreet"),
      errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",
      jsonPath: "FireNOCs[0].fireNOCDetails.propertyDetails.address.street"
    }),
    propertyMohalla: {
      uiFramework: "custom-containers",
      componentPath: "AutosuggestContainer",
      jsonPath: "FireNOCs[0].fireNOCDetails.propertyDetails.address.locality.code",
      required: true,
      props: {
        style: {
          width: "100%",
          cursor: "pointer"
        },
        label: {
          labelName: "Mohalla",
          labelKey: "NOC_PROPERTY_DETAILS_MOHALLA_LABEL"
        },
        placeholder: {
          labelName: "Select Mohalla",
          labelKey: "NOC_PROPERTY_DETAILS_MOHALLA_PLACEHOLDER"
        },
        jsonPath: "FireNOCs[0].fireNOCDetails.propertyDetails.address.locality.code",
        sourceJsonPath: "applyScreenMdmsData.tenant.localities",
        labelsFromLocalisation: true,
        errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",
        suggestions: [],
        fullwidth: true,
        required: true,
        inputLabelProps: {
          shrink: true
          // className: "tradelicense-mohalla-apply"
        } },
      beforeFieldChange: function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(action, state, dispatch) {
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, undefined);
        }));

        return function beforeFieldChange(_x9, _x10, _x11) {
          return _ref4.apply(this, arguments);
        };
      }(),
      gridDefination: {
        xs: 12,
        sm: 6
      }
    },
    propertyPincode: (0, _utils.getTextField)({
      label: {
        labelName: "Pincode",
        labelKey: "NOC_PROPERTY_DETAILS_PIN_LABEL"
      },
      props: {
        className: "applicant-details-error"
      },
      placeholder: {
        labelName: "Enter Pincode",
        labelKey: "NOC_PROPERTY_DETAILS_PIN_PLACEHOLDER"
      },
      pattern: (0, _utils.getPattern)("Pincode"),
      errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",
      jsonPath: "FireNOCs[0].fireNOCDetails.propertyDetails.address.pincode"
      // required: true
    }),
    propertyGisCoordinates: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      props: {
        className: "gis-div-css",
        style: {
          width: "100%",
          cursor: "pointer"
        },
        jsonPath: "FireNOCs[0].fireNOCDetails.propertyDetails.address.latitude"
      },
      jsonPath: "FireNOCs[0].fireNOCDetails.propertyDetails.address.latitude",
      onClickDefination: {
        action: "condition",
        callBack: showHideMapPopup
      },
      gridDefination: {
        xs: 12,
        sm: 6
      },
      children: {
        gisTextField: (0, _extends3.default)({}, (0, _utils.getTextField)({
          label: {
            labelName: "Locate on Map",
            labelKey: "NOC_PROPERTY_DETAILS_GIS_CORD_LABEL"
          },
          placeholder: {
            labelName: "Select your property location on map",
            labelKey: "NOC_PROPERTY_DETAILS_GIS_CORD_PLACEHOLDER"
          },
          jsonPath: "FireNOCs[0].fireNOCDetails.propertyDetails.address.latitude",
          iconObj: {
            iconName: "gps_fixed",
            position: "end"
          },
          gridDefination: {
            xs: 12,
            sm: 12
          },
          props: {
            disabled: true,
            cursor: "pointer",
            jsonPath: "FireNOCs[0].fireNOCDetails.propertyDetails.address.latitude"
          }
        }))
      }
    },
    propertyFirestation: {
      uiFramework: "custom-containers-local",
      moduleName: "egov-firenoc",
      componentPath: "AutosuggestContainer",
      props: {
        className: "applicant-details-error autocomplete-dropdown",
        label: {
          labelName: "Applicable Fire Station",
          labelKey: "NOC_PROPERTY_DETAILS_FIRESTATION_LABEL"
        },
        placeholder: {
          labelName: "Select Applicable Fire Station",
          labelKey: "NOC_PROPERTY_DETAILS_FIRESTATION_PLACEHOLDER"
        },
        required: true,
        labelsFromLocalisation: true,
        localePrefix: {
          moduleName: "firenoc",
          masterName: "FireStations"
        },
        jsonPath: "FireNOCs[0].fireNOCDetails.firestationId"
      },
      required: true,
      jsonPath: "FireNOCs[0].fireNOCDetails.firestationId",
      gridDefination: {
        xs: 12,
        sm: 12,
        md: 6
      }
    }
  }),
  mapsDialog: {
    componentPath: "Dialog",
    props: {
      open: false
    },
    children: {
      dialogContent: {
        componentPath: "DialogContent",
        children: {
          popup: getMapLocator()
        }
      }
    }
  }
}, {
  style: { overflow: "visible" }
});