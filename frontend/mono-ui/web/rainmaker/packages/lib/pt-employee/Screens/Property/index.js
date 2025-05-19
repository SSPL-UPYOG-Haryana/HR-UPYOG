"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _components = require("components");

var _common = require("config/common.js");

var _common2 = _interopRequireDefault(_common);

var _TransformedAssessments = require("egov-ui-kit/common/propertyTax/TransformedAssessments");

var _actions = require("egov-ui-kit/redux/common/actions");

var _actions2 = require("egov-ui-kit/redux/properties/actions");

var _commons = require("egov-ui-kit/utils/commons");

var _translationNode = require("egov-ui-kit/utils/translationNode");

var _translationNode2 = _interopRequireDefault(_translationNode);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _isEqual = require("lodash/isEqual");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _orderBy = require("lodash/orderBy");

var _orderBy2 = _interopRequireDefault(_orderBy);

var _common3 = require("modules/common");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _PropertyInformation = require("./components/PropertyInformation");

var _PropertyInformation2 = _interopRequireDefault(_PropertyInformation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var innerDivStyle = {
  padding: "20px 56px 20px 50px",
  borderBottom: "1px solid #e0e0e0",
  marginLeft: 0
};

var IconStyle = {
  margin: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  height: "inherit"
};

var listItemStyle = {
  padding: "0px 20px",
  borderWidth: "10px 10px 0px"
};

var Property = function (_Component) {
  (0, _inherits3.default)(Property, _Component);

  function Property(props) {
    (0, _classCallCheck3.default)(this, Property);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Property.__proto__ || Object.getPrototypeOf(Property)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      pathName: null,
      dialogueOpen: false,
      urlToAppend: ""
    };
    return _this;
  }

  (0, _createClass3.default)(Property, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          history = _props.history,
          generalMDMSDataById = _props.generalMDMSDataById,
          latestPropertyDetails = _props.latestPropertyDetails;
      var closeYearRangeDialogue = this.closeYearRangeDialogue;
      var _state = this.state,
          dialogueOpen = _state.dialogueOpen,
          urlToAppend = _state.urlToAppend;

      var uuid = (0, _get2.default)(latestPropertyDetails, "citizenInfo.uuid");
      return _react2.default.createElement(
        _common3.Screen,
        null,
        _react2.default.createElement(_common3.AssessmentList, {
          onItemClick: this.onListItemClick,
          items: this.getAssessmentListItems(this.props),
          innerDivStyle: innerDivStyle,
          listItemStyle: listItemStyle,
          history: history,
          hoverColor: "#fff",
          generalMDMSDataById: generalMDMSDataById && generalMDMSDataById,
          citizenUserId: uuid
        }),
        dialogueOpen && _react2.default.createElement(_common3.YearDialogue, {
          open: dialogueOpen,
          history: history,
          urlToAppend: urlToAppend,
          closeDialogue: closeYearRangeDialogue
        })
      );
    }
  }]);
  return Property;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.componentDidMount = function () {
    var _props2 = _this2.props,
        fetchProperties = _props2.fetchProperties,
        fetchGeneralMDMSData = _props2.fetchGeneralMDMSData,
        renderCustomTitleForPt = _props2.renderCustomTitleForPt,
        customTitle = _props2.customTitle;

    var requestBody = {
      MdmsCriteria: {
        tenantId: _common2.default.tenantId,
        moduleDetails: [{
          moduleName: "PropertyTax",
          masterDetails: [{
            name: "Floor"
          }, {
            name: "UsageCategoryMajor"
          }, {
            name: "UsageCategoryMinor"
          }, {
            name: "UsageCategorySubMinor"
          }, {
            name: "OccupancyType"
          }, {
            name: "PropertyType"
          }, {
            name: "PropertySubType"
          }, {
            name: "OwnerType"
          }, {
            name: "UsageCategoryDetail"
          }, {
            name: "SubOwnerShipCategory"
          }]
        }]
      }
    };
    fetchGeneralMDMSData(requestBody, "PropertyTax", ["Floor", "UsageCategoryMajor", "UsageCategoryMinor", "UsageCategorySubMinor", "OccupancyType", "PropertyType", "PropertySubType", "OwnerType", "UsageCategoryDetail", "SubOwnerShipCategory"]);
    fetchProperties([{ key: "propertyIds", value: _this2.props.match.params.propertyId }, { key: "tenantId", value: _this2.props.match.params.tenantId }]);
    renderCustomTitleForPt(customTitle);
  };

  this.onListItemClick = function (item) {
    var getSingleAssesmentandStatus = _this2.props.getSingleAssesmentandStatus;
    var route = item.route;

    route && getSingleAssesmentandStatus(route);
  };

  this.onAssessPayClick = function () {
    var _props3 = _this2.props,
        latestPropertyDetails = _props3.latestPropertyDetails,
        propertyId = _props3.propertyId,
        tenantId = _props3.tenantId;

    var assessmentNo = latestPropertyDetails && latestPropertyDetails.assessmentNumber;
    var uuid = (0, _get2.default)(latestPropertyDetails, "citizenInfo.uuid");
    // localStorage.removeItem("draftId");
    _this2.setState({
      dialogueOpen: true,
      urlToAppend: getPropertyLink(propertyId, tenantId, "assess", -1, assessmentNo) + "&uuid=" + uuid
    });
  };

  this.getAssessmentListItems = function (props) {
    var propertyItems = props.propertyItems,
        propertyId = props.propertyId,
        tenantId = props.tenantId,
        history = props.history,
        sortedAssessments = props.sortedAssessments,
        selPropertyDetails = props.selPropertyDetails;

    return [{
      primaryText: _react2.default.createElement(_translationNode2.default, {
        label: "PT_PROPERTY_INFORMATION",
        fontSize: "16px",
        color: "#484848",
        labelStyle: { fontWeight: 500 }
      }),
      leftIcon: _react2.default.createElement(
        "div",
        { style: IconStyle },
        _react2.default.createElement(_components.Icon, { action: "action", name: "info", color: "#484848" })
      ),
      nestedItems: [{
        secondaryText: _react2.default.createElement(_PropertyInformation2.default, {
          items: propertyItems,
          propertyTaxAssessmentID: propertyId,
          history: history,
          tenantId: tenantId,
          onButtonClick: _this2.onAssessPayClick
        })
      }],
      rightIcon: _react2.default.createElement(
        "div",
        { style: IconStyle },
        _react2.default.createElement(_components.Icon, {
          action: "hardware",
          name: "keyboard-arrow-down",
          color: "#484848"
        })
      ),
      initiallyOpen: true
    }, {
      primaryText: _react2.default.createElement(_translationNode2.default, {
        label: "PT_PROPERTY_ASSESSMENT_HISTORY",
        fontSize: "16px",
        color: "#484848",
        labelStyle: { fontWeight: 500 }
      }),
      leftIcon: _react2.default.createElement(
        "div",
        { style: IconStyle },
        _react2.default.createElement(_components.Icon, {
          action: "action",
          name: "receipt",
          color: "#484848",
          style: IconStyle
        })
      ),
      route: selPropertyDetails,
      nestedItems: sortedAssessments && sortedAssessments,
      rightIcon: _react2.default.createElement(
        "div",
        { style: IconStyle },
        _react2.default.createElement(_components.Icon, {
          action: "hardware",
          name: "keyboard-arrow-down",
          color: "#484848"
        })
      )
    }];
  };

  this.componentWillReceiveProps = function (nextProps) {
    var _props4 = _this2.props,
        customTitle = _props4.customTitle,
        renderCustomTitleForPt = _props4.renderCustomTitleForPt;

    if (!(0, _isEqual2.default)(customTitle, nextProps.customTitle)) {
      renderCustomTitleForPt(nextProps.customTitle);
    }
  };

  this.closeYearRangeDialogue = function () {
    _this2.setState({ dialogueOpen: false });
  };
};

