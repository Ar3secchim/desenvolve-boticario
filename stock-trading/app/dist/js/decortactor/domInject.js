export function domInject(seletor) {
    return function (target, propertykey) {
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(seletor);
            }
            return document.querySelector(seletor);
        };
        Object.defineProperty(target, propertykey, { get: getter });
    };
}
