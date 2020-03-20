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
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
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
    key: "handleChange",
    value: function handleChange(e) {}
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();

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
        className: "jsx-1184390400" + " " + 'ProjectTemplate',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1184390400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1184390400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, " Create a Project "), __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-1184390400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "",
        className: "jsx-1184390400" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Project Owner"), __jsx("input", {
        onChange: this.handleChange,
        id: "",
        name: "",
        value: "",
        className: "jsx-1184390400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-1184390400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "",
        className: "jsx-1184390400" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Project Title"), __jsx("input", {
        onChange: this.handleChange,
        id: "",
        name: "",
        value: "",
        className: "jsx-1184390400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-1184390400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "",
        className: "jsx-1184390400" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Project Desc"), __jsx("input", {
        onChange: this.handleChange,
        id: "",
        name: "",
        value: "",
        className: "jsx-1184390400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-1184390400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "",
        className: "jsx-1184390400" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Start Date"), __jsx("input", {
        onChange: this.handleChange,
        id: "",
        name: "",
        value: "",
        className: "jsx-1184390400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-1184390400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "",
        className: "jsx-1184390400" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), __jsx("input", {
        onChange: this.handleChange,
        id: "",
        name: "",
        value: "",
        className: "jsx-1184390400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-1184390400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), __jsx("button", {
        onClick: this.handleSubmit,
        className: "jsx-1184390400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Create Project"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1184390400",
        __self: this
      }, "*.jsx-1184390400{margin:0;padding:0;box-sizing:border-box;}.ProjectTemplate.jsx-1184390400{background-color:rgba(160,180,230,.8);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbnJpcXVlcGl0dGFsdWdhL0Rlc2t0b3AvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcHJvamVjdHRyYWNrZXIvQ29tcG9uZW50cy9Qcm9qZWN0VGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZxQixBQUdzQyxBQVFkLFNBUGUsVUFDWSxtQkFNMUIsR0FMQSIsImZpbGUiOiIvVXNlcnMvZW5yaXF1ZXBpdHRhbHVnYS9EZXNrdG9wL1Byb2dyYW1taW5nL1Byb2plY3RzL3Byb2plY3R0cmFja2VyL0NvbXBvbmVudHMvUHJvamVjdFRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jbGFzcyBQcm9qZWN0VGVtcGxhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHJvamVjdHNMaXN0OiBbXSxcbiAgICAgICAgICAgIGlzTG9nZ2Vkb246IGZhbHNlXG4gICAgICAgIH0gICAgICAgXG5cbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgIFxuICAgIH1cblxuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIC8vdXNlZnVsIGZvciBBc3luYyBmdW5jdGlvbnMgXG5cbiAgICAgICAgXG4gICAgICAgIC8vcnVucyBhZnRlciBjb21wb25lbnQgcmVuZGVyc1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBkaWQgbW91bnRcIilcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KXtcbiAgICAgICAgLy9ub3QgaW4gdXNlXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGRpZCB1cGRhdGVcIilcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSl7XG5cbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0xvZ2dlZG9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9nZ2Vkb246IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZG9uOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSAgICBcblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlcmVkXCIpXG4gICAgICAgIC8vcmVuZGVyIG1ldGhvZCBzaG91bGQgcmV0dXJuIEpTWCBhbmQgc3R5bGluZ1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdQcm9qZWN0VGVtcGxhdGUnPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT4gQ3JlYXRlIGEgUHJvamVjdCA8L2gxPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJcIiBodG1sRm9yPVwiXCI+UHJvamVjdCBPd25lcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBpZD1cIlwiIG5hbWU9XCJcIiB2YWx1ZT1cIlwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJcIiBodG1sRm9yPVwiXCI+UHJvamVjdCBUaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBpZD1cIlwiIG5hbWU9XCJcIiB2YWx1ZT1cIlwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJcIiBodG1sRm9yPVwiXCI+UHJvamVjdCBEZXNjPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlkPVwiXCIgbmFtZT1cIlwiIHZhbHVlPVwiXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIlwiIGh0bWxGb3I9XCJcIj5TdGFydCBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlkPVwiXCIgbmFtZT1cIlwiIHZhbHVlPVwiXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIlwiIGh0bWxGb3I9XCJcIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaWQ9XCJcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+Q3JlYXRlIFByb2plY3Q8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgKntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuUHJvamVjdFRlbXBsYXRle1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjAsIDE4MCwgMjMwLCAuOClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RUZW1wbGF0ZTsiXX0= */\n/*@ sourceURL=/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/ProjectTemplate.js */"));
    }
  }]);

  return ProjectTemplate;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProjectTemplate);

/***/ })

})
//# sourceMappingURL=projects.js.e0c6d7843bd5fd5a2669.hot-update.js.map