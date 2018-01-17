var collection = [1, 2, 3, 5, 6, 12, 4];

function makeSquares(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result.push(element * element);
    }
    return result;
}

function makeCubes(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result.push(element * element * element);
    }
    return result;
}

function makeDoubles(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result.push(element * 2);
    }
    return result;
}

console.log(collection);
console.log(makeSquares(collection));
console.log(makeCubes(collection));
console.log(makeDoubles(collection));
console.log("=================");

function makeArray(array, operation) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result.push(operation(element));
    }
    return result;
}

console.log(collection);
console.log(makeArray(collection, n => n * n));
console.log(makeArray(collection, n => n * n * n));
console.log(makeArray(collection, n => n + n));

console.log("=================");

function getEvens(array){
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element % 2 === 0) {
            result.push(element);
        }
    }
    return result;
}

function getOdds(array){
    // 
}

console.log(collection);
console.log(getEvens(collection));
