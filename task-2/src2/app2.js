window.onload = function () {
    let makeRequest = function response(query, func) {
        //return new Promise(function() {
        let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        let xhr = new XHR();
        xhr.open('GET', query, true);
        xhr.onload = function () {
            let obj = JSON.parse(this.responseText);
            func(obj);
        };
        xhr.onerror = function () {
            throw new Error('Error with request!!!');
        };
        xhr.send();
        //});

    };

    class NewsList {
        constructor(articles, container) {
            this.articles = articles;
            this.container = container;
        }

        createItems() {
            for(let i = 0; i < this.articles.length; i++) {
                let articleHead = document.createElement('h3');
                articleHead.innerHTML = this.articles[i].title;
                articleHead.classList.add(`article-${i}`);
                this.container.appendChild(articleHead);

                let date = document.createElement('span');
                date.innerHTML = this.articles[i].publishedAt.slice(0, 10).split('-').reverse().join('.');
                this.container.appendChild(date);

                let articleText = document.createElement('p');
                articleText.innerHTML = this.articles[i].description;
                this.container.appendChild(articleText);

                let link = document.createElement('a');
                link.innerHTML = 'read more...';
                link.setAttribute('href', this.articles[i].url);
                link.setAttribute('target', '_blank');
                articleText.appendChild(link);
            }
        }
    }

    const createChanel = (chanel) => {
        for(let i = 0; i < chanel.sources.length; i++) {
            const inputContainer = document.createElement('div');
            inputContainer.classList.add('chanel');
            document.querySelector('form').appendChild(inputContainer);

            const input = document.createElement('input');
            input.id = chanel.sources[i].id;
            input.type = 'checkbox';
            inputContainer.appendChild(input);

            const label = document.createElement('label');
            label.innerHTML = chanel.sources[i].name;
            label.setAttribute('for', chanel.sources[i].id);
            inputContainer.appendChild(label);
        }
    };

    const createNews = (chanel) => {
        const newsBlock = document.createElement('div');
        newsBlock.classList.add('news-block');
        document.querySelector('.container').appendChild(newsBlock);

        const articles = chanel.articles;
        const chanelName = document.createElement('h2');
        chanelName.innerHTML = articles[0].source.name;
        newsBlock.appendChild(chanelName);

        const newsList = new NewsList(articles, newsBlock);
        newsList.createItems();
    };

    const mainHeader = document.querySelector('h2');
    const container = document.querySelector('.container');
    const button = document.querySelector('button');
    const form = document.createElement('form');
    container.appendChild(form);
    makeRequest('https://newsapi.org/v2/sources?apiKey=9ff31ef0306944baa7b15c739cb34dbe', createChanel);

    let checked = [];

    button.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if(e.target.classList.contains('clicked')) {
            e.target.classList.remove('clicked');
            mainHeader.innerHTML = "Choose your favorite chanels to see the news:";
            container.innerHTML = '';
            form.innerHTML = '';
            container.appendChild(form);
            makeRequest('https://newsapi.org/v2/sources?apiKey=9ff31ef0306944baa7b15c739cb34dbe', createChanel);
            checked = [];
            button.innerHTML = 'Get the NEWS';
        }
        else {
            let arr = document.getElementsByTagName('input');
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].checked === true) {
                    checked.push(arr[i].id);
                }
            }

            if(checked.length !== 0) {
                e.target.classList.add('clicked');

                for (let i = 0; i < checked.length; i++) {
                    makeRequest(`https://newsapi.org/v2/top-headlines?sources=${checked[i]}&apiKey=9ff31ef0306944baa7b15c739cb34dbe`, createNews);
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
