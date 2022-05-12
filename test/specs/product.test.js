const homePage = require('../pageobjects/home.page');
const productPage = require('../pageobjects/product.page');

describe('product page tests', async()=>{

    it('print all product names',async()=>{
        await browser.url('/');
        (await homePage.selectItem('sunscreens')).click();
        let names = await productPage.productNames;
        for(let e of names){
            console.log(await e.getText());
        }
    })
})