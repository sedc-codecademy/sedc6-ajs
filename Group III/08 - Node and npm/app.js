const fs = require("fs");

const params = process.argv.slice(2);

const fileName = params[0] || 'books.json';

fs.readFile(fileName, { encoding: 'utf8' }, (err, data) => {
    if (err) {
        console.error("ERROR is: ", err);
        return;
    }

    let books = JSON.parse(data);
    let authors = books.map(book => book.author);

    let fileParts = splitFileName(fileName);
    let authorFileName = `${fileParts.fileName}.authors${fileParts.extension}`;

    fs.writeFile(authorFileName, JSON.stringify(authors, null, 2), (err, data)=>{
        if (err) {
            console.error("ERROR is: ", err);
            return;
        }
        console.log(`authors extracted, ${authorFileName} written`);
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

