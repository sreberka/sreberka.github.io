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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__find__ = __webpack_require__(4);


const createForm = function createForm() {
    const form = document.createElement('form');
    form.setAttribute('method', 'GET');
    form.innerHTML = '<input type="text" id="query" placeholder="search"><span class="fa fa-search"></span>';
    form.setAttribute('action', 'javascript:void(null)');
    document.body.appendChild(form);
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__find__["a" /* default */])();
    });
};

/* harmony default export */ __webpack_exports__["a"] = (createForm);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const createResultCont = function createResultCont() {
    const resContainer = document.createElement('div');
    resContainer.id = 'result';
    document.querySelector('body').appendChild(resContainer);
};

/* harmony default export */ __webpack_exports__["a"] = (createResultCont);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_form__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_res_cont__ = __webpack_require__(1);



var nextPage = null;
window.onload = function init() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__create_form__["a" /* default */])();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__create_res_cont__["a" /* default */])();
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let createPagination = function createPagination() {
    let viewport = document.createElement('div');
    viewport.id = 'viewport';
    document.body.appendChild(viewport);
    let pagination = document.createElement('ul');
    pagination.classList.add('pagination');
    viewport.appendChild(pagination);
};

/* harmony default export */ __webpack_exports__["a"] = (createPagination);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__response__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_pagination__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__move_paging__ = __webpack_require__(5);




let find = function find() {
    document.querySelector('#result').innerHTML = '';
    if (document.querySelector('#viewport') != null) {
        document.querySelector('#viewport').remove();
    }
    let page = document.createElement('div');
    page.classList.add('page');
    document.querySelector('#result').appendChild(page);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__response__["a" /* default */])();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__create_pagination__["a" /* default */])();
    let startX = null;
    page.addEventListener('mousedown', function (event) {
        startX = event.clientX;
    });
    page.addEventListener('mouseup', function (event) {
        event.preventDefault();
        event.stopPropagation();
        let move = document.querySelector('#result').clientWidth;
        let margin = document.querySelector('.page').style.marginLeft.replace('px', '');
        if (event.clientX > startX) {
            if (Number(margin) < 0) {
                document.querySelector('.page').style.marginLeft = Number(margin) + move + 'px';
                document.querySelector('.active').previousElementSibling.classList.add('active');
                document.querySelector('.active').nextSibling.classList.remove('active');
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__move_paging__["a" /* default */])();
            }
        } else if (event.clientX < startX) {
            let stopScroll = document.querySelector('.page').clientWidth;
            if (Number(margin) > -(stopScroll - move)) {
                document.querySelector('.page').style.marginLeft = Number(margin) - move + 'px';
                document.querySelector('.active').nextSibling.classList.add('active');
                document.querySelector('.active').classList.remove('active');
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__move_paging__["a" /* default */])();
            } else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__response__["a" /* default */])(myLibrary.nextPage);
            }
        }
        let responsePoint = document.querySelector('.pagination').children[document.querySelector('.pagination').children.length - 2];
        if (responsePoint.classList.contains('active')) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__response__["a" /* default */])(myLibrary.nextPage);
        }
    });

    page.addEventListener('touchstart', function (event) {
        let touchEnd = event.changedTouches[0];
        let endSwipeX = touchEnd.pageX;
        startX = endSwipeX;
    });
    page.addEventListener('touchend', function (event) {
        event.preventDefault();
        event.stopPropagation();
        let touchEnd = event.changedTouches[0];
        let endSwipeX = touchEnd.pageX;
        let move = document.querySelector('#result').clientWidth;
        let margin = document.querySelector('.page').style.marginLeft.replace('px', '');
        if (endSwipeX > startX) {
            if (Number(margin) < 0) {
                document.querySelector('.page').style.marginLeft = Number(margin) + move + 'px';
                document.querySelector('.active').previousElementSibling.classList.add('active');
                document.querySelector('.active').nextSibling.classList.remove('active');
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__move_paging__["a" /* default */])();
            }
        } else if (endSwipeX < startX) {
            let stopScroll = document.querySelector('.page').clientWidth;
            if (Number(margin) > -(stopScroll - move)) {
                document.querySelector('.page').style.marginLeft = Number(margin) - move + 'px';
                document.querySelector('.active').nextSibling.classList.add('active');
                document.querySelector('.active').classList.remove('active');
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__move_paging__["a" /* default */])();
            }
            let responsePoint = document.querySelector('.pagination').children[document.querySelector('.pagination').children.length - 2];
            if (responsePoint.classList.contains('active')) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__response__["a" /* default */])(myLibrary.nextPage);
            }
        }
    });
};

