const fs = require("fs");

// get command line parameters
const params = process.argv.slice(2);

// get input file name
const inputFile = params[0] || "books.json";

// method for reading files
fs.readFile(inputFile, {encoding: "utf-8"}, (err, data)=>{
    if (err) {
        // if an error occured, show appropriate message
        console.log(`Error Happened: ${err}`);
        return;
    }
    
    // parse the read data
    const books = JSON.parse(data);

    const result = books.map(book => book.author);

    // method for writing files
    fs.writeFile("authors.json", JSON.stringify(result, null, 2), (err)=>{ 
        if (err) {
            console.log(`Error Happened: ${err}`);
        } else {
            console.log(`Successfully writen authors.json`);
        }
    })
});