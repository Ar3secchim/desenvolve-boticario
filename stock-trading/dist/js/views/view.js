export class View {
    constructor(selector, escape) {
        this.escape = false;
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Selector ${selector} não existe. Verifique!`);
        }
        if (escape) {
            this.escape = escape;
        }
    }
    update(model) {
        const exp = "<script> [/s/S]*?< \/script>/";
        let template = this.template(model);
        if (this.escape) {
            template.replace(exp, '');
        }
        this.element.innerHTML = template;
    }
}
