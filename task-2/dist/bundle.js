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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// const makeRequest = (URL, func) => {
//     fetch(URL, {mode: 'cors'})
//         .then((res) => {
//             return res.json();
//         })
//         .then((res) => {
//             func(res);
//         })
//         .catch((error) => {
//             throw new Error('Error with fetch');
//         });
// };
//
// export default makeRequest;


var makeRequest = function response(query, func) {
    var XHR = "onload" in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;
    var xhr = new XHR();
    xhr.open('GET', query, true);
    xhr.onload = function () {
        var obj = JSON.parse(this.responseText);
        func(obj);
    };
    xhr.onerror = function () {
        throw new Error('Error with request!!!');
    };
    xhr.send();
};

exports.default = makeRequest;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createChanel = exports.createNews = undefined;

var _NewsList = __webpack_require__(2);

var _NewsList2 = _interopRequireDefault(_NewsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createChanel = function createChanel(chanel) {
    for (var i = 0; i < chanel.sources.length; i++) {
        var inputContainer = document.createElement('div');
        inputContainer.classList.add('chanel');
        document.querySelector('form').appendChild(inputContainer);

        var input = document.createElement('input');
        input.id = chanel.sources[i].id;
        input.type = 'checkbox';
        inputContainer.appendChild(input);

        var label = document.createElement('label');
        label.innerHTML = chanel.sources[i].name;
        label.setAttribute('for', chanel.sources[i].id);
        inputContainer.appendChild(label);
    }
};

var createNews = function createNews(chanel) {
    var newsBlock = document.createElement('div');
    newsBlock.classList.add('news-block');
    document.querySelector('.container').appendChild(newsBlock);

    var articles = chanel.articles;
    var chanelName = document.createElement('h2');
    chanelName.innerHTML = articles[0].source.name;
    newsBlock.appendChild(chanelName);

    var newsList = new _NewsList2.default(articles, chanelName);
    newsList.createItems();
};

exports.createNews = createNews;
exports.createChanel = createChanel;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewsList = function () {
    function NewsList(articles, chanelName) {
        _classCallCheck(this, NewsList);

        this.articles = articles;
        this.chanelName = chanelName;
    }

    _createClass(NewsList, [{
        key: 'createItems',
        value: function createItems() {
            for (var i = 0; i < this.articles.length; i++) {
                var newsBlock = document.querySelector('.news-block');

                var articleHead = document.createElement('h3');
                articleHead.innerHTML = this.articles[i].title;
                articleHead.classList.add('article-' + i);
                newsBlock.appendChild(articleHead);
                //this.chanelName.after(articleHead);

                var date = document.createElement('span');
                date.innerHTML = this.articles[i].publishedAt.slice(0, 10).split('-').reverse().join('.');
                newsBlock.appendChild(date);

                var articleText = document.createElement('p');
                articleText.innerHTML = this.articles[i].description;
                newsBlock.appendChild(articleText);

                var link = document.createElement('a');
                link.innerHTML = 'read more...';
                link.setAttribute('href', this.articles[i].url);
                link.setAttribute('target', '_blank');
                articleText.appendChild(link);
            }
        }
    }]);

    return NewsList;
}();

exports.default = NewsList;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Request = __webpack_require__(0);

var _Request2 = _interopRequireDefault(_Request);

var _helpers = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
    var mainHeader = document.querySelector('h2');
    var container = document.querySelector('.container');
    var button = document.querySelector('button');
    var form = document.createElement('form');
    container.appendChild(form);
    (0, _Request2.default)('https://newsapi.org/v2/sources?apiKey=9ff31ef0306944baa7b15c739cb34dbe', _helpers.createChanel);

    var checked = [];

    button.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (e.target.classList.contains('clicked')) {
            e.target.classList.remove('clicked');
            mainHeader.innerHTML = "Choose your favorite chanels to see the news:";
            container.innerHTML = '';
            form.innerHTML = '';
            container.appendChild(form);
            (0, _Request2.default)('https://newsapi.org/v2/sources?apiKey=9ff31ef0306944baa7b15c739cb34dbe', _helpers.createChanel);
            checked = [];
            button.innerHTML = 'Get the NEWS';
        } else {
            var arr = document.getElementsByTagName('input');
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].checked === true) {
                    checked.push(arr[i].id);
                }
            }

            if (checked.length !== 0) {
                e.target.classList.add('clicked');

                for (var _i = 0; _i < checked.length; _i++) {
                    (0, _Request2.default)('https://newsapi.org/v2/top-headlines?sources=' + checked[_i] + '&apiKey=9ff31ef0306944baa7b15c739cb34dbe', _helpers.createNews);
                }

                // Promise.all(checked).then(values => {
                //     return values;
                // })
                //     .then(values => {
                //             for (let i = 0; i < values.length; i++) {
                //                 makeRequest(`https://newsapi.org/v2/top-headlines?sources=${values[i]}&apiKey=9ff31ef0306944baa7b15c739cb34dbe`, createNews);
                //             }
                //         }
                //     );

                container.innerHTML = '';
                mainHeader.innerHTML = "Here are some news for you:";
                button.innerHTML = 'Back to all chanels';
            }
        }
    });
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map