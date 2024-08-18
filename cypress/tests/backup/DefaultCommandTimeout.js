describe('Exploring default command time out', () => {
    it('should be able to apply custom default timeout', () => {
        cy.visit('/login')
        cy.get('#taolao', {timeout: 10000}).type('abc')
        cy.get('#taolao2',{timeout: 5000}).type('abc')
    });

    it('should be able to apply Default timeout',{defaultCommandTimeout: 7000}, () => {
        cy.visit('/login')
        cy.get('#taolao').type('abc')
        cy.get('#taolao2').type('abc')
    });

    it.only('should be able to apply Default timeout 2', () => {
        cy.visit('/')
        cy.get('a[href="/login"]').click()
        cy.location('pathname',{timeout: 300}).should('eq','/login')
    });
});