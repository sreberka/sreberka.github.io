class NewsList {
    constructor(articles, chanelName) {
        this.articles = articles;
        this.chanelName = chanelName;
    }

    createItems() {
        for(let i = 0; i < this.articles.length; i++) {
            let newsBlock = document.querySelector('.news-block');

            let articleHead = document.createElement('h3');
            articleHead.innerHTML = this.articles[i].title;
            articleHead.classList.add(`article-${i}`);
            newsBlock.appendChild(articleHead);

            let date = document.createElement('span');
            date.innerHTML = this.articles[i].publishedAt.slice(0, 10).split('-').reverse().join('.');
            newsBlock.appendChild(date);

            let articleText = document.createElement('p');
            articleText.innerHTML = this.articles[i].description;
            newsBlock.appendChild(articleText);

            let link = document.createElement('a');
            link.innerHTML = 'read more...';
            link.setAttribute('href', this.articles[i].url);
            link.setAttribute('target', '_blank');
            articleText.appendChild(link);
        }
    }
}

export default NewsList;
