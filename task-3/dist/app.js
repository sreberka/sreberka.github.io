/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var makeRequest = function makeRequest(URL, func) {
    fetch(URL, { mode: 'cors' }).then(function (res) {
        return res.json();
    }).then(function (res) {
        func(res);
    }).catch(function (error) {
        throw new Error('Error with fetch');
    });
};

exports.default = makeRequest;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
        input.after(label);
    }
};

var createNews = function createNews(chanel) {
    new Promise(function (resolve) {
        __webpack_require__.e/* require.ensure */(0).then((function (require) {
            resolve(__webpack_require__( /* webpackChunkName: "NewsList" */
            /* webpackMode: "lazy" */
            3));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }).then(function (module) {
        var list = module.default;
        console.log(list);

        var newsBlock = document.createElement('div');
        newsBlock.classList.add('news-block');
        document.querySelector('.container').appendChild(newsBlock);

        var articles = chanel.articles;
        var chanelName = document.createElement('h2');
        chanelName.innerHTML = articles[0].source.name;
        newsBlock.appendChild(chanelName);

        var newsList = new list(articles, chanelName);
        newsList.createItems();
    });
};

exports.createNews = createNews;
exports.createChanel = createChanel;

/***/ }),
/* 2 */
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

                Promise.all(checked).then(function (values) {
                    return values;
                }).then(function (values) {
                    for (var _i = 0; _i < values.length; _i++) {
                        (0, _Request2.default)('https://newsapi.org/v2/top-headlines?sources=' + values[_i] + '&apiKey=9ff31ef0306944baa7b15c739cb34dbe', _helpers.createNews);
                    }
                });

                container.innerHTML = '';
                mainHeader.innerHTML = "Here are some news for you:";
                button.innerHTML = 'Back to all chanels';
            }
        }
    });
};

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map