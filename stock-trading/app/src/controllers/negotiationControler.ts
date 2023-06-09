import { Negotiation } from "../models/negotiation.js"
import { Negotiations } from "../models/negotiations.js"

import { MessageViews } from "../views/menssade-views.js"
import { NegociationsView } from "../views/negociation-views.js"

import { DaysWeek } from "../enums/daysWeek.js"

import { timeExecut } from "../decortactor/time-execut.js"
import { inspect } from "../decortactor/inspect.js"
import { domInject } from "../decortactor/domInject.js"

import { NegotiationService } from "../services/negotiationService.js"
import { thePrint } from "../utils/toPrint.js"

export class NegotiationController{
  @domInject('#data')
  private inputData : HTMLInputElement
  @domInject('#amount')
  private inputAmount: HTMLInputElement 
  @domInject('#value')
  private inputValue: HTMLInputElement

  private negotiations = new Negotiations()
  private negotiationViews = new NegociationsView('#negotiationsView', true)
  private messageView = new MessageViews('#messageView')
  private negotiationService = new NegotiationService()
  
  constructor() {
    this.negotiationViews.update(this.negotiations)
  }

  @timeExecut(true)
  public additional(): void{
    const negociation = Negotiation.createIn(
      this.inputData.value,
      this.inputAmount.value,
      this.inputValue.value
    )

    if (!this.businnesDay(negociation.data)){
      this.messageView.update('Possivél apenas negociações em dias utéis')
      return
    }

    this.negotiations.additional(negociation)
    thePrint(negociation, this.negotiations)
    this.updateView() 
    this.cleanForm()
  }

  public getData():void{
    this.negotiationService.getNegociationsDays()
    .then(negociationsDay => {
      for (let negociation of negociationsDay) {
        this.negotiations.additional(negociation)
      }
      this.negotiationViews.update(this.negotiations)
    })
  }

  private cleanForm(): void {
    this.inputData.value = ""
    this.inputAmount.value = ""
    this.inputValue.value = ""

    this.inputAmount.focus()
  }

  @timeExecut()
  private updateView(): void{
    this.negotiationViews.update(this.negotiations)
    this.messageView.update("Negociação adicionada com sucesso")
  }

  private businnesDay(date: Date){
    return date.getDay() > DaysWeek.SUNDAY 
        && date.getDay() < DaysWeek.SATURDAY 
  }
}