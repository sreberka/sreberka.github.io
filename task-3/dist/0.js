webpackJsonp([0],{

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(9);

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
                var articleHead = document.createElement('h3');
                articleHead.innerHTML = this.articles[i].title;
                articleHead.classList.add('article-' + i);
                this.chanelName.after(articleHead);

                var date = document.createElement('span');
                date.innerHTML = this.articles[i].publishedAt.slice(0, 10).split('-').reverse().join('.');
                articleHead.after(date);

                var articleText = document.createElement('p');
                articleText.innerHTML = this.articles[i].description;
                date.after(articleText);

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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "span {\n  font-size: 15px;\n  font-weight: 600;\n  color: darkred; }\n\n.news-block {\n  padding: 1em 2em;\n  margin: 10px;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.7);\n  background: rgba(255, 255, 255, 0.8); }\n\n.news-block h2 {\n  color: darkred;\n  border-bottom: 4px double darkred;\n  padding-bottom: 10px; }\n\nh3 {\n  color: #000;\n  margin-bottom: 0;\n  font-size: 2rem; }\n\np {\n  border-bottom: 1px dashed darkred;\n  padding-bottom: 10px;\n  font-size: 1.6rem; }\n\np:last-child {\n  border-bottom: none;\n  padding-bottom: 0; }\n\na {\n  display: block;\n  margin-top: 10px;\n  color: #4682b4;\n  text-decoration: none;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -ms-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\na:hover {\n  color: #191970;\n  text-decoration: underline; }\n", ""]);

// exports


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
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

});
//# sourceMappingURL=0.js.map