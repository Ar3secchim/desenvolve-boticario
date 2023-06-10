export function timeExecut(seg = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOrigin = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const recurrence = metodoOrigin.apply(this, args);
            const t2 = performance.now();
            let divide = seg ? 1000 : 1;
            let time = Math.abs((t2 - t1) / divide);
            console.log(`${propertyKey}, tempo de execução ${time} em ${seg ? "segundos" : "milisegundos"}`);
            return recurrence;
        };
        return descriptor;
    };
}
//# sourceMappingURL=time-execut.js.map