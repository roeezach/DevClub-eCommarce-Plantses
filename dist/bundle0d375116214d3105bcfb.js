/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato:400,700);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primaryColor: #51f07b;\n  --mainWhite: #fff;\n  --mainBlack: #222;\n  --mainGrey: #ececec;\n  --mainSpacing: 0.1rem;\n  --mainTransition: all 0.5s linear;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  color: var(--mainBlack);\n  background: var(--mainWhite);\n  font-family: \"Lato\", sans-serif;\n}\n\n/* --------------- Navbar ---------------- */\n.navbar {\n  position: sticky;\n  top: 0;\n  height: 60px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background: rgb(231, 226, 221);\n  z-index: 1;\n}\n\n.navbar-center {\n  width: 100%;\n  max-width: 1170px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 0.5rem;\n}\n\n.nav-icon {\n  font-size: 1.5rem;\n}\n\n.cart-btn {\n  position: relative;\n  cursor: pointer;\n}\n\n.cart-items {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  background: var(--primaryColor);\n  padding: 0 5px;\n  border-radius: 30%;\n  color: var(--mainWhite);\n}\n\n/* --------------- End of Navbar ---------------- */\n/* --------------- Hero ---------------- */\n.hero {\n  min-height: calc(100vh - 60px);\n  /* background: url(\"./assets/hero-bcg.jpeg\") center/cover no-repeat; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.banner {\n  text-align: center;\n  background: rgba(255, 255, 255, 0.8);\n  display: inline-block;\n  padding: 2rem;\n}\n\n.banner-title {\n  font-size: 3.4rem;\n  text-transform: uppercase;\n  letter-spacing: var(--mainSpacing);\n  margin-bottom: 3rem;\n}\n\n.banner-btn {\n  padding: 1rem 3rem;\n  text-transform: uppercase;\n  letter-spacing: var(--mainSpacing);\n  font-size: 1rem;\n  background: var(--primaryColor);\n  color: var(--mainBlack);\n  border: 1px solid var(--primaryColor);\n  transition: var(--mainTransition);\n  cursor: pointer;\n}\n\n.banner-btn:hover {\n  background: transparent;\n  color: var(--primaryColor);\n}\n\n/* --------------- End of Hero ---------------- */\n/* --------------- Products ---------------- */\n.products {\n  padding: 4rem 0;\n}\n\n.section-title h2 {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 5rem;\n  text-transform: capitalize;\n  letter-spacing: var(--mainSpacing);\n}\n\n.products-center {\n  width: 90vw;\n  margin: 0 auto;\n  max-width: 1170px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  grid-column-gap: 1.5rem;\n  grid-row-gap: 2rem;\n}\n\n.img-container {\n  position: relative;\n  overflow: hidden;\n}\n\n.bag-btn {\n  position: absolute;\n  top: 70%;\n  right: 0;\n  background: var(--primaryColor);\n  border: none;\n  text-transform: uppercase;\n  padding: 0.5rem 0.75rem;\n  letter-spacing: var(--mainSpacing);\n  font-weight: bold;\n  transition: var(--mainTransition);\n  transform: translateX(101%);\n  cursor: pointer;\n}\n\n.bag-btn:hover {\n  color: var(--mainWhite);\n}\n\n.fa-shopping-cart {\n  margin-right: 0.5rem;\n}\n\n.img-container:hover .bag-btn {\n  transform: translateX(0);\n}\n\n.product-img {\n  display: block;\n  width: 100%;\n  min-height: 12rem;\n  transition: var(--mainTransition);\n}\n\n.img-container:hover .product-img {\n  opacity: 0.5;\n}\n\n.product h3 {\n  text-transform: capitalize;\n  font-size: 1.1rem;\n  margin-top: 1rem;\n  letter-spacing: var(--mainSpacing);\n  text-align: center;\n}\n\n.product h4 {\n  margin-top: 0.7rem;\n  letter-spacing: var(--mainSpacing);\n  color: var(--primaryColor);\n  text-align: center;\n}\n\n/* ---------------End of Products ---------------- */\n/* --------------- Cart ---------------- */\n.cart-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  transition: var(--mainTransition);\n  background: rgba(227, 240, 81, 0.5);\n  z-index: 2;\n  visibility: hidden;\n}\n\n.cart {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  z-index: 3;\n  background: rgb(231, 226, 221);\n  padding: 1.5rem;\n  transition: var(--mainTransition);\n  transform: translateX(100%);\n}\n\n.showCart {\n  transform: translateX(0);\n}\n\n.transparentBcg {\n  visibility: visible;\n}\n\n@media screen and (min-width: 768px) {\n  .cart {\n    width: 30vw;\n    min-width: 450px;\n  }\n}\n.close-cart {\n  font-size: 1.7rem;\n  cursor: pointer;\n}\n\n.cart h2 {\n  text-transform: capitalize;\n  text-align: center;\n  letter-spacing: var(--mainSpacing);\n  margin-bottom: 2rem;\n}\n\n/*---------- Cart Item -------------------- */\n.cart-item {\n  display: grid;\n  align-items: center;\n  grid-template-columns: auto 1fr auto;\n  grid-column-gap: 1.5rem;\n  margin: 1.5rem 0;\n}\n\n.cart-item img {\n  width: 75px;\n  height: 75px;\n}\n\n.cart-item h4 {\n  font-size: 0.85rem;\n  text-transform: capitalize;\n  letter-spacing: var(--mainSpacing);\n}\n\n.cart-item h5 {\n  margin: 0.5rem 0;\n  letter-spacing: var(--mainSpacing);\n}\n\n.item-amount {\n  text-align: center;\n}\n\n.remove-item {\n  color: grey;\n  cursor: pointer;\n}\n\n.fa-chevron-up,\n.fa-chevron-down {\n  color: var(--primaryColor);\n  cursor: pointer;\n}\n\n/*---------- End of Cart Item -------------------- */\n.cart-footer {\n  margin-top: 2rem;\n  letter-spacing: var(--mainSpacing);\n  text-align: center;\n}\n\n.cart-footer h3 {\n  text-transform: capitalize;\n  margin-bottom: 1rem;\n}\n\n/* --------------- End of Cart ---------------- */", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\r\n\r\n\r\n:root {\r\n    --primaryColor: #51f07b;\r\n    --mainWhite: #fff;\r\n    --mainBlack: #222;\r\n    --mainGrey: #ececec;\r\n    --mainSpacing: 0.1rem;\r\n    --mainTransition: all 0.5s linear;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    color: var(--mainBlack);\r\n    background: var(--mainWhite);\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n/* --------------- Navbar ---------------- */\r\n.navbar {\r\n    position: sticky;\r\n    top: 0;\r\n    height: 60px;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    background: rgb(231, 226, 221);\r\n    z-index: 1;\r\n}\r\n\r\n.navbar-center {\r\n    width: 100%;\r\n    max-width: 1170px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 0.5rem;\r\n}\r\n\r\n.nav-icon {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.cart-btn {\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-items {\r\n    position: absolute;\r\n    top: -8px;\r\n    right: -8px;\r\n    background: var(--primaryColor);\r\n    padding: 0 5px;\r\n    border-radius: 30%;\r\n    color: var(--mainWhite);\r\n}\r\n\r\n/* --------------- End of Navbar ---------------- */\r\n\r\n/* --------------- Hero ---------------- */\r\n\r\n.hero {\r\n    min-height: calc(100vh - 60px);\r\n    /* background: url(\"./assets/hero-bcg.jpeg\") center/cover no-repeat; */\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.banner {\r\n    text-align: center;\r\n    background: rgba(255, 255, 255, 0.8);\r\n    display: inline-block;\r\n    padding: 2rem;\r\n}\r\n\r\n.banner-title {\r\n    font-size: 3.4rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: var(--mainSpacing);\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.banner-btn {\r\n    padding: 1rem 3rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: var(--mainSpacing);\r\n    font-size: 1rem;\r\n    background: var(--primaryColor);\r\n    color: var(--mainBlack);\r\n    border: 1px solid var(--primaryColor);\r\n    transition: var(--mainTransition);\r\n    cursor: pointer;\r\n}\r\n\r\n.banner-btn:hover {\r\n    background: transparent;\r\n    color: var(--primaryColor);\r\n}\r\n\r\n/* --------------- End of Hero ---------------- */\r\n\r\n/* --------------- Products ---------------- */\r\n\r\n.products {\r\n    padding: 4rem 0;\r\n}\r\n\r\n.section-title h2 {\r\n    text-align: center;\r\n    font-size: 2.5rem;\r\n    margin-bottom: 5rem;\r\n    text-transform: capitalize;\r\n    letter-spacing: var(--mainSpacing);\r\n}\r\n\r\n.products-center {\r\n    width: 90vw;\r\n    margin: 0 auto;\r\n    max-width: 1170px;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\r\n    grid-column-gap: 1.5rem;\r\n    grid-row-gap: 2rem;\r\n}\r\n\r\n.img-container {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.bag-btn {\r\n    position: absolute;\r\n    top: 70%;\r\n    right: 0;\r\n    background: var(--primaryColor);\r\n    border: none;\r\n    text-transform: uppercase;\r\n    padding: 0.5rem 0.75rem;\r\n    letter-spacing: var(--mainSpacing);\r\n    font-weight: bold;\r\n    transition: var(--mainTransition);\r\n    transform: translateX(101%);\r\n    cursor: pointer;\r\n}\r\n\r\n.bag-btn:hover {\r\n    color: var(--mainWhite);\r\n}\r\n\r\n.fa-shopping-cart {\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.img-container:hover .bag-btn {\r\n    transform: translateX(0);\r\n}\r\n\r\n.product-img {\r\n    display: block;\r\n    width: 100%;\r\n    min-height: 12rem;\r\n    transition: var(--mainTransition);\r\n}\r\n\r\n.img-container:hover .product-img {\r\n    opacity: 0.5;\r\n}\r\n\r\n.product h3 {\r\n    text-transform: capitalize;\r\n    font-size: 1.1rem;\r\n    margin-top: 1rem;\r\n    letter-spacing: var(--mainSpacing);\r\n    text-align: center;\r\n}\r\n\r\n.product h4 {\r\n    margin-top: 0.7rem;\r\n    letter-spacing: var(--mainSpacing);\r\n    color: var(--primaryColor);\r\n    text-align: center;\r\n}\r\n\r\n/* ---------------End of Products ---------------- */\r\n\r\n/* --------------- Cart ---------------- */\r\n.cart-overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: var(--mainTransition);\r\n    background: rgba(227, 240, 81, 0.5);\r\n    z-index: 2;\r\n    visibility: hidden;\r\n}\r\n\r\n.cart {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: scroll;\r\n    z-index: 3;\r\n    background: rgb(231, 226, 221);\r\n    padding: 1.5rem;\r\n    transition: var(--mainTransition);\r\n    transform: translateX(100%);\r\n}\r\n\r\n.showCart {\r\n    transform: translateX(0);\r\n}\r\n\r\n.transparentBcg {\r\n    visibility: visible;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .cart {\r\n        width: 30vw;\r\n        min-width: 450px;\r\n    }\r\n}\r\n\r\n.close-cart {\r\n    font-size: 1.7rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart h2 {\r\n    text-transform: capitalize;\r\n    text-align: center;\r\n    letter-spacing: var(--mainSpacing);\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n/*---------- Cart Item -------------------- */\r\n.cart-item {\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: auto 1fr auto;\r\n    grid-column-gap: 1.5rem;\r\n    margin: 1.5rem 0;\r\n}\r\n\r\n.cart-item img {\r\n    width: 75px;\r\n    height: 75px;\r\n}\r\n\r\n.cart-item h4 {\r\n    font-size: 0.85rem;\r\n    text-transform: capitalize;\r\n    letter-spacing: var(--mainSpacing);\r\n}\r\n\r\n.cart-item h5 {\r\n    margin: 0.5rem 0;\r\n    letter-spacing: var(--mainSpacing);\r\n}\r\n\r\n.item-amount {\r\n    text-align: center;\r\n}\r\n\r\n.remove-item {\r\n    color: grey;\r\n    cursor: pointer;\r\n}\r\n\r\n.fa-chevron-up,\r\n.fa-chevron-down {\r\n    color: var(--primaryColor);\r\n    cursor: pointer;\r\n}\r\n\r\n/*---------- End of Cart Item -------------------- */\r\n\r\n.cart-footer {\r\n    margin-top: 2rem;\r\n    letter-spacing: var(--mainSpacing);\r\n    text-align: center;\r\n}\r\n\r\n.cart-footer h3 {\r\n    text-transform: capitalize;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n/* --------------- End of Cart ---------------- */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/logo.jpg":
/*!*****************************!*\
  !*** ./src/assets/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.jpg";

/***/ }),

