let numbers = [1, 7, 4, 6, 5, 3, 2];

function getSquares(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result.push(element * element);
    }
    return result;
}

console.log(numbers);
console.log(getSquares(numbers));
console.log("=======");

function getCubes(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result.push(element * element * element);
    }
    return result;
}

console.log(numbers);
console.log(getCubes(numbers));
console.log("=======");

function getTriples(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result.push(element * 3);
    }
    return result;
}

console.log(numbers);
console.log(getTriples(numbers));
console.log("=======");

function mapArray(array, operation) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result.push(operation(element));
    }
    return result;
}

console.log(numbers);
console.log(mapArray(numbers, n => n * n));
console.log(mapArray(numbers, n => n * n * n));
console.log(mapArray(numbers, n => n * 3));
console.log(mapArray(numbers, n => Math.log(n) + 7));

function toWord(number) {
    let names = [
        "zero", "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten"
    ];
    return names[number];
}

console.log(mapArray(numbers, n => toWord(n)));
console.log("=======");

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

console.log(numbers);
console.log(getEvens(numbers));

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

console.log(getOdds(numbers));
console.log("=======");

function getBetween3and5(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element >= 3 && element <= 5) {
            result.push(element);
        }
    }
    return result;
}

console.log(getBetween3and5(numbers));
console.log("=======");

function filterArray(array, predicate) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
}

console.log(numbers);
console.log(filterArray(numbers, n => n % 2 === 0));
console.log(filterArray(numbers, n => n % 2 !== 0));
console.log(filterArray(numbers, n => n >= 3 && n <= 5));
console.log("=======");


function getPrimes(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let isPrime = true;

        if (element === 1) {
            continue;
        }

        if (element === 2) {
            result.push(element);
        }

        if (element % 2 === 0) {
            isPrime = false;
        }

        for (let i = 3; i <= Math.sqrt(element); i += 2) {
            if (element % i === 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            result.push(element);
        }
    }
    return result;
}

console.log(numbers);
console.log(getPrimes(numbers));
console.log("=======");

function isPrime(number) {
    if (number === 1) {
        return false;
    }

    if (number === 2) {
        return true;
    }

    let isPrime = true;

    if (number % 2 === 0) {
        isPrime = false;
    }

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            isPrime = false;
        }
    }

    return isPrime;
}

console.log(numbers);
console.log(filterArray(numbers, n => isPrime(n)));
console.log("===============");

console.log(mapArray(filterArray(numbers, n => isPrime(n)), n => n * n));

console.log(numbers.filter(n => isPrime(n)).map(n => n * n));

