import { apiKey } from '../config/config';
// example request https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY
// two main endpoints: /v2/top-headlines & /v2/everything
// some examples or query parameters: q=trump, country=us, sources=bbc-news - this is based on the ID of the source, no id=404
// use & for more than one paramter country=us&sources=bbc-news, category=business, pageSize = int between 1 - 100(max)
// page = used to navigate through pages if more than 1 is found.
// example request to find articles based on a query, with a specific date range: https://newsapi.org/v2/everything?q=apple&from=2018-05-30&to=2018-05-30&sortBy=popularity&apiKey=API_KEY


export const getQuery = (query, params) => {
    console.log('Get query called', apiKey);
};

export const getEverything = (query, params) => {
    console.log('Get everything called', apiKey);
};

export const getTopNews = (query, params) => {
    console.log('Get top news called', apiKey);
};