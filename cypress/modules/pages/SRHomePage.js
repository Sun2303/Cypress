import { HeroComponent } from "../components/SimplyRecipe/HeroComponent";

export class SRHomePage{
    heroComponent(){
        return new HeroComponent(cy.get(HeroComponent.COMPONENT_SEL));
    }

    getHeroCompTitle(){
        let title = '';
        cy.get(".showcase__hero .card__title").then($title => {
            title = $title.text().trim()
        })
        return new Cypress.Promise(resolve => cy.wrap('').then(() => resolve(title)))
    }
}