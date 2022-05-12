const homePage = require('../pageobjects/home.page');

describe('First test file',async()=>{

    it('print displayed temperature',async()=>{

        await browser.url('/');
        (await homePage.selectItem('sunscreens')).click();
    })
})