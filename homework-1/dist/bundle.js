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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const createChanel = function (chanel) {
    for (let i = 0; i < chanel.sources.length; i++) {
        let inputContainer = document.createElement('div');
        inputContainer.classList.add('chanel');
        document.querySelector('form').appendChild(inputContainer);

        let input = document.createElement('input');
        input.id = chanel.sources[i].id;
        input.type = 'checkbox';
        inputContainer.appendChild(input);

        let label = document.createElement('label');
        label.innerHTML = chanel.sources[i].name;
        label.setAttribute('for', chanel.sources[i].id);
        input.after(label);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (createChanel);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const createNews = function (articles) {
    let newsBlock = document.createElement('div');
    newsBlock.classList.add('news-block');
    document.querySelector('.container').appendChild(newsBlock);

    let chanelName = document.createElement('h2');
    chanelName.innerHTML = articles.articles[0].source.name;
    newsBlock.appendChild(chanelName);

    for (let i = 0; i < articles.articles.length; i++) {
        let articleHead = document.createElement('h3');
        articleHead.innerHTML = articles.articles[i].title;
        articleHead.classList.add(`article-${i}`);
        chanelName.after(articleHead);

        let date = document.createElement('span');
        date.innerHTML = articles.articles[i].publishedAt.slice(0, 10).split('-').reverse().join('.');
        articleHead.after(date);

        let articleText = document.createElement('p');
        articleText.innerHTML = articles.articles[i].description;
        date.after(articleText);

        let link = document.createElement('a');
        link.innerHTML = 'read more';
        link.setAttribute('href', articles.articles[i].url);
        link.setAttribute('target', '_blank');

        articleText.appendChild(link);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (createNews);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const makeRequest = function (URL, func) {
    let obj = fetch(URL, { mode: 'cors' }).then(res => {
        return res.json();
    }).then(res => {
        func(res);
    }).catch(error => {
        throw new Error('Error with fetch');
    });
    return obj;
};

/* harmony default export */ __webpack_exports__["a"] = (makeRequest);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_chanel__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_news__ = __webpack_require__(1);




window.onload = function () {
    const mainHeader = document.querySelector('h2');
    const container = document.querySelector('.container');
    const button = document.querySelector('button');
    const form = document.createElement('form');
    container.appendChild(form);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])('https://newsapi.org/v2/sources?apiKey=9ff31ef0306944baa7b15c739cb34dbe', __WEBPACK_IMPORTED_MODULE_1__create_chanel__["a" /* default */]);

    let checked = [];
    button.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (e.target.classList.contains('clicked')) {
            e.target.classList.remove('clicked');
            mainHeader.innerHTML = "Choose your favorite chanels to see the news:";
            container.innerHTML = '';
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

            Promise.all(checked).then(values => {
                return values;
            }).then(values => {
                for (let i = 0; i < values.length; i++) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])(`https://newsapi.org/v2/top-headlines?sources=${values[i]}&apiKey=9ff31ef0306944baa7b15c739cb34dbe`, __WEBPACK_IMPORTED_MODULE_2__create_news__["a" /* default */]);
                }
            });

            container.innerHTML = '';
            mainHeader.innerHTML = "Here are some news for you:";
            button.innerHTML = 'Back to all chanels';
        }
    });
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map