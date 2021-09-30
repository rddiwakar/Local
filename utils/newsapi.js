const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API);

function fetchNews(q) {
    return newsapi.v2.everything({q});
}

module.exports = fetchNews;