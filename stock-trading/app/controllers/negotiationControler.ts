import { DaysWeek } from "../enums/daysWeek.js"
import { Negotiation } from "../models/negotiation.js"
import { Negotiations } from "../models/negotiations.js"
import { MessageViews } from "../views/menssade-views.js"
import { NegociationsView } from "../views/negociation-views.js"

export class NegotiationController{
  private inputData : HTMLInputElement
  private inputAmount: HTMLInputElement
  private inputValue: HTMLInputElement
  private negotiations = new Negotiations()
  private negotiationViews = new NegociationsView('#negotiationsView')
  private messageView = new MessageViews('#messageView')

  constructor() {
    this.inputData = document.querySelector('#data')
    this.inputAmount = document.querySelector('#amount')
    this.inputValue = document.querySelector('#value')
    this.negotiationViews.update(this.negotiations)
  }

  public additional(): void{
    const negotiation = this.createNegotiation()

    if (!this.businnesDay){
      this.messageView.update('apenas negociações em dias utéis são possivéis')
    }

    this.negotiations.additional(negotiation)
    this.updateView()
    this.cleanForm()
  }

  public createNegotiation(): Negotiation {
    const exp = /-/g
    const date = new Date(this.inputData.value.replace(exp, ","))
    const amout = parseInt(this.inputAmount.value)
    const value = parseFloat(this.inputValue.value)

    return new Negotiation(
      date, amout, value
    )
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

  private businnesDay(date: Date) : boolean {
    return date.getDay() > DaysWeek.MONDAY 
        && date.getDay() < DaysWeek.SATURDAY 
  }
}