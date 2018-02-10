const fs = require("fs");

const cliParams = process.argv.slice(2);
console.log(cliParams);

const fileName = cliParams[0] || "index.js";

fs.readFile(fileName, {encoding: "utf-8"}, (err, data) => {
    if (err) {
        console.log(`Error caught: ${err}`);
        return;
    }

    console.log(data);
})