/***/ "./src/assets/product-1.jpg":
/*!**********************************!*\
  !*** ./src/assets/product-1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "product-1.jpg";

/***/ }),

/***/ "./src/assets/product-2.jpg":
/*!**********************************!*\
  !*** ./src/assets/product-2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "product-2.jpg";

/***/ }),

/***/ "./src/assets/product-3.jpg":
/*!**********************************!*\
  !*** ./src/assets/product-3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "product-3.jpg";

/***/ }),

/***/ "./src/assets/product-4.jpg":
/*!**********************************!*\
  !*** ./src/assets/product-4.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "product-4.jpg";

/***/ }),

/***/ "./src/assets/product-5.jpg":
/*!**********************************!*\
  !*** ./src/assets/product-5.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "product-5.jpg";

/***/ }),

/***/ "./src/assets/product-6.jpg":
/*!**********************************!*\
  !*** ./src/assets/product-6.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "product-6.jpg";

/***/ }),

/***/ "./src/assets/product-7.jpg":
/*!**********************************!*\
  !*** ./src/assets/product-7.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "product-7.jpg";

/***/ }),

/***/ "./src/assets/product-8.jpg":
/*!**********************************!*\
  !*** ./src/assets/product-8.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "product-8.jpg";

/***/ }),

/***/ "./src/assets/products.json":
/*!**********************************!*\
  !*** ./src/assets/products.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"items":[{"sys":{"id":"1"},"fields":{"title":"queen panel bed","price":10.99,"image":{"fields":{"file":{"url":"./assets/product-1.jpg"}}}}},{"sys":{"id":"2"},"fields":{"title":"king panel bed","price":12.99,"image":{"fields":{"file":{"url":"./assets/product-2.jpg"}}}}},{"sys":{"id":"3"},"fields":{"title":"single panel bed","price":12.99,"image":{"fields":{"file":{"url":"./assets/product-3.jpg"}}}}},{"sys":{"id":"4"},"fields":{"title":"twin panel bed","price":22.99,"image":{"fields":{"file":{"url":"./assets/product-4.jpg"}}}}},{"sys":{"id":"5"},"fields":{"title":"fridge","price":88.99,"image":{"fields":{"file":{"url":"./assets/product-5.jpg"}}}}},{"sys":{"id":"6"},"fields":{"title":"dresser","price":32.99,"image":{"fields":{"file":{"url":"./assets/product-6.jpg"}}}}},{"sys":{"id":"7"},"fields":{"title":"couch","price":45.99,"image":{"fields":{"file":{"url":"./assets/product-7.jpg"}}}}},{"sys":{"id":"8"},"fields":{"title":"table","price":33.99,"image":{"fields":{"file":{"url":"./assets/product-8.jpg"}}}}}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _assets_products_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/products.json */ "./src/assets/products.json");
