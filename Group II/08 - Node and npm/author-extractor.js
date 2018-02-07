const fs = require("fs");

const cliParams = process.argv.slice(2);

const fileName = cliParams[0] || "books.json";
const outFile = cliParams[1] || "authors.json";

fs.readFile(fileName, {encoding: "utf-8"}, (err, data) => {
    if (err) {
        console.error(`Error caught: ${err}`);
        return;
    }

    let books = JSON.parse(data);

    let result = books.map(book => book.author);

    fs.writeFile(outFile, JSON.stringify(result, null, 2), (err)=>{
        if (err){
            console.error(`Error writing file ${outFile}: ${err}`);
        } else {
            console.log(`Successfully written file ${outFile}`);
        }
    })
})