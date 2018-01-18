// let weko = function(n) {
//     return n*2;
// }

// let otherWeko = weko;

// console.log(weko(3));
// console.log(otherWeko(4));

// weko = {
//     firstName: "Wekoslav",
//     lastName: "Stefanovski",
//     square: function (n){ return n* n;},
//     double: n => {
//         console.log("inside double");
//         return n + n;
//     },
//     triple: n => n*3,
// };

// console.log(weko.firstName);
// console.log(weko.square(5));
// console.log(weko.double(5));
// console.log(weko.triple(5));

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

function applyTenTimes(fn, arg){
    //...
}





