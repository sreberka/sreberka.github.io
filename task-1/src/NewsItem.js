class NewsItem {
    constructor(articles, chanelName) {
        this.articles = articles;
        this.chanelName = chanelName;
    }

    createItem() {
        for(let i = 0; i < this.articles.length; i++) {
            this.articleHead = document.createElement('h3');
            this.articleHead.innerHTML = this.articles[i].title;
            this.articleHead.classList.add(`article-${i}`);
            this.chanelName.after(this.articleHead);

            this.date = document.createElement('span');
            this.date.innerHTML = this.articles[i].publishedAt.slice(0, 10).split('-').reverse().join('.');
            this.articleHead.after(this.date);

            this.articleText = document.createElement('p');
            this.articleText.innerHTML = this.articles[i].description;
            this.date.after(this.articleText);

            this.link = document.createElement('a');
            this.link.innerHTML = 'read more...';
            this.link.setAttribute('href', this.articles[i].url);
            this.link.setAttribute('target', '_blank');
            this.articleText.appendChild(this.link);
        }
    }
}

export default NewsItem;
