import NewsItem from './NewsItem';

const createNews = (chanel) => {
    const newsBlock = document.createElement('div');
    newsBlock.classList.add('news-block');
    document.querySelector('.container').appendChild(newsBlock);

    const articles = chanel.articles;
    const chanelName = document.createElement('h2');
    chanelName.innerHTML = articles[0].source.name;
    newsBlock.appendChild(chanelName);

    const newsItem = new NewsItem(articles, chanelName);
    newsItem.createItem();
};

export default createNews;
