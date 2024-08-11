const SEARCH_TXT = "#twotabsearchtextbox";
const SEARCH_BTN = "#nav-search-submit-button";

class AmazonHomePage{
    get searchTextBoxEle(){
        return cy.get(SEARCH_TXT)
    }

    get searchButtonEle(){
        return cy.get(SEARCH_BTN)
    }
}

module.exports = AmazonHomePage