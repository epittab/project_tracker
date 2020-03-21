webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/ProjectComponents/ProjectList.js":
false,

/***/ "./Components/UserComponents/Register.js":
/*!***********************************************!*\
  !*** ./Components/UserComponents/Register.js ***!
  \***********************************************/
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








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;


var Register = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Register, _React$Component);

  function Register(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Register);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Register).call(this, props));
    _this.state = {
      first_name: first_name,
      last_name: last_name,
      user_name: user_name,
      email: email,
      password: password
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Register, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-750656228" + " " + 'Register'
      }, __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-750656228"
      }, __jsx("label", {
        htmlFor: "Register-fname",
        className: "jsx-750656228" + " " + 'Register-form-label'
      }, "First Name: "), __jsx("input", {
        id: "Register-fname",
        name: "first_name",
        type: "text",
        value: this.state.first_name,
        onChange: this.handleChange,
        className: "jsx-750656228" + " " + 'Register-form-input'
      }), __jsx("label", {
        htmlFor: "Register-lname",
        className: "jsx-750656228" + " " + 'Register-form-label'
      }, "Last Name: "), __jsx("input", {
        id: "Register-lname",
        name: "last_name",
        type: "text",
        value: this.state.last_name,
        onChange: this.handleChange,
        className: "jsx-750656228" + " " + 'Register-form-input'
      }), __jsx("label", {
        htmlFor: "Register-email",
        className: "jsx-750656228" + " " + 'Register-form-label'
      }, "E-Mail: "), __jsx("input", {
        id: "Register-email",
        name: "email",
        type: "email",
        value: this.state.email,
        onChange: this.handleChange,
        className: "jsx-750656228" + " " + 'Register-form-input'
      }), __jsx("label", {
        htmlFor: "Register-user-name",
        className: "jsx-750656228" + " " + 'Register-form-label'
      }, "User Name: "), __jsx("input", {
        id: "Register-user-name",
        name: "user_name",
        type: "text",
        value: this.state.user_name,
        onChange: this.handleChange,
        className: "jsx-750656228" + " " + 'Register-form-input'
      }), __jsx("label", {
        htmlFor: "Register-password",
        className: "jsx-750656228" + " " + 'Register-form-label'
      }), __jsx("input", {
        id: "Register-password",
        name: "password",
        type: "password",
        value: this.state.password,
        onChange: this.handleChange,
        className: "jsx-750656228" + " " + 'Register-form-input'
      }), __jsx("button", {
        className: "jsx-750656228"
      }, "Register")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "750656228"
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbnJpcXVlcGl0dGFsdWdhL0Rlc2t0b3AvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcHJvamVjdHRyYWNrZXIvQ29tcG9uZW50cy9Vc2VyQ29tcG9uZW50cy9SZWdpc3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRnFCIiwiZmlsZSI6Ii9Vc2Vycy9lbnJpcXVlcGl0dGFsdWdhL0Rlc2t0b3AvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcHJvamVjdHRyYWNrZXIvQ29tcG9uZW50cy9Vc2VyQ29tcG9uZW50cy9SZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZpcnN0X25hbWUsXG4gICAgICAgICAgICBsYXN0X25hbWUsXG4gICAgICAgICAgICB1c2VyX25hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cblxuICAgIGhhbmRsZVN1Ym1pdChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdSZWdpc3Rlcic+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cblxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdSZWdpc3Rlci1mb3JtLWxhYmVsJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPSdSZWdpc3Rlci1mbmFtZSc+Rmlyc3QgTmFtZTogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdSZWdpc3Rlci1mbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J1JlZ2lzdGVyLWZvcm0taW5wdXQnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2ZpcnN0X25hbWUnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlyc3RfbmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT48L2lucHV0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J1JlZ2lzdGVyLWZvcm0tbGFiZWwnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J1JlZ2lzdGVyLWxuYW1lJz5MYXN0IE5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nUmVnaXN0ZXItbG5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdSZWdpc3Rlci1mb3JtLWlucHV0JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdsYXN0X25hbWUnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGFzdF9uYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nUmVnaXN0ZXItZm9ybS1sYWJlbCcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nUmVnaXN0ZXItZW1haWwnPkUtTWFpbDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdSZWdpc3Rlci1lbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J1JlZ2lzdGVyLWZvcm0taW5wdXQnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT48L2lucHV0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J1JlZ2lzdGVyLWZvcm0tbGFiZWwnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J1JlZ2lzdGVyLXVzZXItbmFtZSc+VXNlciBOYW1lOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J1JlZ2lzdGVyLXVzZXItbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J1JlZ2lzdGVyLWZvcm0taW5wdXQnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3VzZXJfbmFtZScgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VyX25hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+PC9pbnB1dD5cblxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdSZWdpc3Rlci1mb3JtLWxhYmVsJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPSdSZWdpc3Rlci1wYXNzd29yZCc+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdSZWdpc3Rlci1wYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J1JlZ2lzdGVyLWZvcm0taW5wdXQnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT48L2lucHV0PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5SZWdpc3RlcjwvYnV0dG9uPiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsiXX0= */\n/*@ sourceURL=/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/UserComponents/Register.js */"));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./Components/UserComponents/Signin.js":
/*!*********************************************!*\
  !*** ./Components/UserComponents/Signin.js ***!
  \*********************************************/
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








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;


