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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/Weather.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var Weather = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Weather, _React$Component);

  function Weather(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Weather);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Weather).call(this, props));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Weather, [{
    key: "getWeather",
    value: function getWeather() {
      var APIkey, zipCode, countryCode, URL, res, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getWeather$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              APIkey = "47223e8adfa0691808af2ddf8d58fed3";
              zipCode = "22602";
              countryCode = "us";
              URL = "api.openweathermap.org/data/2.5/weather?zip=".concat(zipCode, ",").concat(countryCode, "&appid=").concat(APIkey);
              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(URL));

            case 6:
              res = _context.sent;
              _context.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 9:
              data = _context.sent;
              return _context.abrupt("return", {
                weather_data: data
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      //render method should return JSX
      this.getInitialProps = this.getWeather();
      return __jsx("div", {
        className: "jsx-2822472847" + " " + 'Weather',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, " Weather "), __jsx("p", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, " - List types of consults"), __jsx("p", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, " - display retrieved information graphically ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2822472847",
        __self: this
      }, "*.jsx-2822472847{margin:0;padding:0;box-sizing:border-box;}.Weather.jsx-2822472847{background-color:rgba(160,180,230,.8);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbnJpcXVlcGl0dGFsdWdhL0Rlc2t0b3AvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcHJvamVjdHRyYWNrZXIvQ29tcG9uZW50cy9XZWF0aGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDcUIsQUFHc0MsQUFPZCxTQU5lLFVBQ1ksbUJBSzFCLEdBSkEiLCJmaWxlIjoiL1VzZXJzL2VucmlxdWVwaXR0YWx1Z2EvRGVza3RvcC9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9wcm9qZWN0dHJhY2tlci9Db21wb25lbnRzL1dlYXRoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmNsYXNzIFdlYXRoZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB9XG5cbiAgICBhc3luYyBnZXRXZWF0aGVyKCl7XG4gICAgICAgIGxldCBBUElrZXkgPSBgNDcyMjNlOGFkZmEwNjkxODA4YWYyZGRmOGQ1OGZlZDNgO1xuICAgICAgICBsZXQgemlwQ29kZSA9IGAyMjYwMmA7XG4gICAgICAgIGxldCBjb3VudHJ5Q29kZSA9IGB1c2A7XG4gICAgICAgIGxldCBVUkwgPSBgYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3ppcD0ke3ppcENvZGV9LCR7Y291bnRyeUNvZGV9JmFwcGlkPSR7QVBJa2V5fWA7XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goVVJMKTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIHt3ZWF0aGVyX2RhdGE6IGRhdGF9O1xuXG4gICAgfVxuICAgXG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgLy9yZW5kZXIgbWV0aG9kIHNob3VsZCByZXR1cm4gSlNYXG4gICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzID0gdGhpcy5nZXRXZWF0aGVyKClcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdXZWF0aGVyJz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+IFdlYXRoZXIgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHA+IC0gTGlzdCB0eXBlcyBvZiBjb25zdWx0czwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+IC0gZGlzcGxheSByZXRyaWV2ZWQgaW5mb3JtYXRpb24gZ3JhcGhpY2FsbHkgPC9wPlxuICAgICAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgICp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLldlYXRoZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjAsIDE4MCwgMjMwLCAuOClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7Il19 */\n/*@ sourceURL=/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/Weather.js */"));
    }
  }]);

  return Weather;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Weather);

/***/ })

})
//# sourceMappingURL=index.js.797ef0655a01cb378d84.hot-update.js.map