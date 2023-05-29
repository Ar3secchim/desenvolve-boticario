export class NegotiationController{
  private inputData
  private inputAmount
  private inputValue

  constructor(){
    this.inputData = document.querySelector('#data')
    this.inputAmount = document.querySelector('#amount')
    this.inputValue = document.querySelector('#value')
  }

  add(){
    console.log(this.inputData)
    console.log(this.inputAmount)
    console.log(this.inputValue)
  }
}