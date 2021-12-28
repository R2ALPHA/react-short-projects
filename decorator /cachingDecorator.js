function slow(x) {
    // Some CPU intensive work is done here
    return x;
}

function decoratorCaching(func) {
    let cache = new Map();
    return function (x) {

        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);
        cache.set(x, result);
        return result;
    }
}

slow = decoratorCaching(slow);
console.log(slow(1));
console.log(slow(2));
console.log(slow(1));