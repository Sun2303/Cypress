const CHECKBOXES_SEL = '[type="checkbox"]';

describe('Handling checkboxes', () => {
    it('should be able to select/unselect a checkbox', () => {
        cy.visit('/checkboxes')

        //Try to unselect the second checkbox
        cy.get(CHECKBOXES_SEL).eq(1).click()

        //Verify all checkboxes all unselected
        cy.get(CHECKBOXES_SEL).filter(":not([checked])").should("have.length", 2)

        //Loop over all checkboxes again then selecting all
        cy.get(CHECKBOXES_SEL).filter(":not([unchecked])").then(item => {
            cy.get(item).click({multiple: true})
        })
    });
});