function multiply(a, b) {
    return a * b;
}

let double = multiply.bind(this, 2);
let triple = multiply.bind(this, 3);
console.log(multiply(15, 1)); // 15
console.log(double(15)); // 30
console.log(triple(15)); //45
