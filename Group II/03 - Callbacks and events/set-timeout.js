let numnames = [
    "zero", "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine","ten"
]

console.log("one");

setTimeout(function(){
    console.log("four");
}, 2000);

setTimeout(function(){
    console.log("two");
}, 1000);

console.log("three");
