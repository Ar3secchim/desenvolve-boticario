var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspect } from "../decortactor/inspect.js";
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
__decorate([
    inspect
], View.prototype, "update", null);
//# sourceMappingURL=view.js.map