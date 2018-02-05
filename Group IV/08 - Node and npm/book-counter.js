const fs = require("fs");

const cliArguments = process.argv.slice(2);

const fileName = cliArguments[0] || "books.json";
const outFileName = cliArguments[1] || "count.json";

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

    let result = JSON.stringify({
        bookLength: books.length
    }, null, 2);

    fs.writeFile(outFileName, result, (err) => {
        if (err) {
            console.log(`Error ${err} happened`);
            return;
        } else {
            console.log(`Written ${outFileName}`);
        }
    });
});