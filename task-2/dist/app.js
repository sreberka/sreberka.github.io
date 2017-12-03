'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function () {
    var makeRequest = function response(query, func) {
        //return new Promise(function() {
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
        //});
    };

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
                    var articleHead = document.createElement('h3');
                    articleHead.innerHTML = this.articles[i].title;
                    articleHead.classList.add('article-' + i);
                    this.container.appendChild(articleHead);

                    var date = document.createElement('span');
                    date.innerHTML = this.articles[i].publishedAt.slice(0, 10).split('-').reverse().join('.');
                    this.container.appendChild(date);

                    var articleText = document.createElement('p');
                    articleText.innerHTML = this.articles[i].description;
                    this.container.appendChild(articleText);

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

        var newsList = new NewsList(articles, newsBlock);
        newsList.createItems();
    };

    var mainHeader = document.querySelector('h2');
    var container = document.querySelector('.container');
    var button = document.querySelector('button');
    var form = document.createElement('form');
    container.appendChild(form);
    makeRequest('https://newsapi.org/v2/sources?apiKey=9ff31ef0306944baa7b15c739cb34dbe', createChanel);

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
            makeRequest('https://newsapi.org/v2/sources?apiKey=9ff31ef0306944baa7b15c739cb34dbe', createChanel);
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
                    makeRequest('https://newsapi.org/v2/top-headlines?sources=' + checked[_i] + '&apiKey=9ff31ef0306944baa7b15c739cb34dbe', createNews);
                }

                container.innerHTML = '';
                mainHeader.innerHTML = "Here are some news for you:";
                button.innerHTML = 'Back to all chanels';
            }
        }
    });
};