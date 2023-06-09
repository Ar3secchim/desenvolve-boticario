export function domInject(seletor: string){
  return function(target: any, propertykey: string){
    let element : HTMLElement

    const getter =  function() {
      if(!element){
        element = <HTMLElement>document.querySelector(seletor)
      }
      return document.querySelector(seletor) 
    }

    Object.defineProperty(
      target, 
      propertykey, 
      { get: getter }
    )
  }
}