/**
 * Custom command to log in a user by API
 * @memberof cy
 * @method loginViaAPI
 */
Cypress.Commands.add('loginViaAPI', (username, password) => {
    cy.request({
        url: 'https://api.demoblaze.com/login',
        method: 'POST',
        headers: {
            contentType: "application/json"
        },
        body: {
            username: username,
            password: btoa(password)
        }
    }).then(res => {
        const authToken = res.body.split('Auth_token: ')[1];
        cy.log(authToken)
        cy.setCookie('tokenp_', authToken)
    })
})

/**
 * Custom commad to log in a user by UI
 * @memberof cy
 * @method loginViaUI
 */
Cypress.Commands.add('loginViaUI', () => {
cy.get('#login2').click()
cy.wait(500)
cy.get('#loginusername').type('suncd')
cy.get('#loginpassword').type('admin')
cy.get('button[onclick="logIn()"]').click()
})

