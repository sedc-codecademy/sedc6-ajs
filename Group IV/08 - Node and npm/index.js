// let name = "Wekoslav";

// console.log(`Hello ${name}`);

console.log("Enter your name:");

process.stdin.on('data', function (data) {
    console.log(`Hello ${data.toString()}`);
});