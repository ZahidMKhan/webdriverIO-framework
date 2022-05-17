const homePage = require('../pageobjects/home.page');

describe('Homepage tests',async()=>{

    it('verify homepage title',async()=>{

        await browser.url('/');
        const actualTitle = (await homePage.pageTitle).getText();
        await expect(actualTitle).toBe('Current temperature');
    });

    it('verify homepage displays temperature',async()=>{

        await browser.url('/');
        const actualTemp = (await homePage.temperature).getText();
        await expect(actualTemp).not.toBeNull();
    })
})