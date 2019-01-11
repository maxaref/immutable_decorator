
function Immutable(initialValue = {}) {
    return function (targetClass: any, propertyKey: string) {

        const wrapProxy = initialValue => new Proxy(initialValue, {
            set(target, prop, value) {
                target[prop] = value;

                proxyValue = wrapProxy({ ...target });

                return true;
            }
        });

        let proxyValue = wrapProxy(initialValue);

        Object.defineProperty(targetClass, propertyKey, {
            get() {
                return proxyValue;
            },
            set(newValue) {
                proxyValue = wrapProxy(newValue);
            }
        });
    };
}