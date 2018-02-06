const name = "Wekoslav";

console.log("Enter Name:")
process.stdin.on("data", (data) => {
    console.log(`Hello ${data}`);
});

