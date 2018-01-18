let collection = [1, 3, 4, 7, 6, 9, 2];

function squares(array){
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        result.push(element * element);
    }
    return result;
}

function cubes(array){
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        result.push(element * element * element);
    }
    return result;
}

function triples(array){
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        result.push(element + element + element);
    }
    return result;
}


function applyOperation(array, operation){
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
console.log(applyOperation(collection, n => n*n));
console.log(applyOperation(collection, n => n*n*n));
console.log(applyOperation(collection, n => n+n+n));
console.log(applyOperation(collection, n => 3*n+1));
console.log("======================")
console.log(collection);
console.log(collection.map(n => n*n));
console.log(collection.map(n => n*n*n));
console.log(collection.map(n => n+n+n));
console.log(collection.map(n => 3*n+1));
console.log("======================");
console.log("======================");

function getEvens(array){
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element % 2 === 0){
            result.push(element);
        }
    }
    return result;
}

function getOdds(array){
    // ...
}

console.log(collection);
console.log(getEvens(collection));
console.log(getOdds(collection));
