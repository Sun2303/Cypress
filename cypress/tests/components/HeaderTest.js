import HeaderComponent from "../../modules/components/HeaderComponent";
import menuDetailBlaze from "../../fixtures/DemoBlazeMenuDetail.json"

describe('Header component Test', () => {
    let headerComp;
    const BRAND_TEXT = "PRODUCT STORE";
    beforeEach(() => {
        cy.visit("/");
        headerComp = new HeaderComponent();
    })

    it('Test for brand logo', () => {
        headerComp.brandLogo().should('contain.text', BRAND_TEXT)
        headerComp.brandLogoImg().should('be.visible')
    });

    it('Test for header menu detail without login user', () => {
        headerComp.getMenuDetails().then(actualMenuDetails => {
            cy.wrap('').then(() => {
                cy.log(JSON.stringify(actualMenuDetails))
                expect(actualMenuDetails).to.be.deep.equal(menuDetailBlaze.navibarinfo.login)
            })
        })
    })

    it('Test for header menu detail with login user', () => {
        cy.loginViaUI()
        cy.wait(2000)
        headerComp.getMenuDetails().then(actualMenuDetails => {
            cy.wrap('').then(() => {
                expect(actualMenuDetails).to.be.deep.equal(menuDetailBlaze.navibarinfo.logout)
            })
        })
    })
});