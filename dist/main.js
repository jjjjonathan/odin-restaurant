/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\nfunction render() {\n  const text = {\n    h1: \"Juicy, cheesy smashed burgers\",\n    lead: \"And truffle fries with gourmet dipping sauces.\",\n    body: \"Online ordering coming soon!\",\n    button: \"View menu\",\n  };\n\n  const main = document.getElementById(\"content\");\n  main.textContent = \"\";\n\n  const jumbotron = document.createElement(\"div\");\n  jumbotron.classList.add(\"jumbotron\", \"text-center\");\n  main.appendChild(jumbotron);\n\n  const h1 = document.createElement(\"h1\");\n  h1.classList.add(\"display-4\");\n  h1.textContent = text.h1;\n  jumbotron.appendChild(h1);\n\n  const lead = document.createElement(\"p\");\n  lead.classList.add(\"lead\");\n  lead.textContent = text.lead;\n  jumbotron.appendChild(lead);\n\n  const hr = document.createElement(\"hr\");\n  hr.classList.add(\"my-4\");\n  jumbotron.appendChild(hr);\n\n  const body = document.createElement(\"p\");\n  body.textContent = text.body;\n  jumbotron.appendChild(body);\n\n  const button = document.createElement(\"button\");\n  button.classList.add(\"btn\", \"btn-primary\", \"btn-lg\");\n  button.textContent = text.button;\n  jumbotron.appendChild(button);\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\nfunction onload() { \n  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)()\n\n  const homeTab = document.getElementById(\"home-tab\");\n  const menuTab = document.getElementById(\"menu-tab\");\n  const contactTab = document.getElementById(\"contact-tab\");\n\n  homeTab.addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_0__.default);\n  menuTab.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__.default);\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", onload);\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\nfunction render() {\n  const menuItems = [\n    {\n      item: \"The Flashburger\",\n      description: \"Two smashed and grilled patties of our beef/bacon blend covered in cheese and toppings\"\n    },\n    {\n      item: \"The Smashburger\",\n      description: \"Two smashed and grilled patties between a smashed bun\"\n    },\n    {\n      item: \"The Trashburger\",\n      description: \"A beef patty, turkey patty, and fish stick smothered in gravy and barbeque sauce between two soft pretzels\"\n    },\n    {\n      item: \"The Thrashburger\",\n      description: \"Beef crumbles in bernaise sauce\"\n    }\n  ]\n  \n  const main = document.getElementById(\"content\");\n  content.textContent = \"\";\n\n  const header = document.createElement(\"h1\");\n  header.classList.add(\"text-center\", \"menu-header\", \"display-4\");\n  header.textContent = \"Menu\";\n  main.appendChild(header);\n\n  const container = document.createElement(\"div\");\n  container.classList.add(\"container\");\n  main.appendChild(container);\n\n  const cardDeck = document.createElement(\"div\");\n  cardDeck.classList.add(\"card-deck\", \"mb-3\");\n  container.appendChild(cardDeck);\n\n  menuItems.forEach(item => {\n    addCard(item.item, item.description)\n  });\n\n  function addCard(title, content) {\n    const card = document.createElement(\"div\");\n    card.classList.add(\"card\", \"menu-card\", \"mb-4\", \"shadow\");\n\n    const cardHeader = document.createElement(\"div\");\n    cardHeader.classList.add(\"card-header\", \"pt-4\");\n    card.appendChild(cardHeader);\n\n    const cardTitle = document.createElement(\"h4\");\n    cardTitle.textContent = title;\n    cardHeader.appendChild(cardTitle);\n\n    const cardBody = document.createElement(\"div\");\n    cardBody.classList.add(\"card-body\", \"pb-2\");\n    card.appendChild(cardBody);\n\n    const cardContent = document.createElement(\"p\");\n    cardContent.textContent = content;\n    cardBody.appendChild(cardContent);\n\n    container.appendChild(card);\n  }\n\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;