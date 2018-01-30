// console.log("one");
// setTimeout(function () {
//     console.log("two");
// }, 0);
// console.log("three");

let numnames = [
    "zero", "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten"
];

// for (let index = 0; index < numnames.length; index++) {
//     const element = numnames[index];
//     setTimeout(() => {
//         console.log(element);
//     }, index * 1000);
// }

// console.log("LAST");

// setTimeout(() => {
//     console.log("zero");
//     setTimeout(() => {
//         console.log("other one");
//         setTimeout(() => {
//             console.log("two");
//             setTimeout(() => {
//                 console.log("three");
//                 setTimeout(() => {
//                     console.log("four");
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//         console.log("one");
//     }, 1000);
// }, 1000);


function iterateTimeout(array) {
    const [head, ...tail] = array;
    console.log(head);
    if (tail.length) {
        setTimeout(() => {
            iterateTimeout(tail);
        }, 1000);
    }
}

//iterateTimeout(numnames);

async function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

async function loopTimeout() {
    for (let index = 0; index < numnames.length; index++) {
        const element = numnames[index];
        console.log(element);
        await delay(1000);
    }
}

loopTimeout();