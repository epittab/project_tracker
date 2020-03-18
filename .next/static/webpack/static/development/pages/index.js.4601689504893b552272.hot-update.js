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
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _apikey__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../apikey */ "./apikey.js");








var _jsxFileName = "/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/Weather.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Weather = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Weather, _React$Component);

  function Weather(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Weather);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Weather).call(this, props));
    _this.state = {
      zipCode: "22602",
      countryCode: 'us',
      data: "1"
    };
    _this.loadData = _this.loadData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Weather, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getWeather().then(function (data) {
        _this2.setState(_objectSpread({}, _this2.state, {
          data: data.cod
        }));
      });
      console.log("component did mount");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
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
              APIkey = _apikey__WEBPACK_IMPORTED_MODULE_11__["apiKey"].weatherApiKey;
              URL = "http://api.openweathermap.org/data/2.5/weather?zip=".concat(this.state.zipCode, ",").concat(this.state.countryCode, "&appid=").concat(APIkey);
              _context.prev = 2;
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()(URL));

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
    key: "loadData",
    value: function loadData() {
      var newInfo = this.getWeather();
      console.log(newInfo);
      this.setState(_objectSpread({}, this.state, {
        data: newInfo.cod
      }));
      console.log(newInfo.cod);
    }
  }, {
    key: "render",
    value: function render() {
      console.log("rendered"); //render method should return JSX

      return __jsx("div", {
        className: "jsx-2822472847" + " " + 'Weather',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, " Weather "), __jsx("p", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, " - List types of consults"), __jsx("p", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, " - display retrieved information graphically "), __jsx("p", {
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, " hello ", this.state.data, " "), __jsx("button", {
        onClick: this.loadData,
        className: "jsx-2822472847",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Click Me!")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2822472847",
        __self: this
      }, "*.jsx-2822472847{margin:0;padding:0;box-sizing:border-box;}.Weather.jsx-2822472847{background-color:rgba(160,180,230,.8);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbnJpcXVlcGl0dGFsdWdhL0Rlc2t0b3AvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcHJvamVjdHRyYWNrZXIvQ29tcG9uZW50cy9XZWF0aGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGcUIsQUFHc0MsQUFPZCxTQU5lLFVBQ1ksbUJBSzFCLEdBSkEiLCJmaWxlIjoiL1VzZXJzL2VucmlxdWVwaXR0YWx1Z2EvRGVza3RvcC9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9wcm9qZWN0dHJhY2tlci9Db21wb25lbnRzL1dlYXRoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmltcG9ydCB7YXBpS2V5fSBmcm9tICcuLi9hcGlrZXknXG5cbmNsYXNzIFdlYXRoZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBuYW1lOiBcIkVucmlxdWVcIlxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgICAgIHppcENvZGU6IGAyMjYwMmAsXG4gICAgICAgICAgICBjb3VudHJ5Q29kZTogJ3VzJyxcbiAgICAgICAgICAgIGRhdGE6IFwiMVwiLFxuICAgICAgICB9ICAgICAgIFxuICAgICAgICB0aGlzLmxvYWREYXRhID0gdGhpcy5sb2FkRGF0YS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuZ2V0V2VhdGhlcigpLnRoZW4oICggZGF0YSApID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YS5jb2RcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgZGlkIG1vdW50XCIpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCl7XG5cblxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBkaWQgdXBkYXRlXCIpXG4gICAgfVxuICAgIFxuICBcblxuICAgIGFzeW5jIGdldFdlYXRoZXIoKXtcbiAgICAgICAgbGV0IEFQSWtleSA9IGFwaUtleS53ZWF0aGVyQXBpS2V5O1xuICAgICAgICBsZXQgVVJMID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/emlwPSR7dGhpcy5zdGF0ZS56aXBDb2RlfSwke3RoaXMuc3RhdGUuY291bnRyeUNvZGV9JmFwcGlkPSR7QVBJa2V5fWA7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFVSTCk7XG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBNZXNzYWdlJyk7ICAgIFxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkRGF0YSgpe1xuICAgICAgICBsZXQgbmV3SW5mbyA9IHRoaXMuZ2V0V2VhdGhlcigpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdJbmZvKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICBkYXRhOiBuZXdJbmZvLmNvZFxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdJbmZvLmNvZClcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXJlZFwiKVxuICAgICAgICAvL3JlbmRlciBtZXRob2Qgc2hvdWxkIHJldHVybiBKU1hcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnV2VhdGhlcic+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPiBXZWF0aGVyIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwPiAtIExpc3QgdHlwZXMgb2YgY29uc3VsdHM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPiAtIGRpc3BsYXkgcmV0cmlldmVkIGluZm9ybWF0aW9uIGdyYXBoaWNhbGx5IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+IGhlbGxvIHt0aGlzLnN0YXRlLmRhdGF9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5sb2FkRGF0YX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDbGljayBNZSFcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cblxuXG5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgICp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLldlYXRoZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjAsIDE4MCwgMjMwLCAuOClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7Il19 */\n/*@ sourceURL=/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/Weather.js */"));
    }
  }]);

  return Weather;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Weather, "defaultProps", {
  name: "Enrique"
});

/* harmony default export */ __webpack_exports__["default"] = (Weather);

/***/ })

})
//# sourceMappingURL=index.js.4601689504893b552272.hot-update.js.map