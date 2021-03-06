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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_utility_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_utility_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_utility_js__);

function showMenu(isLogon) {
    const doc = document;
    let className = isLogon ? 'isLogon' : 'isLogout',
        menu = doc.getElementsByClassName(className),
        len = menu.length;
    for (let i = 0; i < len; i++) {
        menu[i].style.display = 'list-item';
    }
}
function initData() {
    const doc = document, user = doc.getElementById('userdata').value, isLogon = doc.getElementById('islogon').value;
    let userData = null;
    if (user) {
        userData = JSON.parse(user);
        doc.getElementById('userImage').src = userData.avatar_url;
        doc.getElementById('sidebarUsername').innerText = userData.login;
    }
    showMenu(isLogon && isLogon !== 'false');
}

window.onload = function () {
    const doc = document;
    doc.getElementById('cnodeLogo').onclick = () => {
        window.location.href = '/';
    };
    doc.getElementById('home').onclick = () => {
        window.location.href = '/';
    };
    doc.getElementById('headerRegister').onclick = () => {
        window.location.href = '/sign/login';
    };
    doc.getElementById('headerLogin').onclick = () => {
        window.location.href = '/sign/login';
    };
    doc.getElementById('logout').onclick = () => {
        __WEBPACK_IMPORTED_MODULE_0__common_utility_js___default.a.ajax('/sign/logout', 'POST', {}).then(() => {
            window.location.href = '/';
        }).catch((err) => { console.log(err); });
    };
    doc.getElementsByClassName('topic-list-item')[0].onclick = (e) => {
        let topicId = e.target.id;
        window.location.href = '/topic/details/' + topicId;
    };
    initData();
};

/***/ })
/******/ ]);