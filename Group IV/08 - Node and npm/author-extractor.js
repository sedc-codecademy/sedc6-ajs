const fs = require("fs");

const cliArguments = process.argv.slice(2);

const fileName = cliArguments[0] || "books.json";
const outFileName = cliArguments[1] || "authors.json";

fs.readFile(fileName, {
    encoding: 'utf8'
}, (err, data) => {
    if (err) {
        console.log(`Error ${err} happened`);
        return;
    }

    const parsedData = JSON.parse(data);
    let books = [];
    if (Array.isArray(parsedData)) {
        books = parsedData;
    } else {
        books = parsedData.items;
    }

    let authors = books.map(book => book.author);

    let result = JSON.stringify(authors, null, 2);

    fs.writeFile(outFileName, result, (err) => {
        if (err) {
            console.log(`Error ${err} happened`);
            return;
        } else {
            console.log(`Written ${outFileName}`);
        }
    });
});