/* harmony default export */ __webpack_exports__["a"] = (find);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let movePaging = function movePaging() {
    let itemsArr = document.querySelector('.pagination');
    if (Number(document.querySelector('.active').innerHTML) > 3) {
        itemsArr.style.marginLeft = -(Number(document.querySelector('.active').innerHTML) * 30 - 90) + 'px';
    } else {
        itemsArr.style.marginLeft = 0;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (movePaging);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

let response = function response(query) {
    if (!query) {
        query = '';
    }
    let XHR = "onload" in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;
    let xhr = new XHR();
    let search = document.getElementById('query').value;
    xhr.open('GET', 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDSA6izDJNqROs4MgFz9Au9QAdKC7YyeFQ&type=video&part=snippet&maxResults=15&q=' + search + '&pageToken=' + query, true);
    xhr.onload = function () {
        let obj = JSON.parse(this.responseText);
        myLibrary.nextPage = obj.nextPageToken;
        for (let i = 0; i < obj.items.length; i++) {
            let vid = obj.items[i].id.videoId;
            let newXHR = "onload" in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;
            let newxhr = new newXHR();
            newxhr.open('GET', 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDSA6izDJNqROs4MgFz9Au9QAdKC7YyeFQ&id=' + vid + '&part=snippet,statistics', true);
            newxhr.onload = function () {
                let that = this;
                let obj = JSON.parse(that.responseText);
                let image = obj.items[0].snippet.thumbnails.default.url;
                let item = document.createElement('div');
                item.classList.add('item');
                document.querySelector('.page').appendChild(item);
                let tag = document.createElement('img');
                tag.src = image;
                tag.setAttribute('ondrag', 'return false');
                tag.setAttribute('ondragdrop', 'return false');
                tag.setAttribute('ondragstart', 'return false');
                item.appendChild(tag);
                let title = document.createElement('a');
                title.innerHTML = obj.items[0].snippet.title;
                let id = obj.items[0].id;
                title.href = 'https://www.youtube.com/watch?v=' + id;
                title.target = '_blank';
                item.appendChild(title);
                let author = document.createElement('p');
                author.innerHTML = '<span class="fa fa-user"></span>' + obj.items[0].snippet.channelTitle;
                item.appendChild(author);
                let calendar = document.createElement('p');
                calendar.innerHTML = '<span class="fa fa-calendar"></span>' + obj.items[0].snippet.publishedAt.slice(0, 10);
                item.appendChild(calendar);
                let wached = document.createElement('p');
                wached.innerHTML = '<span class="fa fa-eye"></span>' + obj.items[0].statistics.viewCount;
                item.appendChild(wached);
                let description = document.createElement('p');
                description.innerHTML = obj.items[0].snippet.description.slice(0, 80) + '...';
                item.appendChild(description);
            };
            newxhr.onerror = function () {
                document.write('error ' + this.status);
            };
            newxhr.send();
        }
        let points = Math.ceil(15 / (document.getElementById('result').clientWidth / 280));
        let pointsAmount = document.querySelector('.pagination').children.length;
        for (let i = pointsAmount + 1; i < pointsAmount + points; i++) {
            let pageItem = document.createElement('li');
            pageItem.innerHTML = i;
            document.querySelector('.pagination').appendChild(pageItem);
            if (i === 1) {
                pageItem.classList.add('active');
            }
        }

        let itemsArr = document.querySelector('.pagination');
        itemsArr.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            for (let i = 0; i < itemsArr.children.length; i++) {
                if (itemsArr.children[i].classList.contains('active')) {
                    itemsArr.children[i].classList.remove('active');
                }
            }
            e.target.classList.add('active');
            if (e.target.classList.contains('active') && Number(e.target.innerHTML) > 3) {
                itemsArr.style.marginLeft = -(Number(e.target.innerHTML) * 30 - 90) + 'px';
            }
            let container = document.querySelector('#result').clientWidth;
            let page = document.querySelector('.page');
            page.style.marginLeft = -(container * Number(e.target.innerHTML) - container) + 'px';
            let responsePoint = document.querySelector('.pagination').children[document.querySelector('.pagination').children.length - 2];
            let responsePoint2 = document.querySelector('.pagination').children[document.querySelector('.pagination').children.length - 1];
            if (responsePoint.classList.contains('active') || responsePoint2.classList.contains('active')) {
                response(myLibrary.nextPage);
            }
        });
    };
    xhr.onerror = function () {
        document.write('error ' + this.status);
    };
    xhr.send();
};

/* harmony default export */ __webpack_exports__["a"] = (response);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map