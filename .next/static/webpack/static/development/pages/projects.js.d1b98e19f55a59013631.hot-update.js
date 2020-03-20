webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./Components/ProjectComponents/ProjectModule.js":
/*!*******************************************************!*\
  !*** ./Components/ProjectComponents/ProjectModule.js ***!
  \*******************************************************/
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
/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProjectList */ "./Components/ProjectComponents/ProjectList.js");
/* harmony import */ var _ProjectTemplate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProjectTemplate */ "./Components/ProjectComponents/ProjectTemplate.js");
/* harmony import */ var _sample_projects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../sample_projects */ "./sample_projects.js");







var _jsxFileName = "/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/ProjectComponents/ProjectModule.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // import uuid from 'react-uuid'






var ProjectModule = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ProjectModule, _React$Component);

  function ProjectModule(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProjectModule);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ProjectModule).call(this, props));
    _this.state = {
      isShowing: 1,
      isLoggedon: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProjectModule, [{
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
    key: "handleClick",
    value: function handleClick(e) {
      this.setState(_objectSpread({}, this.state, {
        isShowing: e.target.value
      }));
      console.log(e.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      console.log("rendered");
      {
        switch (this.state.isShowing) {
          case 1:
            break;

          case 2:
            break;

          default:
        }
      } //render method should return JSX and styling

      return __jsx("div", {
        className: "jsx-1227254636" + " " + 'ProjectModule',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1227254636" + " " + 'Proj-module-search',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-1227254636",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Search Projects"), __jsx("input", {
        id: "proj-search-input",
        placeholder: "Search...",
        className: "jsx-1227254636",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1227254636" + " " + 'Proj-module-tabs',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("nav", {
        className: "jsx-1227254636",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-1227254636" + " " + 'Proj-module-tabs-menu',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("li", {
        value: "1",
        onClick: this.handleClick,
        className: "jsx-1227254636",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "New Project"), __jsx("li", {
        value: "2",
        onClick: this.handleClick,
        className: "jsx-1227254636",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "View/Edit Project")))), this.state.isShowing === 1 ? __jsx(_ProjectList__WEBPACK_IMPORTED_MODULE_10__["default"], {
        projects: _sample_projects__WEBPACK_IMPORTED_MODULE_12__["projects_array"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }) : __jsx(_ProjectTemplate__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1227254636",
        __self: this
      }, ".ProjectModule.jsx-1227254636{background-color:rgba(0,50,30,.8);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:3px;color:rgba(250,250,250,.9);margin-top:2rem;padding:2rem 1rem 2rem 1rem;}.Proj-module-search.jsx-1227254636{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-right:50px;margin-left:50px;}.Proj-module-tabs.jsx-1227254636{margin-top:2rem;margin-bottom:2rem;}.Proj-module-tabs-menu.jsx-1227254636{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-right:50px;margin-left:50px;list-style:none;cursor:pointer;}.Proj-module-tabs-menu.jsx-1227254636 li.jsx-1227254636{color:rgba(230,230,230,.7);}.Proj-module-tabs-menu.jsx-1227254636 li.jsx-1227254636:hover{color:rgba(230,230,230,1);}#proj-search-input.jsx-1227254636{height:2rem;width:300px;font-size:1.2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbnJpcXVlcGl0dGFsdWdhL0Rlc2t0b3AvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcHJvamVjdHRyYWNrZXIvQ29tcG9uZW50cy9Qcm9qZWN0Q29tcG9uZW50cy9Qcm9qZWN0TW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1GcUIsQUFJa0UsQUFleEIsQUFhRyxBQUtILEFBZWlCLEFBSUQsQUFJakIsWUFDQSxJQTVCTyxRQTZCRixFQUxyQixDQUpBLE9BaERpQixDQTZCakIsTUE2QkEsaUNBM0N1QixBQWtCQSxrQ0FoQ0csbUNBZ0JILEFBa0JBLDJDQWhDRCxrQkFDWSwyQkFFZCxLQVljLEFBa0JELFdBN0JELDRCQUloQyw0RUFVc0IsUUFrQkEsVUFqQkQsUUFrQkEsU0FqQnJCLFFBbUJvQixnQkFDRCxlQUNuQiIsImZpbGUiOiIvVXNlcnMvZW5yaXF1ZXBpdHRhbHVnYS9EZXNrdG9wL1Byb2dyYW1taW5nL1Byb2plY3RzL3Byb2plY3R0cmFja2VyL0NvbXBvbmVudHMvUHJvamVjdENvbXBvbmVudHMvUHJvamVjdE1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgdXVpZCBmcm9tICdyZWFjdC11dWlkJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSAnLi9Qcm9qZWN0TGlzdCc7XG5pbXBvcnQgUHJvamVjdFRlbXBsYXRlIGZyb20gJy4vUHJvamVjdFRlbXBsYXRlJztcbmltcG9ydCB7cHJvamVjdHNfYXJyYXl9IGZyb20gJy4uLy4uL3NhbXBsZV9wcm9qZWN0cyc7XG5cbmNsYXNzIFByb2plY3RNb2R1bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNTaG93aW5nOiAxLFxuICAgICAgICAgICAgaXNMb2dnZWRvbjogZmFsc2VcbiAgICAgICAgfSAgICAgICBcblxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgIFxuICAgIH1cblxuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIC8vdXNlZnVsIGZvciBBc3luYyBmdW5jdGlvbnMgXG5cbiAgICAgICAgXG4gICAgICAgIC8vcnVucyBhZnRlciBjb21wb25lbnQgcmVuZGVyc1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBkaWQgbW91bnRcIilcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KXtcbiAgICAgICAgLy9ub3QgaW4gdXNlXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGRpZCB1cGRhdGVcIilcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgaXNTaG93aW5nOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyZWRcIilcbiAgICAgICAge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLmlzU2hvd2luZykge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgLy9yZW5kZXIgbWV0aG9kIHNob3VsZCByZXR1cm4gSlNYIGFuZCBzdHlsaW5nXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ1Byb2plY3RNb2R1bGUnPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nUHJvai1tb2R1bGUtc2VhcmNoJz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlNlYXJjaCBQcm9qZWN0czwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ncHJvai1zZWFyY2gtaW5wdXQnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdQcm9qLW1vZHVsZS10YWJzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nUHJvai1tb2R1bGUtdGFicy1tZW51Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHZhbHVlPVwiMVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9Pk5ldyBQcm9qZWN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHZhbHVlPVwiMlwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlZpZXcvRWRpdCBQcm9qZWN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmlzU2hvd2luZyA9PT0gMSA/IDxQcm9qZWN0TGlzdCBwcm9qZWN0cz17cHJvamVjdHNfYXJyYXl9Lz4gOiAgPFByb2plY3RUZW1wbGF0ZSAvPiB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7YFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuUHJvamVjdE1vZHVsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA1MCwgMzAsIC44KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgLjkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW0gMnJlbSAxcmVtO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuUHJvai1tb2R1bGUtc2VhcmNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuUHJvai1tb2R1bGUtdGFicyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuUHJvai1tb2R1bGUtdGFicy1tZW51IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5Qcm9qLW1vZHVsZS10YWJzLW1lbnUgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDIzMCwgMjMwLCAyMzAsIC43KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLlByb2otbW9kdWxlLXRhYnMtbWVudSBsaTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICNwcm9qLXNlYXJjaC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RNb2R1bGU7Il19 */\n/*@ sourceURL=/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/ProjectComponents/ProjectModule.js */"));
    }
  }]);

  return ProjectModule;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProjectModule);

/***/ })

})
//# sourceMappingURL=projects.js.d1b98e19f55a59013631.hot-update.js.map