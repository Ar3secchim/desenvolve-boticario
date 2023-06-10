export function inspect(target, propertyKey, descriptor) {
    const metodoOrigin = descriptor.value;
    descriptor.value = function (...args) {
        const recurrence = metodoOrigin.apply(this, args);
        console.log(`Metodo: ${propertyKey} || 
                Paramêtros: ${JSON.stringify(args)} || 
                Retorno:${recurrence}`);
        return recurrence;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map