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
              URL = "http://api.openweathermap.org/data/2.5/weather?zip=".concat(this.state.zipCode, ",").concat(this.state.countryCode, "&appid=").concat(APIkey, "&units=imperial");
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "City: ", this.state.data.name, " F"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Current Temperature: ", this.state.data.main.temp), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Weather: ", this.state.data.weather[0].main), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Humidity: ", this.state.data.main.humidity), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
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
          lineNumber: 83
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, " Weather "), __jsx("p", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, " - List types of consults"), __jsx("p", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, " - display retrieved information graphically "), __jsx("div", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, " ", this.state.isLoaded ? this.renderWidget() : 'Loading...', " "), __jsx("br", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
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
          lineNumber: 95
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), __jsx("button", {
        className: "jsx-2822472847" + " " + 'zipCode-btn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Submit"), __jsx("br", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2822472847",
        __self: this
      }, "*.jsx-2822472847{margin:0;padding:0;box-sizing:border-box;}.Weather.jsx-2822472847{background-color:rgba(160,180,230,.8);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbnJpcXVlcGl0dGFsdWdhL0Rlc2t0b3AvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcHJvamVjdHRyYWNrZXIvQ29tcG9uZW50cy9XZWF0aGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlIcUIsQUFHc0MsQUFPZCxTQU5lLFVBQ1ksbUJBSzFCLEdBSkEiLCJmaWxlIjoiL1VzZXJzL2VucmlxdWVwaXR0YWx1Z2EvRGVza3RvcC9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9wcm9qZWN0dHJhY2tlci9Db21wb25lbnRzL1dlYXRoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmltcG9ydCB7YXBpS2V5fSBmcm9tICcuLi9hcGlrZXknXG5cbmNsYXNzIFdlYXRoZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBuYW1lOiBcIkVucmlxdWVcIlxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB6aXBDb2RlOiBgMjAwMDJgLFxuICAgICAgICAgICAgY291bnRyeUNvZGU6ICd1cycsXG4gICAgICAgICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBpbml0aWFsOiBcIlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSAgICAgICBcbiAgICAgXG4gICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgLy91c2VmdWwgZm9yIEFzeW5jIGZ1bmN0aW9ucyBcbiAgICAgICAgdGhpcy5nZXRXZWF0aGVyKCkudGhlbiggKCBkYXRhICkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgLy9ydW5zIGFmdGVyIGNvbXBvbmVudCByZW5kZXJzXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGRpZCBtb3VudFwiKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3Qpe1xuICAgICAgICAvL25vdCBpbiB1c2VcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgZGlkIHVwZGF0ZVwiKVxuICAgIH1cbiAgICBcbiAgXG5cbiAgICBhc3luYyBnZXRXZWF0aGVyKCl7XG4gICAgICAgIGxldCBBUElrZXkgPSBhcGlLZXkud2VhdGhlckFwaUtleTtcbiAgICAgICAgbGV0IFVSTCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3ppcD0ke3RoaXMuc3RhdGUuemlwQ29kZX0sJHt0aGlzLnN0YXRlLmNvdW50cnlDb2RlfSZhcHBpZD0ke0FQSWtleX0mdW5pdHM9aW1wZXJpYWxgO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIE1lc3NhZ2UnKTsgICAgXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcldpZGdldCgpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5DaXR5OiB7dGhpcy5zdGF0ZS5kYXRhLm5hbWV9IEY8L2gxPlxuICAgICAgICAgICAgICAgIDxwPkN1cnJlbnQgVGVtcGVyYXR1cmU6IHt0aGlzLnN0YXRlLmRhdGEubWFpbi50ZW1wfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5XZWF0aGVyOiB7dGhpcy5zdGF0ZS5kYXRhLndlYXRoZXJbMF0ubWFpbn08L3A+XG4gICAgICAgICAgICAgICAgPHA+SHVtaWRpdHk6IHt0aGlzLnN0YXRlLmRhdGEubWFpbi5odW1pZGl0eX08L3A+XG4gICAgICAgICAgICAgICAgPHA+V2luZCBTcGVlZDoge3RoaXMuc3RhdGUuZGF0YS53aW5kLnNwZWVkfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIFxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyZWRcIilcbiAgICAgICAgLy9yZW5kZXIgbWV0aG9kIHNob3VsZCByZXR1cm4gSlNYXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ1dlYXRoZXInPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT4gV2VhdGhlciA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD4gLSBMaXN0IHR5cGVzIG9mIGNvbnN1bHRzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD4gLSBkaXNwbGF5IHJldHJpZXZlZCBpbmZvcm1hdGlvbiBncmFwaGljYWxseSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IHsgdGhpcy5zdGF0ZS5pc0xvYWRlZCA/IHRoaXMucmVuZGVyV2lkZ2V0KCkgOiAnTG9hZGluZy4uLicgfSA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj4gXG5cbiAgICAgICAgICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nemlwQ29kZS10YXJnZXRlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nemlwQ29kZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS56aXBDb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3ppcENvZGUtYnRuJz5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+IFxuXG4gICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAgICAqe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5XZWF0aGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAxODAsIDIzMCwgLjgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyOyJdfQ== */\n/*@ sourceURL=/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/Weather.js */"));
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
//# sourceMappingURL=index.js.4122481f463d3c064c66.hot-update.js.map