export function escape(
  target:any,
  propertyKey: String,
  descriptor: PropertyDescriptor
  ) {
    const methodOrigin = descriptor.value;

    descriptor.value = function(...args: any){
      let recurrence = methodOrigin.apply(this, args)

      if (typeof recurrence === "string") {
        recurrence = recurrence.replace(/<script> [/s/S]*? <\/script:>/, '')
      } 
      return recurrence
    }
}