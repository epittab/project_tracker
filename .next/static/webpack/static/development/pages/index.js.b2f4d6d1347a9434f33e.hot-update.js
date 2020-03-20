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
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "City: ", this.state.data.name), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Current Temperature: ", this.state.data.main.temp, " F"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Weather: ", this.state.data.weather[0].main), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Humidity: ", this.state.data.main.humidity), __jsx("p", {
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
        className: "jsx-2822472847" + " " + 'Weather',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, " Weather "), __jsx("p", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, " - List types of consults"), __jsx("p", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, " - display retrieved information graphically "), __jsx("div", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, " ", this.state.isLoaded ? this.renderWidget() : 'Loading...', " "), __jsx("br", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-2822472847",
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
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx("button", {
        className: "jsx-2822472847" + " " + 'zipCode-btn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Submit"), __jsx("br", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2822472847",
        __self: this
      }, "*.jsx-2822472847{margin:0;padding:0;box-sizing:border-box;}.Weather.jsx-2822472847{background-color:rgba(160,180,230,.8);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbnJpcXVlcGl0dGFsdWdhL0Rlc2t0b3AvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcHJvamVjdHRyYWNrZXIvQ29tcG9uZW50cy9XZWF0aGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtIcUIsQUFHc0MsQUFPZCxTQU5lLFVBQ1ksbUJBSzFCLEdBSkEiLCJmaWxlIjoiL1VzZXJzL2VucmlxdWVwaXR0YWx1Z2EvRGVza3RvcC9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9wcm9qZWN0dHJhY2tlci9Db21wb25lbnRzL1dlYXRoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmltcG9ydCB7YXBpS2V5fSBmcm9tICcuLi9hcGlrZXknXG5cbmNsYXNzIFdlYXRoZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBuYW1lOiBcIkVucmlxdWVcIlxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB6aXBDb2RlOiBgMjAwMDJgLFxuICAgICAgICAgICAgY291bnRyeUNvZGU6ICd1cycsXG4gICAgICAgICAgICB1bml0czogJ2ltcGVyaWFsJyxcbiAgICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IFwiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9ICAgICAgIFxuICAgICBcbiAgICAgICBcbiAgICB9XG5cbiAgICBcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICAvL3VzZWZ1bCBmb3IgQXN5bmMgZnVuY3Rpb25zIFxuICAgICAgICB0aGlzLmdldFdlYXRoZXIoKS50aGVuKCAoIGRhdGEgKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICAvL3J1bnMgYWZ0ZXIgY29tcG9uZW50IHJlbmRlcnNcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgZGlkIG1vdW50XCIpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCl7XG4gICAgICAgIC8vbm90IGluIHVzZVxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBkaWQgdXBkYXRlXCIpXG4gICAgfVxuICAgIFxuICBcblxuICAgIGFzeW5jIGdldFdlYXRoZXIoKXtcbiAgICAgICAgbGV0IEFQSWtleSA9IGFwaUtleS53ZWF0aGVyQXBpS2V5O1xuICAgICAgICBsZXQgVVJMID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/emlwPSR7dGhpcy5zdGF0ZS56aXBDb2RlfSwke3RoaXMuc3RhdGUuY291bnRyeUNvZGV9JmFwcGlkPSR7QVBJa2V5fSZ1bml0cz0ke3RoaXMuc3RhdGUudW5pdHN9YDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFVSTCk7XG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBNZXNzYWdlJyk7ICAgIFxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJXaWRnZXQoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBpZD0nd2VhdGhlci13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICA8aDE+Q2l0eToge3RoaXMuc3RhdGUuZGF0YS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+Q3VycmVudCBUZW1wZXJhdHVyZToge3RoaXMuc3RhdGUuZGF0YS5tYWluLnRlbXB9IEY8L3A+XG4gICAgICAgICAgICAgICAgPHA+V2VhdGhlcjoge3RoaXMuc3RhdGUuZGF0YS53ZWF0aGVyWzBdLm1haW59PC9wPlxuICAgICAgICAgICAgICAgIDxwPkh1bWlkaXR5OiB7dGhpcy5zdGF0ZS5kYXRhLm1haW4uaHVtaWRpdHl9PC9wPlxuICAgICAgICAgICAgICAgIDxwPldpbmQgU3BlZWQ6IHt0aGlzLnN0YXRlLmRhdGEud2luZC5zcGVlZH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBcblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlcmVkXCIpXG4gICAgICAgIC8vcmVuZGVyIG1ldGhvZCBzaG91bGQgcmV0dXJuIEpTWFxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdXZWF0aGVyJz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+IFdlYXRoZXIgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHA+IC0gTGlzdCB0eXBlcyBvZiBjb25zdWx0czwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+IC0gZGlzcGxheSByZXRyaWV2ZWQgaW5mb3JtYXRpb24gZ3JhcGhpY2FsbHkgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiB7IHRoaXMuc3RhdGUuaXNMb2FkZWQgPyB0aGlzLnJlbmRlcldpZGdldCgpIDogJ0xvYWRpbmcuLi4nIH0gPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+IFxuXG4gICAgICAgICAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J3ppcENvZGUtdGFyZ2V0ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3ppcENvZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuemlwQ29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd6aXBDb2RlLWJ0bic+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPiBcblxuICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgKntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuV2VhdGhlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMTgwLCAyMzAsIC44KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjsiXX0= */\n/*@ sourceURL=/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/Weather.js */"));
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
//# sourceMappingURL=index.js.b2f4d6d1347a9434f33e.hot-update.js.map