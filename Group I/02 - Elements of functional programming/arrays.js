let collection = [1, 3, 4, 7, 6, 9, 2];

function squares(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        result.push(element * element);
    }
    return result;
}

function cubes(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        result.push(element * element * element);
    }
    return result;
}

function triples(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        result.push(element + element + element);
    }
    return result;
}


function applyOperation(array, operation) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        result.push(operation(element));
    }
    return result;
}

console.log(collection);
console.log(squares(collection));
console.log(cubes(collection));
console.log(triples(collection));
console.log("======================")
console.log(collection);
console.log(applyOperation(collection, n => n * n));
console.log(applyOperation(collection, n => n * n * n));
console.log(applyOperation(collection, n => n + n + n));
console.log(applyOperation(collection, n => 3 * n + 1));
console.log("======================")
console.log(collection);
console.log(collection.map(n => n * n));
console.log(collection.map(n => n * n * n));
console.log(collection.map(n => n + n + n));
console.log(collection.map(n => 3 * n + 1));
console.log("======================");
console.log("======================");

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

function getBetween3and7(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element >= 3 && element <= 7) {
            result.push(element);
        }
    }
    return result;
}

function getArrayPart(array, predicate) {
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
console.log(getEvens(collection));
console.log(getOdds(collection));
console.log(getBetween3and7(collection));
console.log("======================");
console.log(collection);
console.log(getArrayPart(collection, n => n % 2 === 0));
console.log(getArrayPart(collection, n => n % 2 !== 0));
console.log(getArrayPart(collection, n => n >= 3 && n <= 7));
console.log("======================");
console.log(collection);
console.log(collection.filter(n => n % 2 === 0));
console.log(collection.filter(n => n % 2 !== 0));
console.log(collection.filter(n => n >= 3 && n <= 7));

function getEvenSquares(array) {
    // let result = [];
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    //     if (element % 2 === 0) {
    //         result.push(element * element);
    //     }
    // }
    // return result;

    return array.filter(n => n % 2 === 0).map(n => n * n);
}
console.log("======================");

let triple = n => n*3;
let addOne = n => n+1;

// function triplePlusOne(x){
//     return addOne(triple(x));
// }

function combine(first, second){
    var result = function (arg) {
        return second(first(arg));
    }
    return result;
}

let n = 7;

let triplePlusOne = combine(triple, addOne);

let result = triplePlusOne(n);
console.log(result);
console.log("======================");

// function applyOperationFunction(operation){
//     let result = function (array){
//         return applyOperation(array, operation);
//     }
//     return result;
// }

let applyOperationFunction = 
    operation => array => applyOperation(array, operation);

console.log(squares(collection));
console.log(applyOperation(collection, n=> n*n));

let squarer = applyOperationFunction(n => n*n);
console.log(squarer(collection));
console.log(applyOperationFunction(n => n*n)(collection));
console.log("======================");
// function add (x, y){
//     return x+y;
// }

function add(x){
    return function(y){
        return x+y;
    }
}

let add3 = add(3);

console.log(add3(4));
console.log(add3(5));

console.log(add(3)(4))

console.log(combine(add(1), add(3))(4));