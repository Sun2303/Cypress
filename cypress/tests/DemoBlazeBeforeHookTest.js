import DemoBlazePage from "../modules/pages/DemoBlazePage";
import { HomePageAPI } from "../support/HomePageAPI";


describe('DemoBlaze', () => {
    let apiResp;

    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/')
        HomePageAPI.getHomePageProducts().then(entries => apiResp = entries)
    })

    it.only('should able to get UI data against backend data', () => {
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