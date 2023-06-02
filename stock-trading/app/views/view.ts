//necessary child for init
export abstract class View <T>{
  //inheritance from father to son
  protected element : HTMLElement

  constructor(selector: string){
    this.element = document.querySelector(selector)
  }

  //include error compilation
  protected abstract template(model: T): string

  update(model: T): void{
    const template = this.template(model)
    this.element.innerHTML = template
  }
}