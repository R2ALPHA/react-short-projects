function hash(...args) {
    return args.join('-');
}

function multiply(...args) {
    return args.reduce((result, currentValue) => result * currentValue, 1);
}

function cachingDecorator(funct) {
    let cache = new Map();
    return function (...args) {
        let key = hash(args);
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = funct.call(this, ...args);
        cache.set(key, result);
        return result;
    }
}

multiply = cachingDecorator(multiply);

console.log(multiply(1, 2, 5, 55));