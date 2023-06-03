import { Negotiation } from "../models/negotiation.js"
import { Negotiations } from "../models/negotiations.js"

import { MessageViews } from "../views/menssade-views.js"
import { NegociationsView } from "../views/negociation-views.js"

import { DaysWeek } from "../enums/daysWeek.js"

export class NegotiationController{
  private inputData : HTMLInputElement 
  private inputAmount: HTMLInputElement 
  private inputValue: HTMLInputElement
  private negotiations = new Negotiations()
  private negotiationViews = new NegociationsView('#negotiationsView', true)
  private messageView = new MessageViews('#messageView')

  constructor() {
    this.inputData = document.querySelector('#data') as HTMLInputElement
    this.inputAmount = document.querySelector('#amount') as HTMLInputElement
    this.inputValue = document.querySelector('#value') as HTMLInputElement
    this.negotiationViews.update(this.negotiations)
  }

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
    this.updateView()
    this.cleanForm()
  }

  private cleanForm(): void {
    this.inputData.value = ""
    this.inputAmount.value = ""
    this.inputValue.value = ""

    this.inputAmount.focus()
  }

  private updateView(): void{
    this.negotiationViews.update(this.negotiations)
    this.messageView.update("Negociação adicionada com sucesso")
  }

  private businnesDay(date: Date){
    return date.getDay() > DaysWeek.SUNDAY 
        && date.getDay() < DaysWeek.SATURDAY 
  }
}