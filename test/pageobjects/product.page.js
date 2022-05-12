class ProductPage {

    get pageTitle() { return $('h2') }
    get productNames() { return $$("p.font-weight-bold") }
}

module.exports = new ProductPage();