/* harmony import */ var _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo.jpg */ "./src/assets/logo.jpg");
/* harmony import */ var _assets_product_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/product-1.jpg */ "./src/assets/product-1.jpg");
/* harmony import */ var _assets_product_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/product-2.jpg */ "./src/assets/product-2.jpg");
/* harmony import */ var _assets_product_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/product-3.jpg */ "./src/assets/product-3.jpg");
/* harmony import */ var _assets_product_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/product-4.jpg */ "./src/assets/product-4.jpg");
/* harmony import */ var _assets_product_5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/product-5.jpg */ "./src/assets/product-5.jpg");
/* harmony import */ var _assets_product_6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/product-6.jpg */ "./src/assets/product-6.jpg");
/* harmony import */ var _assets_product_7_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/product-7.jpg */ "./src/assets/product-7.jpg");
/* harmony import */ var _assets_product_8_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/product-8.jpg */ "./src/assets/product-8.jpg");
// import generateJoke from "./modules/generateJoke.js"



// import UI from './Views/productView';








// import { json } from 'body-parser'


const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const clearCartBtn = document.getElementById('clear-cart');
const cartDOM = document.getElementById('cart');
const cartOverlay = document.getElementById('cart-overlay');
const cartItems = document.getElementById('cart-items');
// const cartTotal = document.getElementById('cart-total');
const cartContent = document.getElementById('cart-content');
const productsDOM = document.getElementById('products-center');
// const logo = document.getElementById("logo").src = Logo;
// we should somehow append the string in get element by id to relay on the product id

