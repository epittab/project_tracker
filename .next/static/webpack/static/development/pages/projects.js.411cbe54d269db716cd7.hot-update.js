webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./Components/ProjectTemplate.js":
/*!***************************************!*\
  !*** ./Components/ProjectTemplate.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/ProjectTemplate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var ProjectTemplate = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ProjectTemplate, _React$Component);

  function ProjectTemplate(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProjectTemplate);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ProjectTemplate).call(this, props));
    _this.state = {
      projectsList: [],
      isLoggedon: false
    };
    _this.login = _this.login.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProjectTemplate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //useful for Async functions 
      //runs after component renders
      console.log("component did mount");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      //not in use
      console.log("component did update");
    }
  }, {
    key: "login",
    value: function login() {
      if (this.state.isLoggedon) {
        this.setState(_objectSpread({}, this.state, {
          isLoggedon: false
        }));
      } else {
        this.setState(_objectSpread({}, this.state, {
          isLoggedon: true
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      console.log("rendered"); //render method should return JSX and styling

      return __jsx("div", {
        className: "jsx-3353760761" + " " + 'ProjectTemplate',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3353760761",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-3353760761",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, " Projects "), __jsx("p", {
        className: "jsx-3353760761",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, " You have ", this.state.isLoggedon ? this.state.projectsList.length : 'No Projects', " "), __jsx("button", {
        onClick: this.login,
        className: "jsx-3353760761",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, this.state.isLoggedon ? "Log Off" : "Log On")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3353760761",
        __self: this
      }, "*.jsx-3353760761{margin:0;padding:0;box-sizing:border-box;}.ProjectList.jsx-3353760761{background-color:rgba(160,180,230,.8);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbnJpcXVlcGl0dGFsdWdhL0Rlc2t0b3AvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcHJvamVjdHRyYWNrZXIvQ29tcG9uZW50cy9Qcm9qZWN0VGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RxQixBQUdzQyxBQU9kLFNBTmUsVUFDWSxtQkFLMUIsR0FKQSIsImZpbGUiOiIvVXNlcnMvZW5yaXF1ZXBpdHRhbHVnYS9EZXNrdG9wL1Byb2dyYW1taW5nL1Byb2plY3RzL3Byb2plY3R0cmFja2VyL0NvbXBvbmVudHMvUHJvamVjdFRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jbGFzcyBQcm9qZWN0VGVtcGxhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHJvamVjdHNMaXN0OiBbXSxcbiAgICAgICAgICAgIGlzTG9nZ2Vkb246IGZhbHNlXG4gICAgICAgIH0gICAgICAgXG5cbiAgICAgICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKVxuICAgICAgIFxuICAgIH1cblxuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIC8vdXNlZnVsIGZvciBBc3luYyBmdW5jdGlvbnMgXG5cbiAgICAgICAgXG4gICAgICAgIC8vcnVucyBhZnRlciBjb21wb25lbnQgcmVuZGVyc1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBkaWQgbW91bnRcIilcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KXtcbiAgICAgICAgLy9ub3QgaW4gdXNlXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGRpZCB1cGRhdGVcIilcbiAgICB9XG5cbiAgICBsb2dpbigpe1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0xvZ2dlZG9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9nZ2Vkb246IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZG9uOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSAgICBcblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlcmVkXCIpXG4gICAgICAgIC8vcmVuZGVyIG1ldGhvZCBzaG91bGQgcmV0dXJuIEpTWCBhbmQgc3R5bGluZ1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdQcm9qZWN0VGVtcGxhdGUnPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT4gUHJvamVjdHMgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHA+IFlvdSBoYXZlIHsgdGhpcy5zdGF0ZS5pc0xvZ2dlZG9uID8gdGhpcy5zdGF0ZS5wcm9qZWN0c0xpc3QubGVuZ3RoIDogJ05vIFByb2plY3RzJ30gPC9wPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmxvZ2lufT57IHRoaXMuc3RhdGUuaXNMb2dnZWRvbiA/IGBMb2cgT2ZmYCA6IGBMb2cgT25gfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgKntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuUHJvamVjdExpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjAsIDE4MCwgMjMwLCAuOClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RUZW1wbGF0ZTsiXX0= */\n/*@ sourceURL=/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/ProjectTemplate.js */"));
    }
  }]);

  return ProjectTemplate;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProjectTemplate);

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.js");
/* harmony import */ var _Components_ProjectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/ProjectList */ "./Components/ProjectList.js");
/* harmony import */ var _Components_ProjectTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/ProjectTemplate */ "./Components/ProjectTemplate.js");
/* harmony import */ var _sample_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sample_projects */ "./sample_projects.js");
var _jsxFileName = "/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/pages/projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Projects = function Projects() {
  return __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Projects page "), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, " Render a list of projets to check through API call"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, " - list should provide certain quick reference info about each project"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, " - list should provide title and project owner"), __jsx(_Components_ProjectList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    projects: _sample_projects__WEBPACK_IMPORTED_MODULE_4__["projects_array"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_Components_ProjectTemplate__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=projects.js.411cbe54d269db716cd7.hot-update.js.map