describe('Learn about Within and Find methods', () => {
    it('Within method', () => {
        cy.visit("https://www.simplyrecipes.com/")
        cy.get(".showcase-hero").within(() => {
            cy.get(".card__title").each(($item, index) => {
                cy.log(index)
            })
        })
        
    });

    it('Find method', () => {
        cy.visit("https://www.simplyrecipes.com/")
        cy.get(".showcase-hero").find(".card__title").each(($item, index) => {
            cy.log(index)
        })
    });
});