const prod1 = document.getElementById("product1").src = _assets_product_1_jpg__WEBPACK_IMPORTED_MODULE_3__;
const prod2 = document.getElementById("product2").src = _assets_product_2_jpg__WEBPACK_IMPORTED_MODULE_4__;
const prod3 = document.getElementById("product3").src = _assets_product_3_jpg__WEBPACK_IMPORTED_MODULE_5__;
const prod4 = document.getElementById("product4").src = _assets_product_4_jpg__WEBPACK_IMPORTED_MODULE_6__;
const prod5 = document.getElementById("product5").src = _assets_product_5_jpg__WEBPACK_IMPORTED_MODULE_7__;
const prod6 = document.getElementById("product6").src = _assets_product_6_jpg__WEBPACK_IMPORTED_MODULE_8__;
const prod7 = document.getElementById("product7").src = _assets_product_7_jpg__WEBPACK_IMPORTED_MODULE_9__;
const prod8 = document.getElementById("product8").src = _assets_product_8_jpg__WEBPACK_IMPORTED_MODULE_10__;
console.log(prod1);



//cart
let cart = []

//buttons
let buttonDOM = []



class Products {
    getProducts() {
        // try {
        console.log(_assets_products_json__WEBPACK_IMPORTED_MODULE_1__);
        let products = _assets_products_json__WEBPACK_IMPORTED_MODULE_1__.items;
        products = products.map(item => {
            const { title, price } = item.fields;
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            return { title, price, id, image }
        })
        return products;
        // }
        // catch (error) {
        //     console.log(error);
        // }

    }
}
//display products - view maybe catalog module

