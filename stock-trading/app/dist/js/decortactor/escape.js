export function escape(target, propertyKey, descriptor) {
    const methodOrigin = descriptor.value;
    descriptor.value = function (...args) {
        let recurrence = methodOrigin.apply(this, args);
        if (typeof recurrence === "string") {
            recurrence = recurrence.replace(/<script> [/s/S]*? <\/script:>/, '');
        }
        return recurrence;
    };
}
//# sourceMappingURL=escape.js.map