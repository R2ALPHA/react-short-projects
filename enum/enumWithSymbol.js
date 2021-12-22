function makeEnum(arr) {
    let obj = {};
    for (let val of arr) {
        obj[val] = Symbol(val);
    }
    return Object.freeze(obj);
}

const Colors = makeEnum(["red", "green", "blue"]);
let startColor = Colors.red;
console.log(startColor); // Symbol(red)

if (startColor == Colors.red) {
    console.log("Do red things");
} else {
    console.log("Do non-red things");
}