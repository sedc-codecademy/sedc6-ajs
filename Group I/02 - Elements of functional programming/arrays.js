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
    // ...
}

console.log(collection);
console.log(squares(collection));
console.log(cubes(collection));