import DemoBlazePage from "../../modules/pages/DemoBlazePage";
import productBlaze from "../../fixtures/DemoBlazeProducts.json"

describe('DemoBlaze', () => {
    it('Should able to get the Name and Price for specified product', () => {
        cy.visit("https://www.demoblaze.com/")
        new DemoBlazePage().getAllCardDate().then(allCardData => {
            cy.wrap('').then(() => {
                expect(allCardData).to.be.deep.eq(productBlaze)
            })
        })
    });

    it.only('should able to get UI data against backend data', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.intercept('/entries').as('entries')
        cy.wait('@entries')
        cy.get('@entries').then(entries => {
            let apiProductData = entries.response.body.Items
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
        })
    });
});