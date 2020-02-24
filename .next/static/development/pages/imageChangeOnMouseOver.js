(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\imageChangeOnMouseOver.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5CZakol%5COneDrive%5CDesktop%5Cpractice_react_hooks%5Cpages%5CimageChangeOnMouseOver.js!./":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5CZakol%5COneDrive%5CDesktop%5Cpractice_react_hooks%5Cpages%5CimageChangeOnMouseOver.js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/imageChangeOnMouseOver", function() {
      var mod = __webpack_require__(/*! ./pages/imageChangeOnMouseOver.js */ "./pages/imageChangeOnMouseOver.js")
      if(true) {
        module.hot.accept(/*! ./pages/imageChangeOnMouseOver.js */ "./pages/imageChangeOnMouseOver.js", function() {
          if(!next.router.components["/imageChangeOnMouseOver"]) return
          var updatedPage = __webpack_require__(/*! ./pages/imageChangeOnMouseOver.js */ "./pages/imageChangeOnMouseOver.js")
          next.router.update("/imageChangeOnMouseOver", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5f137288facb1107b491 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/imageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/imageChangeOnMouseOver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ "./src/ImageToggleOnMouseOver.js");
var _jsxFileName = "C:\\Users\\Zakol\\OneDrive\\Desktop\\practice_react_hooks\\pages\\imageChangeOnMouseOver.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChangeOnMouseOver = function ImageChangeOnMouseOver() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/images/aaron-irizarry.jpg",
    secondaryImg: "/static/images/adam-connor.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), "/>");
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnMouseOver);

/***/ }),

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Zakol\\OneDrive\\Desktop\\practice_react_hooks\\src\\ImageToggleOnMouseOver.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageToggleOnMouseOver = function ImageToggleOnMouseOver(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx("img", {
    onMouseOver: function onMouseOver() {
      imageRef.current.src = secondaryImg;
    },
    onMouseOut: function onMouseOut() {
      imageRef.current.src = primaryImg;
    },
    src: primaryImg,
    alt: "",
    ref: imageRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnMouseOver);

/***/ }),

/***/ 2:
/*!*******************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FimageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5CZakol%5COneDrive%5CDesktop%5Cpractice_react_hooks%5Cpages%5CimageChangeOnMouseOver.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FimageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5CZakol%5COneDrive%5CDesktop%5Cpractice_react_hooks%5Cpages%5CimageChangeOnMouseOver.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5CZakol%5COneDrive%5CDesktop%5Cpractice_react_hooks%5Cpages%5CimageChangeOnMouseOver.js!./");


/***/ }),

/***/ "dll-reference dll_5f137288facb1107b491":
/*!*******************************************!*\
  !*** external "dll_5f137288facb1107b491" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5f137288facb1107b491;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=imageChangeOnMouseOver.js.map