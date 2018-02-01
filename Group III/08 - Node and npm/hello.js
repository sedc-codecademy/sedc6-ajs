console.log("Enter name:");

process.stdin.on('data', function (name) {
    console.log(`Hello ${name}`);
});