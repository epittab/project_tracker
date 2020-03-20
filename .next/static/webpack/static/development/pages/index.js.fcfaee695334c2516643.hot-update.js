webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/Weather.js":
/*!*******************************!*\
  !*** ./Components/Weather.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apikey__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../apikey */ "./apikey.js");







var _jsxFileName = "/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/Weather.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Weather = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Weather, _React$Component);

  function Weather(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Weather);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Weather).call(this, props));
    _this.state = {
      zipCode: "20002",
      countryCode: 'us',
      units: 'imperial',
      isLoaded: false,
      data: {
        name: "",
        initial: ""
      }
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Weather, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      //useful for Async functions 
      this.getWeather().then(function (data) {
        _this2.setState(_objectSpread({}, _this2.state, {
          isLoaded: true,
          data: data
        }));
      }); //runs after component renders

      console.log("component did mount");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      //not in use
      console.log("component did update");
    }
  }, {
    key: "getWeather",
    value: function getWeather() {
      var APIkey, URL, res, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getWeather$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              APIkey = _apikey__WEBPACK_IMPORTED_MODULE_10__["apiKey"].weatherApiKey;
              URL = "http://api.openweathermap.org/data/2.5/weather?zip=".concat(this.state.zipCode, ",").concat(this.state.countryCode, "&appid=").concat(APIkey, "&units=").concat(this.state.units);
              _context.prev = 2;
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()(URL));

            case 5:
              res = _context.sent;

              if (!res.ok) {
                _context.next = 12;
                break;
              }

              _context.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 9:
              data = _context.sent;
              console.log(data);
              return _context.abrupt("return", data);

            case 12:
              throw new Error('Error Message');

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[2, 15]], Promise);
    }
  }, {
    key: "renderWidget",
    value: function renderWidget() {
      return __jsx("div", {
        id: "weather-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("h3", {
        className: "weather-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "City: ", this.state.data.name), __jsx("p", {
        className: "weather-detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Current Temperature: ", this.state.data.main.temp, " F"), __jsx("p", {
        className: "weather-detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Weather: ", this.state.data.weather[0].main), __jsx("p", {
        className: "weather-detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Humidity: ", this.state.data.main.humidity), __jsx("p", {
        className: "weather-detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Wind Speed: ", this.state.data.wind.speed));
    }
  }, {
    key: "render",
    value: function render() {
      console.log("rendered"); //render method should return JSX

      return __jsx("div", {
        className: "jsx-1525955489" + " " + 'Weather',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1525955489",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-1525955489",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, " Weather "), __jsx("p", {
        className: "jsx-1525955489",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, " - List types of consults"), __jsx("p", {
        className: "jsx-1525955489",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, " - display retrieved information graphically "), __jsx("div", {
        className: "jsx-1525955489",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, " ", this.state.isLoaded ? this.renderWidget() : 'Loading...', " "), __jsx("br", {
        className: "jsx-1525955489",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-1525955489",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), __jsx("input", {
        id: "zipCode-targeted",
        type: "text",
        name: "zipCode",
        value: this.state.zipCode,
        className: "jsx-1525955489",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-1525955489",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx("button", {
        className: "jsx-1525955489" + " " + 'zipCode-btn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Submit"), __jsx("br", {
        className: "jsx-1525955489",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1525955489",
        __self: this
      }, "*.jsx-1525955489{margin:0;padding:0;box-sizing:border-box;font-family:sans-serif;}.Weather.jsx-1525955489{background-color:rgba(130,130,130,.8);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbnJpcXVlcGl0dGFsdWdhL0Rlc2t0b3AvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcHJvamVjdHRyYWNrZXIvQ29tcG9uZW50cy9XZWF0aGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtIcUIsQUFHc0MsQUFPZ0MsU0FOL0IsVUFDWSxtQkFNVCxHQUxVLHVCQUMzQixnREFLMEIsOEVBQ0gsNkZBQ0ksbUdBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9lbnJpcXVlcGl0dGFsdWdhL0Rlc2t0b3AvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcHJvamVjdHRyYWNrZXIvQ29tcG9uZW50cy9XZWF0aGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5pbXBvcnQge2FwaUtleX0gZnJvbSAnLi4vYXBpa2V5J1xuXG5jbGFzcyBXZWF0aGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbmFtZTogXCJFbnJpcXVlXCJcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgemlwQ29kZTogYDIwMDAyYCxcbiAgICAgICAgICAgIGNvdW50cnlDb2RlOiAndXMnLFxuICAgICAgICAgICAgdW5pdHM6ICdpbXBlcmlhbCcsXG4gICAgICAgICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBpbml0aWFsOiBcIlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSAgICAgICBcbiAgICAgXG4gICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgLy91c2VmdWwgZm9yIEFzeW5jIGZ1bmN0aW9ucyBcbiAgICAgICAgdGhpcy5nZXRXZWF0aGVyKCkudGhlbiggKCBkYXRhICkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgLy9ydW5zIGFmdGVyIGNvbXBvbmVudCByZW5kZXJzXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGRpZCBtb3VudFwiKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3Qpe1xuICAgICAgICAvL25vdCBpbiB1c2VcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgZGlkIHVwZGF0ZVwiKVxuICAgIH1cbiAgICBcbiAgXG5cbiAgICBhc3luYyBnZXRXZWF0aGVyKCl7XG4gICAgICAgIGxldCBBUElrZXkgPSBhcGlLZXkud2VhdGhlckFwaUtleTtcbiAgICAgICAgbGV0IFVSTCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3ppcD0ke3RoaXMuc3RhdGUuemlwQ29kZX0sJHt0aGlzLnN0YXRlLmNvdW50cnlDb2RlfSZhcHBpZD0ke0FQSWtleX0mdW5pdHM9JHt0aGlzLnN0YXRlLnVuaXRzfWA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChVUkwpO1xuICAgICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgTWVzc2FnZScpOyAgICBcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyV2lkZ2V0KCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgaWQ9J3dlYXRoZXItd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nd2VhdGhlci10aXRsZSc+Q2l0eToge3RoaXMuc3RhdGUuZGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWF0aGVyLWRldGFpbCc+Q3VycmVudCBUZW1wZXJhdHVyZToge3RoaXMuc3RhdGUuZGF0YS5tYWluLnRlbXB9IEY8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWF0aGVyLWRldGFpbCc+V2VhdGhlcjoge3RoaXMuc3RhdGUuZGF0YS53ZWF0aGVyWzBdLm1haW59PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2VhdGhlci1kZXRhaWwnPkh1bWlkaXR5OiB7dGhpcy5zdGF0ZS5kYXRhLm1haW4uaHVtaWRpdHl9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2VhdGhlci1kZXRhaWwnPldpbmQgU3BlZWQ6IHt0aGlzLnN0YXRlLmRhdGEud2luZC5zcGVlZH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBcblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlcmVkXCIpXG4gICAgICAgIC8vcmVuZGVyIG1ldGhvZCBzaG91bGQgcmV0dXJuIEpTWFxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdXZWF0aGVyJz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+IFdlYXRoZXIgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+IC0gTGlzdCB0eXBlcyBvZiBjb25zdWx0czwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+IC0gZGlzcGxheSByZXRyaWV2ZWQgaW5mb3JtYXRpb24gZ3JhcGhpY2FsbHkgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiB7IHRoaXMuc3RhdGUuaXNMb2FkZWQgPyB0aGlzLnJlbmRlcldpZGdldCgpIDogJ0xvYWRpbmcuLi4nIH0gPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+IFxuXG4gICAgICAgICAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J3ppcENvZGUtdGFyZ2V0ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3ppcENvZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuemlwQ29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd6aXBDb2RlLWJ0bic+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPiBcblxuICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgKntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuV2VhdGhlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMCwgMTMwLCAxMzAsIC44KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgI3dlYXRoZXItd3JhcHBlcntcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgI3dlYXRoZXItdGl0bGUge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAud2VhdGhlci1kZXRhaWxze1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyOyJdfQ== */\n/*@ sourceURL=/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/Weather.js */"));
    }
  }]);

  return Weather;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Weather, "defaultProps", {
  name: "Enrique"
});

/* harmony default export */ __webpack_exports__["default"] = (Weather);

/***/ })

})
//# sourceMappingURL=index.js.fcfaee695334c2516643.hot-update.js.map