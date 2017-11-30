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

export default NewsList;
