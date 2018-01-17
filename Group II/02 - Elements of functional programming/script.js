// let weko = function(x) {
//     return 2 * x;
// }

// let result = weko(3);

// console.log(result);

function add(x, y) {
    return x + y;
}

let square = x => {
    console.log("inside square");
    return x*x;
} 

let double = x => {
    console.log("inside double");
    return x*2;
} 

add(2, 3);
add(7, 8);
add("Wekoslav", "Stefanovski");


function apply(fn, arg){
    console.log("inside apply");
    return fn(arg);
}

let result = apply(square, 4);
console.log(result);

function apply10Times(fn, arg){
    console.log("inside apply10Times");
    let result = arg;
    for (let i=0; i<10; i+=1){
        result = fn(result);
    }
    return result;
}

result = apply10Times(double, 3);

console.log(result);

function applyxtimes(fn, arg, x) {
    let result = arg;
    for (let i=0; i<x; i+=1){
        result = fn(result);
    }
    return result;
}

let addWeko = value => value + "Weko";

let callApply = () => {
    let name = document.getElementById("name").value;
    let times = document.getElementById("times").valueAsNumber;

    let result = applyxtimes(value => value + name, "", times);
    document.getElementById("result").innerHTML = result;
}

let init = () => {
    let button = document.getElementById("doit");
    button.addEventListener("click", callApply);
}

document.addEventListener("DOMContentLoaded", init);

/// spread operator
/// destructuring operator
/// rest operator