let weko = function (n) {
    return n + n;
}

let weko2 = weko;

function add(x, y) {
    console.log("add called");
    return x + y;
}

let sub = function (x, y) {
    return x - y;
};

let mul = (x, y) => x * y;

// let result = add(4, 5);
// console.log(result);

// result = sub(10, 3);
// console.log(result);

// result = mul(3, 6);
// console.log(result);

let x = 4;
let y = 7;

function displayResult(x, y, operation) {
    let result = operation(x, y);
    console.log(`Result is ${result}`);
}

// displayResult(4, 5, add);
// displayResult(10, 3, sub);
// displayResult(3, 6, mul);
// displayResult(20, 4, (x, y) => x / y);
// result = sub(10, 3);
// console.log(result);

// result = mul(3, 6);
// console.log(result);

function displayHalfResult(x, y, operation) {
    if (Math.random() > 0.8) {
        let result = operation(x, y);
        console.log(`Result is ${result}`);
        result = operation(x, y);
        console.log(`Second Result is ${result}`);
    } else if (Math.random() > 0.5) {
        let result = operation(x, y);
        console.log(`Result is ${result}`);
    } else {
        console.log(`No result for you`);
    }
}

displayHalfResult(4, 5, add);
displayHalfResult(10, 3, sub);
displayHalfResult(3, 6, mul);
displayHalfResult(20, 4, (x, y) => x / y);


let values = [
    { x: 1, y: 2, op: "+" },
    { x: 3, y: 4, op: "*" },
    { x: 7, y: 5, op: "-" }
];


function processValues(values) {
    let add = (x, y) => x + y;
    let operations = {
        "+": add,
        "*": (x, y) => x * y,
        "-": (x, y) => x - y,
    };
    let sum = 0;

    for (let index = 0; index < values.length; index++) {
        const element = values[index];
        const operation = operations[element.op];
        const value = operation(element.x, element.y)
        sum += value;
    }
    return sum;
}

let result = processValues(values);

let names = [
    { name: "Peter", lastName: "Peterson" },
    { name: "Rick", lastName: "Roll" },
    { name: "Blaze", lastName: "Speed" },
];

let resultFirst = "Peter Peterson & Rick Roll & Blaze Speed";
let resultSecond = "Peterson, Peter / Roll, Rick / Speed, Blaze"
let resultThrid = "PP|RR|BS";

let getFullName = nameObject => `${nameObject.name} ${nameObject.lastName}`;
let getOtherName = nameObject => `${nameObject.lastName}, ${nameObject.name}`;

console.log(getFullName({ name: "Peter", lastName: "Peterson" }));
console.log(getOtherName({ name: "Peter", lastName: "Peterson" }));


let processNames = function (names, processor, separator) {
    let result = [];
    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        const nameResult = processor(element);
        result.push(nameResult);
    }
    return result.join(separator);
}

console.log(processNames(names, getFullName, " & "));
console.log(processNames(names, getOtherName, " / "));
console.log(processNames(names,
    nameObject => `${nameObject.name[0]}${nameObject.lastName[0]}`,
    "|"));
console.log(processNames(names,
    nameObject => `${nameObject.name.toLowerCase()[0]}${nameObject.lastName.toLowerCase()}@example.com`,
    "\n"));

