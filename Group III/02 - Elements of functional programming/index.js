
// function sayHello(){
//     console.log("Hello, SEDC");

// }

// sayHello();
// sayHello();


let weko = function (x, y) {
    return x + y;
}

let weko2 = function (x, y) {
    return x * y;
}

let weko3 = function (x, y) {
    return x / y;
}

let weko4 = function (x, y) {
    return x - y;
}

let executeAndPrint = function (fn, x, y) {
    let result = fn(x, y);
    console.log("Result is " + result)
}

// let result = weko(3, 4);
// console.log("Result is " + result);

// result = weko2(3, 4);
// console.log("Result is " + result);

// result = weko3(20, 4);
// console.log(result);

// result = weko4(3, 4);
// console.log(result);

// executeAndPrint(weko, 3, 4);
// executeAndPrint(weko2, 3, 4);
// executeAndPrint(weko3, 20, 4);
// executeAndPrint(weko4, 4, 3);


let values = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 7, y: 5 }
]

let add = weko;
let mul = weko2;
let div = weko3;
let sub = weko4;

function processValues(fn, values) {
    let result = 0;
    for (let index = 0; index < values.length; index++) {
        const element = values[index];
        result += fn(element.x, element.y);
    }
    return result;
}

// if (Math.random() > 0.5) {

// } else {
//     values = [{ x: "evil", y: "genius" }]
// }

console.log(processValues(add, values));
console.log(processValues(mul, values));

console.log("==========================");


let values = [
    { name: "Petar", lastName: "Petrov"},
    { name: "Risto", lastName: "Petrov"},
    { name: "Blazo", lastName: "Petrov"},
];
 
let getFullName = function (firstName, lastName) {
    return firstName + " " + lastName;
}

let final = "Petar Petrov & Risto Petrov & Blazo Petrov";