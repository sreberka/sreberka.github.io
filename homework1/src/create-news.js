const createNews = function (articles) {
    let newsBlock = document.createElement('div');
    newsBlock.classList.add('news-block');
    document.querySelector('.container').appendChild(newsBlock);

    let chanelName = document.createElement('h2');
    chanelName.innerHTML = articles[0].source.name;
    newsBlock.appendChild(chanelName);


    for(let i = 0; i < articles.length; i++) {
        let articleHead = document.createElement('h3');
        articleHead.innerHTML = articles[i].title;
        articleHead.classList.add(`article-${i}`);
        chanelName.after(articleHead);

        let articleText = document.createElement('p');
        articleText.innerHTML = articles[i].description;
        articleHead.after(articleText);

        let link = document.createElement('a');
        link.innerHTML = 'read more';
        link.setAttribute('href', articles[i].url);
        link.setAttribute('target', '_blank');

        articleText.appendChild(link);
    }
};

export default createNews;
