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

function getEvens(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element % 2 === 0) {
            result.push(element);
        }
    }
    return result;
}

function getOdds(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element % 2 !== 0) {
            result.push(element);
        }
    }
    return result;
}

function getBetween3and9(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element >= 3 && element <= 9) {
            result.push(element);
        }
    }
    return result;
}

console.log(collection);
console.log(getEvens(collection));
console.log(getOdds(collection));
console.log(getBetween3and9(collection));
console.log("=================");

function getArray(array, predicate) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
}

console.log(collection);
console.log(getArray(collection, n => n % 2 === 0));
console.log(getArray(collection, n => n % 2 !== 0));
console.log(getArray(collection, n => (n >= 3) && (n <= 9)));
console.log("=================");

function getSquaresOfEvens(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element % 2 === 0) {
            result.push(element * element);
        }
    }
    return result;
}

console.log(collection);
console.log(getSquaresOfEvens(collection));
console.log(makeArray(getArray(collection, n => n % 2 !== 0), n => n*3));
console.log("=================");