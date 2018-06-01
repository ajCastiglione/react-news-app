import { apiKey } from '../config/config';
// example request https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY
// two main endpoints: /v2/top-headlines & /v2/everything
// some examples or query parameters: q=trump, country=us, sources=bbc-news - this is based on the ID of the source, no id=404
// use & for more than one paramter ex - country=us&sources=bbc-news, category=business
// pageSize = int between 1 - 100(max)
// page = int, used to navigate through pages if more than 1 is found.
// example request to find articles based on a query, with a specific date range: https://newsapi.org/v2/everything?q=apple&from=2018-05-30&to=2018-05-30&sortBy=popularity&apiKey=API_KEY

const headlines = 'https://newsapi.org/v2/top-headlines';
const everything = 'https://newsapi.org/v2/everything';
const us = 'country=us';
const headers = { 'Authorization': apiKey };
export const cats = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
let url;

export const getQuery = (query, params, pg) => {
    if (!pg) pg = 1;
    if (params !== 'none') { 
        url = `${everything}?q=${query}&${params}&language=en&page=${pg}`;
        console.log(url)
        return fetch(url, { headers })
        .then(res => res.json())
    }
    url = `${everything}?q=${query}&language=en&page=${pg}`; 

    return fetch(url, { headers })
    .then(res => res.json())
};

export const getEverything = (query, pg) => {
    if(!pg) pg = 1;
    let url = `${everything}?q=${query}&language=en&page=${pg}`; 

    return fetch(url, { headers })
    .then(res => res.json())
};

export const getTopNews = (query, params, pg) => {
    if(!pg) pg = 1;
    if (params !== 'none') { 
        url = `${headlines}?q=${query}&${params}&${us}&language=en&page=${pg}`;

        return fetch(url, { headers })
        .then(res => res.json())
    }

    url = `${headlines}?q=${query}&language=en&page=${pg}`; 

    return fetch(url, { headers })
    .then(res => res.json())
};