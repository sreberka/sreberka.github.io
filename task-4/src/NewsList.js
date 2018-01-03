import './lazy.scss';
import Factory from './Patterns';

class NewsList {
    constructor(articles, container) {
        this.articles = articles;
        this.container = container;
    }

    createItems() {
        for(let i = 0; i < this.articles.length; i++) {
            let header = new Factory('h3', this.articles[i].title, `article-${i}`, this.container);
            header.createElement();

            let date = new Factory('span', this.articles[i].publishedAt.slice(0, 10).split('-').reverse().join('.'), 'date', this.container)
            date.createElement();

            let articleText = new Factory('p', this.articles[i].description, 'article-text', this.container);
            articleText.createElement();

            let link = new Factory('a', 'read more...', 'link', this.container);
            link.createElement();
            link.setAttribute('href', this.articles[i].url);
            link.setAttribute('target', '_blank');
        }
    }
}

export default NewsList;
