import makeRequest from './Request';

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
    import(/* webpackChunkName: "NewsList" */
        /* webpackMode: "lazy" */
        './NewsList').then(module => {
        const list = module.default;
        console.log(list);

        const newsBlock = document.createElement('div');
        newsBlock.classList.add('news-block');
        document.querySelector('.container').appendChild(newsBlock);

        const articles = chanel.articles;
        const chanelName = document.createElement('h2');
        chanelName.innerHTML = articles[0].source.name;
        newsBlock.appendChild(chanelName);

        const newsList = new list(articles, newsBlock);
        newsList.createItems();
    });
};

// Facade.
const stopEvent = (event) => {
    event.preventDefault();
    event.stopPropagation();
};

// Observer.
const observer = (e) => {
    stopEvent(e);

    const mainHeader = document.querySelector('h2');
    const container = document.querySelector('.container');
    const button = document.querySelector('button');
    const form = document.createElement('form');

    let checked = [];
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
            Promise.all(checked).then(values => {
                return values;
            })
                .then(values => {
                        for (let i = 0; i < values.length; i++) {
                            makeRequest(`https://newsapi.org/v2/top-headlines?sources=${values[i]}&apiKey=9ff31ef0306944baa7b15c739cb34dbe`, createNews);
                        }
                    }
                );

            container.innerHTML = '';
            mainHeader.innerHTML = "Here are some news for you:";
            button.innerHTML = 'Back to all chanels';
        }
    }
};

export { createChanel, observer };
