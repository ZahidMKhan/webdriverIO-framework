class HomePage {

    get pageTitle() { return $('<h2>') }
    get temperature() { return $('#temperature') }
    get btn_sunscreens() { return $("//button[text()='Buy sunscreens']") }
    get btn_moisturizer() { return $("//button[text()='Buy moisturizers']") }

    selectItem(itemType) {
        if(itemType==='moisturizer') { return this.btn_moisturizer}
        else { return this.btn_sunscreens}
    }

}

module.exports = new HomePage();