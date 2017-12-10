webpackJsonp([0],{

/***/ 3:
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

/***/ })

});
//# sourceMappingURL=0.js.map