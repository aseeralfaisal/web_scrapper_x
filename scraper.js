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
    // const button = await page.evaluateHandle(() =>
    //     document.querySelectorAll('a.s-navigation--item')
    // )
    const elems = await page.$$('a.s-navigation--item')
    elems.map(async el => console.log(el))
    await page.waitForTimeout(50000);
    // console.log(aboutText)
    // console.log(list)
    await browser.close();
}
getStackOverAboutText()
