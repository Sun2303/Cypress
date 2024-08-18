import DemoBlazePage from "../../modules/pages/DemoBlazePage";
import { HomePageAPI } from "../../support/HomePageAPI";

describe('DemoBlaze Home Page Test', () => {
    let apiResp;

    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/')
        HomePageAPI.getHomePageProducts().then(entries => apiResp = entries)
    })

    it('should be able to login using API', () => {
        cy.loginViaAPI('suncd', 'admin')
        cy.visit('https://www.demoblaze.com/')
        let apiProductData = apiResp.response.body.Items
        apiProductData = apiProductData.map(item => {
            return {
                itemName: item.title.replace('\n', ''),
                itemPrice: `$${item.price}`
            }
        })
        new DemoBlazePage().getAllCardDate().then(allCardData => {
            cy.wrap('').then(() => {
                expect(allCardData).to.be.deep.eq(apiProductData)
            })
        })
    });

});