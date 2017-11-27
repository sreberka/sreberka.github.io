import NewsList from './NewsList';

const createNews = (chanel) => {
    const newsBlock = document.createElement('div');
    newsBlock.classList.add('news-block');
    document.querySelector('.container').appendChild(newsBlock);

    const articles = chanel.articles;
    const chanelName = document.createElement('h2');
    chanelName.innerHTML = articles[0].source.name;
    newsBlock.appendChild(chanelName);

    const newsList = new NewsList(articles, chanelName);
    newsList.createItems();
};

export default createNews;
