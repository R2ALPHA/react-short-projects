// Create a custom iterator that will iterate through value of object in ascending order. 

function sortValuesIterator() {
    return function () {
        return {
            ordered: Object.values(this).sort((a, b) => a - b),
            index: 0,
            next() {
                if (this.index < this.ordered.length) {
                    return { done: false, value: this.ordered[this.index++] };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

let obj = {
    a: 5,
    b: 1,
    c: 2,
    d: 9,
    [Symbol.iterator]: sortValuesIterator()
};


for (const p of obj) {
    console.log(p);
}
