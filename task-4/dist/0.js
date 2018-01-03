webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(12);

var _Patterns = __webpack_require__(10);

var _Patterns2 = _interopRequireDefault(_Patterns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewsList = function () {
    function NewsList(articles, container) {
        _classCallCheck(this, NewsList);

        this.articles = articles;
        this.container = container;
    }

    _createClass(NewsList, [{
        key: 'createItems',
        value: function createItems() {
            for (var i = 0; i < this.articles.length; i++) {
                var header = new _Patterns2.default('h3', this.articles[i].title, 'article-' + i, this.container);
                header.createElement();

                var date = new _Patterns2.default('span', this.articles[i].publishedAt.slice(0, 10).split('-').reverse().join('.'), 'date', this.container);
                date.createElement();

                var articleText = new _Patterns2.default('p', this.articles[i].description, 'article-text', this.container);
                articleText.createElement();

                var link = new _Patterns2.default('a', 'read more...', 'link', this.container);
                link.createElement();
                link.setAttribute('href', this.articles[i].url);
                link.setAttribute('target', '_blank');
            }
        }
    }]);

    return NewsList;
}();

exports.default = NewsList;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Factory = function () {
    function Factory(tag, inner, className, place) {
        _classCallCheck(this, Factory);

        this.tag = tag;
        this.inner = inner;
        this.className = className;
        this.place = place;
    }

    _createClass(Factory, [{
        key: "createElement",
        value: function createElement() {
            this.elementTag = document.createElement(this.tag);
            this.elementTag.innerHTML = this.inner;
            this.elementTag.classList.add(this.className);
            this.place.appendChild(this.elementTag);
        }
    }, {
        key: "setAttribute",
        value: function setAttribute(attrName, attrValue) {
            this.elementTag.setAttribute(attrName, attrValue);
        }
    }]);

    return Factory;
}();

exports.default = Factory;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "span {\n  font-size: 15px;\n  font-weight: 600;\n  color: darkred; }\n\n.news-block {\n  padding: 1em 2em;\n  margin: 10px;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.7);\n  background: rgba(255, 255, 255, 0.8); }\n\n.news-block h2 {\n  color: darkred;\n  border-bottom: 4px double darkred;\n  padding-bottom: 10px; }\n\nh3 {\n  color: #000;\n  margin-bottom: 0;\n  font-size: 2rem; }\n\np {\n  padding-bottom: 10px;\n  font-size: 1.6rem; }\n\n.link {\n  font-size: 1.5rem;\n  display: block;\n  margin-top: 10px;\n  padding-bottom: 10px;\n  color: #4682b4;\n  text-decoration: none;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -ms-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  border-bottom: 1px dashed darkred; }\n\na:hover {\n  color: #191970;\n  text-decoration: underline; }\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./lazy.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./lazy.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })
]);
//# sourceMappingURL=0.js.map