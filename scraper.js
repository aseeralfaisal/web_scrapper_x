const puppeteer = require('puppeteer')

async function getStackOverAboutText() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50
    });
    const page = await browser.newPage();
    await page.goto('https://stackoverflow.com/company');
    const aboutText = await page.$eval('h1.p-ff-roboto-slab', e => e.innerText)
    const list = await page.$$eval('a.s-navigation--item', (elems) => elems.map(elem => elem.outerText))
    console.log(aboutText)
    console.log(list)
    await browser.close();
}
getStackOverAboutText()
