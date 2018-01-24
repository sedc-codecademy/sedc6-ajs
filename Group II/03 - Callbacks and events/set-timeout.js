let numnames = [
    "zero", "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten"
]

// independent set-timeouts
let independent = function () {
    for (let index = 0; index < numnames.length; index++) {
        const element = numnames[index];
        setTimeout(function () {
            console.log(element)
        }, index * 1000)
    }
};

// console.log("here");

// nested set-timeout
let nested = () => {
    setTimeout(() => {
        console.log("zero");
        setTimeout(() => {
            console.log("one");
            setTimeout(() => {
                console.log("two");
                setTimeout(() => {
                    setTimeout(() => {
                        console.log("four");
                    }, 1000)
                    console.log("three");
                }, 1000);
            }, 1000)
        }, 1000);
    }, 1000)
}

let tail =[
    "zero", "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten"
];

setTimeout(() => {
    [head, ...tail] = tail;
    console.log(head);
    setTimeout(() => {
        [head, ...tail] = tail;
        console.log(head);
    }, 1000);
}, 1000);

