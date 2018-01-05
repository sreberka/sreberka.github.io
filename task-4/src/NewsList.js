import './lazy.scss';
import Factory from './Factory';

class NewsList {
    constructor(articles, container) {
        this.articles = articles;
        this.container = container;
    }

    createItems() {
        for(let i = 0; i < this.articles.length; i++) {
            let newElement = new Factory();
            newElement.createElement('h3', this.articles[i].title, `article-${i}`, this.container);
            newElement.createElement('span', this.articles[i].publishedAt.slice(0, 10).split('-').reverse().join('.'), 'date', this.container);
            newElement.createElement('p', this.articles[i].description, 'article-text', this.container);

            let link = new Factory();
            link.createElement('a', 'read more...', 'link', this.container);
            link.setAttribute('href', this.articles[i].url);
            link.setAttribute('target', '_blank');
        }
    }
}

export default NewsList;
