var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageViews } from "../views/menssade-views.js";
import { NegociationsView } from "../views/negociation-views.js";
import { DaysWeek } from "../enums/daysWeek.js";
import { timeExecut } from "../decortactor/time-execut.js";
import { domInject } from "../decortactor/domInject.js";
import { NegotiationService } from "../services/negotiationService.js";
import { thePrint } from "../utils/thePrint.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationViews = new NegociationsView('#negotiationsView', true);
        this.messageView = new MessageViews('#messageView');
        this.negotiationService = new NegotiationService();
        this.negotiationViews.update(this.negotiations);
    }
    additional() {
        const negociation = Negotiation.createIn(this.inputData.value, this.inputAmount.value, this.inputValue.value);
        if (!this.businnesDay(negociation.data)) {
            this.messageView.update('Possivél apenas negociações em dias utéis');
            return;
        }
        this.negotiations.additional(negociation);
        thePrint(negociation, this.negotiations);
        this.updateView();
        this.cleanForm();
    }
    getData() {
        this.negotiationService
            .getNegociationsDays()
            .then(negociationsDay => {
            return negociationsDay.filter(negociationsDay => {
                return !this.negotiations.list()
                    .some(negotiation => negotiation.isEquals(negociationsDay));
            });
        }).then(negociationsDay => {
            for (let negociation of negociationsDay) {
                this.negotiations.additional(negociation);
            }
            this.negotiationViews.update(this.negotiations);
        });
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
__decorate([
    domInject('#data')
], NegotiationController.prototype, "inputData", void 0);
__decorate([
    domInject('#amount')
], NegotiationController.prototype, "inputAmount", void 0);
__decorate([
    domInject('#value')
], NegotiationController.prototype, "inputValue", void 0);
__decorate([
    timeExecut(true)
], NegotiationController.prototype, "additional", null);
__decorate([
    timeExecut()
], NegotiationController.prototype, "updateView", null);
//# sourceMappingURL=negotiationControler.js.map