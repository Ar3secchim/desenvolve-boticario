export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
){
  const metodoOrigin = descriptor.value;
  descriptor.value = function (...args : Array<any>){
    const recurrence = metodoOrigin.apply(this, args)

    console.log(`Metodo: ${propertyKey} || 
                Paramêtros: ${JSON.stringify(args)} || 
                Retorno:${recurrence}`
                )

    return recurrence
  }
  return descriptor
}
