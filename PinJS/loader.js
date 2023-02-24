const { Scraper } = require('./scrapper');
const { ScrapeImage } = require('./scrapper_images');

async function GetImages(q, save) {
    if(save){
        await ScrapeImage(`https://pinterest.com/search/pins/?q=${q}&rs=typed`);
    } else {
        await Scraper(`https://pinterest.com/search/pins/?q=${q}&rs=typed`);
    }
};

module.exports = { GetImages }