var Signin = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Signin, _React$Component);

  function Signin(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Signin);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Signin).call(this, props));
    _this.state = {
      email: email,
      password: password
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Signin, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-750656228" + " " + 'Signin'
      }, __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-750656228"
      }, __jsx("label", {
        htmlFor: "Signin-email",
        className: "jsx-750656228" + " " + 'Signin-form-label'
      }, "E-Mail: "), __jsx("input", {
        id: "Signin-email",
        name: "email",
        type: "email",
        value: this.state.email,
        onChange: this.handleChange,
        className: "jsx-750656228" + " " + 'Signin-form-input'
      }), __jsx("label", {
        htmlFor: "Signin-password",
        className: "jsx-750656228" + " " + 'Signin-form-label'
      }), __jsx("input", {
        id: "Signin-password",
        name: "password",
        type: "password",
        value: this.state.password,
        onChange: this.handleChange,
        className: "jsx-750656228" + " " + 'Signin-form-input'
      }), __jsx("button", {
        className: "jsx-750656228"
      }, "Signin")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "750656228"
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbnJpcXVlcGl0dGFsdWdhL0Rlc2t0b3AvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcHJvamVjdHRyYWNrZXIvQ29tcG9uZW50cy9Vc2VyQ29tcG9uZW50cy9TaWduaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERxQiIsImZpbGUiOiIvVXNlcnMvZW5yaXF1ZXBpdHRhbHVnYS9EZXNrdG9wL1Byb2dyYW1taW5nL1Byb2plY3RzL3Byb2plY3R0cmFja2VyL0NvbXBvbmVudHMvVXNlckNvbXBvbmVudHMvU2lnbmluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgU2lnbmluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgIFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG5cbiAgICBoYW5kbGVTdWJtaXQoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nU2lnbmluJz5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXG4gICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nU2lnbmluLWZvcm0tbGFiZWwnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J1NpZ25pbi1lbWFpbCc+RS1NYWlsOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J1NpZ25pbi1lbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J1NpZ25pbi1mb3JtLWlucHV0JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+PC9pbnB1dD5cblxuICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdTaWduaW4tZm9ybS1sYWJlbCcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nU2lnbmluLXBhc3N3b3JkJz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J1NpZ25pbi1wYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J1NpZ25pbi1mb3JtLWlucHV0JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+PC9pbnB1dD5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+U2lnbmluPC9idXR0b24+ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25pbjsiXX0= */\n/*@ sourceURL=/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/Components/UserComponents/Signin.js */"));
    }
  }]);

  return Signin;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Signin);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.js");
/* harmony import */ var _Components_Weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Weather */ "./Components/Weather.js");
/* harmony import */ var _Components_UserComponents_Signin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/UserComponents/Signin */ "./Components/UserComponents/Signin.js");
/* harmony import */ var _Components_UserComponents_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/UserComponents/Register */ "./Components/UserComponents/Register.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Index = function Index() {
  return __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
    className: "jsx-1554851008" + " " + "Index"
  }, __jsx("h1", {
    className: "jsx-1554851008"
  }, "Home"), __jsx("p", {
    className: "jsx-1554851008"
  }, "Hello World, this is your project tracker"), __jsx(_Components_UserComponents_Signin__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_Components_UserComponents_Register__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_Components_Weather__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1554851008"
  }, "*.jsx-1554851008{margin:0;padding:0;box-sizing:border-box;font-family:sans-serif;background-color:rgba(230,230,230,.8);color:rgba(40,40,40,.8);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbnJpcXVlcGl0dGFsdWdhL0Rlc2t0b3AvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcHJvamVjdHRyYWNrZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JpQixBQUc4QixTQUNDLFVBQ1ksc0JBQ0MsdUJBQ2tCLHNDQUNkLHdCQUMvQiIsImZpbGUiOiIvVXNlcnMvZW5yaXF1ZXBpdHRhbHVnYS9EZXNrdG9wL1Byb2dyYW1taW5nL1Byb2plY3RzL3Byb2plY3R0cmFja2VyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgV2VhdGhlciBmcm9tICcuLi9Db21wb25lbnRzL1dlYXRoZXInO1xuaW1wb3J0IFNpZ25pbiBmcm9tICcuLi9Db21wb25lbnRzL1VzZXJDb21wb25lbnRzL1NpZ25pbic7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9Vc2VyQ29tcG9uZW50cy9SZWdpc3Rlcic7XG5cblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG5cbiAgICA8TGF5b3V0PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJJbmRleFwiPlxuICAgICAgICBcbiAgICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgICAgIDxwPkhlbGxvIFdvcmxkLCB0aGlzIGlzIHlvdXIgcHJvamVjdCB0cmFja2VyPC9wPlxuXG4gICAgICAgICAgICA8IFNpZ25pbiAvPlxuXG4gICAgICAgICAgICA8IFJlZ2lzdGVyIC8+XG5cbiAgICAgICAgICAgIDxXZWF0aGVyIC8+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAqe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgMjMwLCAyMzAsIC44KTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoNDAsIDQwLCA0MCwgLjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuXG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICA8L0xheW91dD5cblxuKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=/Users/enriquepittaluga/Desktop/Programming/Projects/projecttracker/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./sample_projects.js":
false

})
//# sourceMappingURL=index.js.65315e052be318eddfa5.hot-update.js.map