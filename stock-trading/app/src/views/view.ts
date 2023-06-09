import { inspect } from "../decortactor/inspect.js"

//necessary child for init
export abstract class View <T>{
  //inheritance from father to son
  protected element : HTMLElement
  private escape = false

  constructor(selector: string, escape?: boolean){
    const element =  document.querySelector(selector)
    if(element){
      this.element = element as HTMLElement
    }else{
      throw Error(`Selector ${selector} não existe. Verifique!`)
    }
    
    if(escape){
      this.escape = escape
    }
  }

  //include error compilation
  protected abstract template(model: T): string

  @inspect
  public update(model: T): void{
    const exp = "<script> [/s/S]*?< \/script>/"
    let template = this.template(model)
  
    if(this.escape){
      template.replace(exp, '')
    }

    this.element.innerHTML = template
  }
}