const fs = require("fs");

const params = process.argv.slice(2);

const fileName = params[0] || 'books.json';
const fieldName = params[1] || "author";

fs.readFile(fileName, { encoding: 'utf8' }, (err, data) => {
    if (err) {
        console.error("ERROR is: ", err);
        return;
    }

    let books = JSON.parse(data);
    let values = books.map(book => book[fieldName]);

    let fileParts = splitFileName(fileName);
    let valuesFileName = `${fileParts.fileName}.${fieldName}s${fileParts.extension}`;

    fs.writeFile(valuesFileName, JSON.stringify(values, null, 2), (err, data)=>{
        if (err) {
            console.error("ERROR is: ", err);
            return;
        }
        console.log(`Field ${fieldName} extracted, ${valuesFileName} written`);
    })
});

function splitFileName(fileName) {
    let lastDot = fileName.lastIndexOf(".");
    if (lastDot === -1) {
        return {
            fileName: fileName,
            extension: undefined
        }
    }
    return {
        fileName: fileName.slice(0, lastDot),
        extension: fileName.slice(lastDot)
    }
}

