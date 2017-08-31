/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

let ajax = (actionUrl, type, data) => {
    return new Promise(function (resolve, reject) {
        let ajaxSetting = {
            url: actionUrl,
            type: type,
            data: data,
            success(result) {
                resolve(result);
            },
            error(err) { reject(err); }
        };
        $.ajax(ajaxSetting);
    });
}, strHelper = {};

strHelper.trim = (str) => {
    return str.replace(/(^\s*)|(\s*$)/g, '');
};

module.exports = {
    ajax: ajax,
    strHelper: strHelper
};

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_utility_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_utility_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_utility_js__);


window.onload = function () {
    const doc = document;
    doc.getElementById('createTopicForm').onsubmit = function () {
        let boardName = doc.getElementById('selectTab').value,
            title = doc.getElementById('topicTitle').value,
            content = doc.getElementById('createTopicText').value;
        if (!boardName) {
            alert('你必须选择一个版块');
            return false;
        }
        if (title.length <= 10) {
            alert('标题字数必须大于10');
            return false;
        }
        if (__WEBPACK_IMPORTED_MODULE_0__common_utility_js___default.a.strHelper.trim(content).length === 0) {
            alert('你必须输入话题内容');
            return false;
        }
    };
};

/***/ })
/******/ ]);