class UI {

    displayProducts(products) {
        let result = '';
        const productsImages = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8]

        products.forEach(product => {

            result += `<article class="product">
            <div class="img-container">
                <img src="${productsImages[product.id - 1]}" class="product-img" id="" alt="product">
                <button class="bag-btn" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>
                    add to bag
                </button>
            </div>
            <h3>${product.title}</h3>
            <h4>$${product.price}</h4>
        </article>`
            productsDOM.innerHTML = result
        });
    }

    getBagButtons() {
        const btns = [...document.querySelectorAll(".bag-btn")];
        buttonDOM = btns;
        btns.forEach(btn => {
            let id = btn.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if (inCart) {
                btn.innerText = "In Cart";
                btn.disabled = true;
            }
            btn.addEventListener('click', (event) => {
                event.target.innerText = "in Cart"
                event.target.disabled = true;
                //get product from products 
                let cartItem = storage.getProductFromLS(id);
                //add product to the cart
                //save the cart in LS
                //set cart values
                //display cart item
                //show the cart
            })
        })
    }
}

// class - cart

//local storage

class storage {

    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products))
    }

    static getProductFromLS(id) {
        let productsLS = JSON.parse(localStorage.getItem('products'))
        return productsLS.find(item => item.id === id)
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();

    //get allproducts
    const productsArr = products.getProducts();
    ui.displayProducts(productsArr);
    ui.getBagButtons();
});







})();

/******/ })()
;
//# sourceMappingURL=bundle0d375116214d3105bcfb.js.map