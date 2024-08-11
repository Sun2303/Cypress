import AmazonHomePage from "../modules/pages/AmazonHomePage";
import AmazonSearchResultPage from "../modules/pages/AmazonSearchResultPage";

describe('Search item list', () => {
    it('Should able to see the search result', () => {
        const SEARCH_TEXT = "Dinning table"
        cy.visit("https://www.amazon.com/")
        let amazoneHomePage = new AmazonHomePage()
        amazoneHomePage.searchTextBoxEle.type(SEARCH_TEXT)
        amazoneHomePage.searchButtonEle.click()

        let amazonSearch = new AmazonSearchResultPage()
        amazonSearch.searchResultItemList.should('not.have.length', 0)

    });
});