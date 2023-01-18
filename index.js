const cheerio = require('cheerio');
const request = require('request-promise');

async function init() {
    const $ = await request({
        uri: 'http://quotes.toscrape.com/',
        transform: body => cheerio.load(body)
    });
    
    const webSiteTitle = $('title');
    console.log(webSiteTitle.html());

    const webSiteHeading = $('h1');
    console.log(webSiteHeading.text().trim());

    const quotes = $('.quote');
    console.log(quotes.html());
}

init();