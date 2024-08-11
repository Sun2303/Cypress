const SEARCH_RESULT_LIST = "div[cel_widget_id^='MAIN-SEARCH_RESULTS']";

class AmazonSearchResultPage {
    get searchResultItemList(){
        return cy.get(SEARCH_RESULT_LIST)
    }
}

module.exports = AmazonSearchResultPage