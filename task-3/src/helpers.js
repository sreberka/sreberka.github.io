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
        input.after(label);
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

        const newsList = new list(articles, chanelName);
        newsList.createItems();
    });
};

export { createNews, createChanel };
