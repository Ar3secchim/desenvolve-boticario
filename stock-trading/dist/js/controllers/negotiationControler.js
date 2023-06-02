import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageViews } from "../views/menssade-views.js";
import { NegociationsView } from "../views/negociation-views.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationViews = new NegociationsView('#negotiationsView');
        this.messageView = new MessageViews('#messageView');
        this.inputData = document.querySelector('#data');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value');
        this.negotiationViews.update(this.negotiations);
    }
    add() {
        const negotiation = this.createNegotiation();
        this.negotiations.add(negotiation);
        this.updateView();
        this.cleanForm();
    }
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const amout = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, amout, value);
    }
    cleanForm() {
        this.inputData.value = "";
        this.inputAmount.value = "";
        this.inputValue.value = "";
        this.inputAmount.focus();
    }
    updateView() {
        this.negotiationViews.update(this.negotiations);
        this.messageView.update("Negociação adicionada com sucesso");
    }
}
