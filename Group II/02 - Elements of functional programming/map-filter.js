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
console.log(makeArray(getArray(collection, n => n % 2 !== 0), n => n * 3));
console.log("=================");
console.log("=================");

let result = makeArray(collection, n => n * 3);

let makeArrayFunction = function (operation) {
    let result = function (array) {
        return makeArray(array, operation);
    }
    return result;
}

// let makeArrayFunction = (operation) =>
//     (array) => makeArray(array, operation);

let mapTriplicate = makeArrayFunction(n => n * 3);

result = mapTriplicate(collection);
console.log(result);

let threeplusone = makeArrayFunction(n => n * 3 + 1);
console.log(threeplusone(collection));

console.log("=================");
console.log(makeArray(collection, n => n * n));
console.log(makeArrayFunction(n => n * n)(collection));

console.log("=================");
function add(x, y) {
    return x + y;
}

console.log(add(3, 5));

function addCurry(x) {
    return y => x + y;
}


console.log(addCurry(3)(5));

//let add3 = function (x) { return x + 3; }
let add3 = addCurry(3);

console.log(add3(5));
console.log(add3(6));
console.log(add3(9));

let adders = makeArray(collection, n => addCurry(n));

result = makeArray(adders, adder => adder(1));
console.log(collection);
console.log(adders);
console.log(result);