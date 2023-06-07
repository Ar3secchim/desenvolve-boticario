import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageViews } from "../views/menssade-views.js";
import { NegociationsView } from "../views/negociation-views.js";
import { DaysWeek } from "../enums/daysWeek.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationViews = new NegociationsView('#negotiationsView', true);
        this.messageView = new MessageViews('#messageView');
        this.inputData = document.querySelector('#data');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value');
        this.negotiationViews.update(this.negotiations);
    }
    additional() {
        const negociation = Negotiation.createIn(this.inputData.value, this.inputAmount.value, this.inputValue.value);
        if (!this.businnesDay(negociation.data)) {
            this.messageView.update('Possivél apenas negociações em dias utéis');
            return;
        }
        this.negotiations.additional(negociation);
        this.updateView();
        this.cleanForm();
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
    businnesDay(date) {
        return date.getDay() > DaysWeek.SUNDAY
            && date.getDay() < DaysWeek.SATURDAY;
    }
}
