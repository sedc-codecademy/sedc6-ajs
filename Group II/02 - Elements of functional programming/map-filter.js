var collection = [1, 2, 3, 5, 6, 12, 4];

function makeSquares(array){
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result.push(element * element);
    }
    return result;
}

function makeCubes(array){
    //
}

function makeDoubles(array){
    //
}

console.log(collection);
console.log(makeSquares(collection));
console.log(makeCubes(collection));
console.log(makeDoubles(collection));