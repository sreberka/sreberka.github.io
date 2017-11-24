const createNews = function (articles) {
    let newsBlock = document.createElement('div');
    newsBlock.classList.add('news-block');
    document.querySelector('.container').appendChild(newsBlock);

    let chanelName = document.createElement('h2');
    chanelName.innerHTML = articles.articles[0].source.name;
    newsBlock.appendChild(chanelName);


    for(let i = 0; i < articles.articles.length; i++) {
        let articleHead = document.createElement('h3');
        articleHead.innerHTML = articles.articles[i].title;
        articleHead.classList.add(`article-${i}`);
        chanelName.after(articleHead);

        let date = document.createElement('span');
        date.innerHTML = articles.articles[i].publishedAt.slice(0, 10).split('-').reverse().join('.');
        articleHead.after(date);


        let articleText = document.createElement('p');
        articleText.innerHTML = articles.articles[i].description;
        date.after(articleText);

        let link = document.createElement('a');
        link.innerHTML = 'read more';
        link.setAttribute('href', articles.articles[i].url);
        link.setAttribute('target', '_blank');

        articleText.appendChild(link);
    }
};

export default createNews;
