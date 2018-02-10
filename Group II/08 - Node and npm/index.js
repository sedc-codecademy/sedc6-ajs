// const name = "Weko";
// console.log(`Hello, ${name}`);

console.log("Enter name:");
process.stdin.on("data", (data)=>{
    console.log(`Hello, ${data}`);
    console.log("Enter name:");
})

