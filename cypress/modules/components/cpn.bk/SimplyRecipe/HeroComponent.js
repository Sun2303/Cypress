export class HeroComponent{
    static COMPONENT_SEL = ".showcase-hero";

    constructor(component){
        this.component = component
    }

    get cartTitle(){
        return this.component.find('.card__title')
    }
}