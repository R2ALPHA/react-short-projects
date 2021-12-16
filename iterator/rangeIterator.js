// Create a custom iterator for range
class Range {
    constructor(start, end, step = 1) {
        this.start = start;
        this.end = end;
        this.step = step;
    }

    [Symbol.iterator]() {
        let index = this.start;
        return {
            next: () => {
                if (index > this.end) return { done: true };
                else {
                    const value = index;
                    index += this.step;
                    return { done: false, value: value };
                }
            }
        };
    }
}

let a = new Range(10, 20, 2);
for (p of a) {
    console.log(p);
}
for (p in a) {
    console.log(p);
}