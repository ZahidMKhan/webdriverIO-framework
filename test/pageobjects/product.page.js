class ProductPage {

    get pageTitle() { return $('h2') }
    get productNames() { return $$("p.font-weight-bold") }
    get productPrices() { return $$("p.font-weight-bold ~ p") }
    get addButtons() { return $$("p.font-weight-bold ~ button") }
    get cartButton() { return $('#cart') }

    addProductToCart(productName) {
        const btn_add = `(//p[contains(text(),'${productName}')]/following-sibling::button)[1]`
        $(btn_add).click();
    }

    async getProductsAndPrices() {
        let pos = 0;
        const productsAndPrices = new Map();
        
        ;(await this.cartButton).waitForExist();

        for(let x of await this.productPrices) {
            const price = (await x.getText()).split(' ').pop();
            const name = await this.productNames[pos].getText();
            productsAndPrices.set(price, name);
            pos++;
        }
        
        return productsAndPrices;
    }

    async getMatchingProducts(rule) {

        const matchingProducts = new Map();
        for (const [key, value] of (await this.getProductsAndPrices()).entries()) {
            if(value.toLowerCase().includes(rule.toLowerCase()))
                matchingProducts.set(key, value);
        }
        return matchingProducts;
    }

    
}

module.exports = new ProductPage();