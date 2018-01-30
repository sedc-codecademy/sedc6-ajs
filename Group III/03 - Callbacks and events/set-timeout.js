// console.log("one");

// setTimeout(() => {
//     console.log("two");
// }, 0);

// console.log("three");

let numnames = [
    "zero", "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten"
];

function printSync(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
    }
}

function printWithTimeout(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        setTimeout(() => {
            console.log(element);
        }, index * 1000);
    }
}


function printNested() {
    console.log("zero");
    setTimeout(() => {
        console.log("one");
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    console.log("four");
                }, 1000);
                console.log("three");
            }, 1000);
            console.log("two");
        }, 1000);
        console.log("other one");
    }, 1000);
};


(function iterateTimeout(array) {
    const [head, ...tail] = array;
    console.log(head);
    if (tail.length) {
        setTimeout(() => {
            iterateTimeout(tail);
        }, 1000);
    }
})(numnames);