var getAddressInfo = function getAddressInfo(addressObj, extraItems) {
  return addressObj && [{
    heading: "Property Address",
    iconAction: "action",
    iconName: "home",
    items: [{
      key: " House No:",
      value: addressObj.doorNo || "NA"
    }, {
      key: "Street Name:",
      value: addressObj.street || "NA"
    }, {
      key: "Pincode:",
      value: addressObj.pincode || "NA"
    }, {
      key: "Colony Name:",
      value: addressObj.buildingName || "NA"
    }, {
      key: "Mohalla:",
      value: addressObj.locality.name || "NA"
    }, {
      key: "City:",
      value: addressObj.city || "NA"
    }].concat((0, _toConsumableArray3.default)(extraItems))
  }];
};

var transform = function transform(floor, key, generalMDMSDataById) {
  var masterName = key.masterName,
      dataKey = key.dataKey;

  if (!masterName) {
    return floor["occupancyType"] === "RENTED" ? "INR " + floor["arv"] : floor[dataKey] + " sq yards";
  } else {
    if (floor[dataKey]) {
      if (floor[dataKey] === "NONRESIDENTIAL") {
        return generalMDMSDataById["UsageCategoryMinor"] ? generalMDMSDataById["UsageCategoryMinor"][floor["usageCategoryMinor"]].name : "NA";
      } else {
        return generalMDMSDataById[masterName] ? generalMDMSDataById[masterName][floor[dataKey]].name : "NA";
      }
    } else {
      if (dataKey === "usageCategoryDetail") {
        return generalMDMSDataById["usageCategoryDetail"] ? generalMDMSDataById["usageCategoryDetail"][floor[dataKey]].name : generalMDMSDataById["usageCategorySubMinor"] ? generalMDMSDataById["usageCategorySubMinor"][floor[dataKey]].name : "NA";
      }
      return "NA";
    }
  }
};

