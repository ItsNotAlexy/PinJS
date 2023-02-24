const puppeteer = require('puppeteer');

async function Scraper(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    console.log('Scraping: ' + url);
    
    await page.waitForSelector('img', { visible: true, timeout: 10000 });

    const data = await page.evaluate(() => {
        const images = document.querySelectorAll('img');

        const imgurl = Array.from(images).map(img => img.src);

        return imgurl
    })

    console.log({data})
    

    browser.close();
};

module.exports = { Scraper }
