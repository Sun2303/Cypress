import FooterComponent from "../../modules/components/FooterComponent";

describe('Footer component Test', () => {
    let footerComp;

    beforeEach(() => {
        cy.visit("/");
        footerComp = new FooterComponent();
    })

    it('Test for Footer - about Us', () => {
        let expectedAboutUsData = {
            header: "About Us",
            desc: "We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality."
        }
        footerComp.getAboutUsData().then(actualAboutUsData => {
            cy.wrap('').then(() => {
                expect(actualAboutUsData.header).to.eql(expectedAboutUsData.header)
                expect(actualAboutUsData.desc).to.eql(expectedAboutUsData.desc)
            })
        })
    });

    it('Test for Footer - contact Us', () => {
        let expectedContactUsData = {
            header: "Get in Touch",
            Address: "2390 El Camino Real",
            Phone: "+440 123456",
            Email: "demo@blazemeter.com "

        }
        footerComp.getContactUsData().then(actualContactUsData => {
            cy.log(actualContactUsData)
            cy.wrap('').then(() => {
                expect(actualContactUsData.header).to.equal(expectedContactUsData.header)
                expect(actualContactUsData.desc).to.contains(expectedContactUsData.Address)
                expect(actualContactUsData.desc).to.contains(expectedContactUsData.Phone)
                expect(actualContactUsData.desc).to.contains(expectedContactUsData.Email)
            })
        })
    });
});