var myLibrary =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const createNews = function (articles) {
    let newsBlock = document.createElement('div');
    newsBlock.classList.add('news-block');
    document.querySelector('.container').appendChild(newsBlock);

    let chanelName = document.createElement('h2');
    chanelName.innerHTML = articles[0].source.name;
    newsBlock.appendChild(chanelName);

    for (let i = 0; i < articles.length; i++) {
        let articleHead = document.createElement('h3');
        articleHead.innerHTML = articles[i].title;
        articleHead.classList.add(`article-${i}`);
        chanelName.after(articleHead);

        let articleText = document.createElement('p');
        articleText.innerHTML = articles[i].description;
        articleHead.after(articleText);

        let link = document.createElement('a');
        link.innerHTML = 'read more';
        link.setAttribute('href', articles[i].url);
        link.setAttribute('target', '_blank');

        articleText.appendChild(link);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (createNews);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_chanel__ = __webpack_require__(3);


const makeRequest = function (URL) {
    let result = null;
    let obj = fetch(URL, { mode: 'cors' }).then(res => {
        return res.json();
    }).then(res => {
        console.log(res.sources);
        //return res.articles;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__create_chanel__["a" /* default */])(res.sources);
    }).catch(error => {
        throw new Error('Error with fetch');
    });
    return obj;
};

/* harmony default export */ __webpack_exports__["a"] = (makeRequest);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_news__ = __webpack_require__(0);

// import createChanel from './create-chanel';


window.onload = function () {
    const container = document.createElement("div");
    container.innerHTML = "<h2>Hi! There are some chanels for you!</h2>";
    container.classList.add('container');
    document.body.appendChild(container);

    const form = document.createElement('form');
    container.appendChild(form);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])('https://newsapi.org/v2/sources?apiKey=9ff31ef0306944baa7b15c739cb34dbe');

    const button = document.createElement('button');
    button.innerHTML = 'Get the NEWS';
    container.after(button);
    let checked = [];
    button.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (e.target.classList.contains('clicked')) {
            e.target.classList.remove('clicked');
            container.innerHTML = "<h2>Hi! There are some chanels for you!</h2>";
            const form = document.createElement('form');
            container.appendChild(form);

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])('https://newsapi.org/v2/sources?apiKey=9ff31ef0306944baa7b15c739cb34dbe');
            checked = [];
            button.innerHTML = 'Get the NEWS';
        } else {
            e.target.classList.add('clicked');

            let arr = document.getElementsByTagName('input');
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].checked === true) {
                    checked.push(arr[i].id);
                }
            }
            console.log(checked);

            Promise.all(checked).then(values => {
                return values;
            }).then(values => {
                const makeRequest2 = function (URL) {
                    let result = null;
                    let obj = fetch(URL, { mode: 'cors' }).then(res => {
                        return res.json();
                    }).then(res => {
                        console.log(res.articles);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__create_news__["a" /* default */])(res.articles);
                    }).catch(error => {
                        throw new Error('Error with fetch');
                    });
                    return obj;
                };

                for (let i = 0; i < values.length; i++) {
                    makeRequest2(`https://newsapi.org/v2/top-headlines?sources=${values[i]}&apiKey=9ff31ef0306944baa7b15c739cb34dbe`);
                }
            });

            container.innerHTML = '';
            button.innerHTML = 'Back to all chanels';
        }
    });
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_news__ = __webpack_require__(0);


const createChanel = function (chanel) {
    for (let i = 0; i < chanel.length; i++) {
        let inputContainer = document.createElement('div');
        inputContainer.classList.add('chanel');
        document.querySelector('form').appendChild(inputContainer);

        let input = document.createElement('input');
        input.id = chanel[i].id;
        input.type = 'checkbox';
        inputContainer.appendChild(input);

        let label = document.createElement('label');
        label.innerHTML = chanel[i].name;
        label.setAttribute('for', chanel[i].id);
        input.after(label);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (createChanel);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map