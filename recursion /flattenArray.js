
let arrayToFlatten = [1, 2, [3, 4, 5, [[[[6, 7, 8]]]]]];

function flattenArray(array) {

    if (!Array.isArray(array)) {
        return [array];
    }

    let flatArray = [];
    for (let index = 0; index < array.length; ++index) {
        flatArray.push(...flattenArray(array[index]));
    }
    return flatArray;
}

console.log(flattenArray(arrayToFlatten));



