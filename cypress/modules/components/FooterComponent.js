export default class FooterComponent {
    getColumnList = () => cy.get("#fotcont .caption")
    getColumnHeader = () => cy.get("h4")
    getDesc = () => cy.get("p")


    getAboutUsData() {
        let aboutUsData = {};
        //Difine eq theo list data
        this.getColumnList().eq(0).within(() => {
            this.getColumnHeader().then($header => aboutUsData.header = $header.text().trim())
            this.getDesc().then($desc => aboutUsData.desc = $desc.text().replace(/\n\s+/g, " ").trim())

        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(aboutUsData))
        })
    }

    getContactUsData() {
        let contactUsData = {};
        this.getColumnList().eq(1).within(() => {
            this.getColumnHeader().then($header => contactUsData.header = $header.text().trim())
            this._getMultiDesc().then(desc => contactUsData.desc = desc)
        })
        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(contactUsData))
        })
    }

    _getMultiDesc() {
        let desc = "";
        this.getDesc().each($descLine => {
            desc = desc + $descLine.text().trim() + " ";
        })
        
        return new Cypress.Promise(resolve => cy.wrap('').then(() => resolve(desc)))
    }

}