var getAssessmentInfo = function getAssessmentInfo(propertyDetails, keys, generalMDMSDataById) {
  var units = propertyDetails.units;

  return [{
    heading: "PT_ASSESMENT_INFO_SUB_HEADER",
    iconAction: "action",
    iconName: "assignment",
    showTable: true,
    tableHeaderItems: [{
      key: "Plot Size:",
      value: propertyDetails.uom ? propertyDetails.landArea + " " + propertyDetails.uom : propertyDetails.landArea + " sq yards"
    }, {
      key: "Type of Building:",
      value: generalMDMSDataById ? propertyDetails.propertySubType ? generalMDMSDataById["PropertySubType"] ? generalMDMSDataById["PropertySubType"][propertyDetails.propertySubType].name : "NA" : generalMDMSDataById["PropertyType"] ? generalMDMSDataById["PropertyType"][propertyDetails.propertyType].name : "NA" : "NA"
    }],
    items: {
      header: units ? ["Floor", "Usage Type", "Sub Usage Type", "Occupancy", "Built Area/Total Annual Rent"] : [],
      values: units ? units.map(function (floor) {
        return {
          value: keys.map(function (key) {
            return transform(floor, key, generalMDMSDataById);
          })
        };
      }) : []
    }
  }];
};

var getOwnerInfo = function getOwnerInfo(latestPropertyDetails, generalMDMSDataById) {
  var isInstitution = latestPropertyDetails.ownershipCategory === "INSTITUTIONALPRIVATE" || latestPropertyDetails.ownershipCategory === "INSTITUTIONALGOVERNMENT";

  var _ref = latestPropertyDetails || {},
      institution = _ref.institution,
      ownerDetails = _ref.owners;

  return ownerDetails && [{
    heading: "Ownership Information",
    iconAction: "social",
    iconName: "person",
    nestedItems: true,
    items: ownerDetails.map(function (owner) {
      return {
        items: [isInstitution ? {
          key: "Name of Institution",
          value: institution.name || "NA"
        } : {
          key: "Name",
          value: owner.name || "NA"
        }, isInstitution ? {
          key: "Type of Institution",
          value: institution && institution.type && generalMDMSDataById && generalMDMSDataById["SubOwnerShipCategory"] && generalMDMSDataById["SubOwnerShipCategory"][institution.type].name || "NA"
        } : {
          key: "Gender:",
          value: owner.gender || "NA"
        }, isInstitution ? {
          key: "Name of Authorised Person",
          value: owner.name || "NA"
        } : {
          key: "Mobile No:",
          value: owner.mobileNumber || "NA"
        }, isInstitution ? {
          key: "Designation:",
          value: institution.designation || "NA"
        } : {
          key: "Father's/Husband's Name:",
          value: owner.fatherOrHusbandName || "NA"
        }, isInstitution ? {
          key: "Mobile Number:",
          value: owner.mobileNumber || "NA"
        } : {
          key: "User Category:",
          value: owner && owner.ownerType && generalMDMSDataById && generalMDMSDataById["OwnerType"] && generalMDMSDataById["OwnerType"][owner.ownerType].name || "NA"
        }, isInstitution ? {
          key: "Telephone Number:",
          value: owner.altContactNumber || "NA"
        } : {
          key: "Email ID:",
          value: owner.emailId || "NA"
        }, {
          key: "Correspondence Address:",
          value: owner.permanentAddress || "NA"
        }]
      };
    })
  }];
};

