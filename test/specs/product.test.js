const homePage = require('../pageobjects/home.page');
const productPage = require('../pageobjects/product.page');

describe('product page tests', async()=>{

    it('print all product names',async()=>{
        await browser.url('/');

        (await homePage.selectItem('moisturizer')).click();
        
        console.log(await productPage.getMatchingProducts('aloe'));

        await browser.pause(3000)
    
    })
})