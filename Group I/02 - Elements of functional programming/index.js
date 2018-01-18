let factor = 2;

let wekoFn = function (n) {
    return n * factor;
}

let otherWeko = wekoFn;

console.log(wekoFn(3));
console.log(otherWeko(4));

let wekoObj = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    square: function (n) { return n * n; },
    double: n => {
        console.log("inside double");
        return n + n;
    },
    triple: n => n * 3,
};

console.log(wekoObj.firstName);
console.log(wekoObj.square(5));
console.log(wekoObj.double(5));
console.log(wekoObj.triple(5));

function double(n) {
    console.log("inside double");
    return n * 2;
};

function apply(fn, arg) {
    console.log("inside apply");
    return fn(arg);
}

console.log(apply(double, 2));

function applyTwice(fn, arg) {
    console.log("inside apply twice");
    return fn(fn(arg));
}

console.log(applyTwice(double, 2));

function applyx(fn, arg, x) {
    console.log("inside apply x");
    let result = arg;
    for (let i = 0; i < x; i += 1) {
        result = fn(result);
    }
    return result;
}

console.log(applyx(double, 2, 5));

function applyTenTimes(fn, arg) {
    console.log("inside apply 10");
    let result = arg;
    for (let i = 0; i < 10; i += 1) {
        result = fn(result);
    }
    return result;
}

let printWeko = value => value + " Weko";

console.log(applyTenTimes(double, 3));
console.log(applyTenTimes(wekoObj.triple, 6));
console.log(applyTenTimes(printWeko, ""));

let a = wekoFn(3);
let b = wekoFn(3);

console.log(applyx(printWeko, "", 100));

// let execApply = () => {
//     console.log("I've been clicked");
// }

// let initApply = () => {
//     document.getElementById("doit").addEventListener("click", execApply);
// }

// document.addEventListener("DOMContentReady", initApply);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("doit").addEventListener("click", () => {
        let name = document.getElementById("name").value;
        let times = document.getElementById("times").valueAsNumber;
        let result = document.getElementById("result");

        let printName = value => `${value} ${name}`;

        result.innerHTML = applyx(printName, "", times);
    });
});

/// spread operator
/// destructuring operator
/// rest operator