var getLatestPropertyDetails = function getLatestPropertyDetails(propertyDetailsArray) {
  if (propertyDetailsArray) {
    if (propertyDetailsArray.length > 1) {
      return propertyDetailsArray.reduce(function (acc, curr) {
        return acc.assessmentDate > curr.assessmentDate ? acc : curr;
      });
    } else {
      return propertyDetailsArray[0];
    }
  } else {
    return;
  }
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var _state$app = state.app,
      urls = _state$app.urls,
      localizationLabels = _state$app.localizationLabels;
  var common = state.common;
  var cities = common.cities;

  var _ref2 = state.common || {},
      generalMDMSDataById = _ref2.generalMDMSDataById;

  var _ref3 = state.properties || {},
      propertiesById = _ref3.propertiesById,
      singleAssessmentByStatus = _ref3.singleAssessmentByStatus;

  var propertyId = ownProps.match.params.propertyId;
  var tenantId = ownProps.match.params.tenantId;
  var selPropertyDetails = propertiesById[propertyId] || {};
  var latestPropertyDetails = getLatestPropertyDetails(selPropertyDetails.propertyDetails);
  var propertyCity = cities && selPropertyDetails && selPropertyDetails.address && cities.filter(function (item) {
    return item.key === selPropertyDetails.address.city;
  });
  var addressInfo = getAddressInfo(selPropertyDetails.address, [{
    key: "City:",
    value: propertyCity && propertyCity[0] && propertyCity[0].name || "NA"
  }, { key: "Property ID:", value: selPropertyDetails.propertyId }]) || [];
  var assessmentInfoKeys = [{ masterName: "Floor", dataKey: "floorNo" }, { masterName: "UsageCategoryMajor", dataKey: "usageCategoryMajor" }, { masterName: "UsageCategoryDetail", dataKey: "usageCategoryDetail" }, { masterName: "OccupancyType", dataKey: "occupancyType" }, { masterName: "", dataKey: "unitArea" }];
  var assessmentInfo = generalMDMSDataById ? latestPropertyDetails ? getAssessmentInfo(latestPropertyDetails, assessmentInfoKeys, generalMDMSDataById) : [] : [];
  var ownerInfo = latestPropertyDetails && getOwnerInfo(latestPropertyDetails, generalMDMSDataById) || [];
  var propertyItems = [].concat((0, _toConsumableArray3.default)(addressInfo), (0, _toConsumableArray3.default)(assessmentInfo), (0, _toConsumableArray3.default)(ownerInfo));
  var customTitle = selPropertyDetails && selPropertyDetails.address && (0, _commons.getCommaSeperatedAddress)(selPropertyDetails.address, cities);
  var completedAssessments = (0, _TransformedAssessments.getCompletedTransformedItems)(singleAssessmentByStatus, cities, localizationLabels);
  var sortedAssessments = completedAssessments && (0, _orderBy2.default)(completedAssessments, ["epocDate"], ["desc"]);
  return {
    urls: urls,
    propertyItems: propertyItems,
    generalMDMSDataById: generalMDMSDataById,
    tenantId: tenantId,
    propertyId: propertyId,
    latestPropertyDetails: latestPropertyDetails,
    customTitle: customTitle,
    selPropertyDetails: selPropertyDetails,
    sortedAssessments: sortedAssessments
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // addBreadCrumbs: (url) => dispatch(addBreadCrumbs(url)),
    fetchGeneralMDMSData: function fetchGeneralMDMSData(requestBody, moduleName, masterName) {
      return dispatch((0, _actions.fetchGeneralMDMSData)(requestBody, moduleName, masterName));
    },
    fetchProperties: function fetchProperties(queryObjectProperty) {
      return dispatch((0, _actions2.fetchProperties)(queryObjectProperty));
    },
    getSingleAssesmentandStatus: function getSingleAssesmentandStatus(queryObj) {
      return dispatch((0, _actions2.getSingleAssesmentandStatus)(queryObj));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Property);