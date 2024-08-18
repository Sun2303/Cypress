describe('Multiple elems matching interaction', () => {
    it('should be able to interact with list of elements', () => {
        cy.visit('/login')

        // //Use eq
        // cy.get('input').eq(0).type('tomsmith')
        // cy.get('input').eq(1).type('SuperSecretPassword!')


        // //Use closure
        // cy.get('input').then(items => {
        //     cy.get(items[0]).type('tomsmith')
        //     cy.get(items[1]).type('SuperSecretPassword')
        // })

        //Use each. Ex: want to verify in the list does not contain a specified text
        cy.get('input').each((item, index) => {
            cy.get(item).type('something')
        })


        cy.get('button[type="submit"]').click()

        //DEBUG purpose only
        cy.wait(2000)
    });
});