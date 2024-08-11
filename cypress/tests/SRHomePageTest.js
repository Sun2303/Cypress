const { SRHomePage } = require("../modules/pages/SRHomePage");

describe('SR Homepage Test', () => {
    it('should be able to print all titles', () => {
        cy.visit("https://www.simplyrecipes.com/")
        cy.get('.card__title').each(($title, index) => {
            cy.log(index)
            cy.log($title.text().trim())
        })
    });

    it('should be able to interact with a component', () => {
        cy.visit("https://www.simplyrecipes.com/")
        const srHomePage = new SRHomePage()
        srHomePage.heroComponent().cartTitle.each(($title, index) => {
            cy.log(index)
            cy.log($title.text().trim())
        })
    });

    it.only('should be able to get hero card title', () => {
        cy.visit("https://www.simplyrecipes.com/")
        new SRHomePage().getHeroCompTitle().then(title =>{
            cy.wrap('').then(() =>{
                expect(title).to.be.eq("The 5-Minute Chocolate Mousse I've Been Making for Decades")
            })
        })
    });
});