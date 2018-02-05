const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname + "/public" });
});

const apiRouter = express.Router();

apiRouter.get("/books", (req, res) => {

    let sortOrder = req.query["sortby"];
    let filter = req.query["filter"];

    fs.readFile("data/books.json", { encoding: 'utf8' }, (err, data) => {
        if (err) {
            console.error("ERROR is: ", err);
            return;
        }
    
        let books = JSON.parse(data);
        if (sortOrder === "author") {
            books.sort((a, b)=> a.author.localeCompare(b.author));
        } else if (sortOrder === "title") {
            books.sort((a, b)=> a.title.localeCompare(b.title));
        }

        if (filter) {
            filter = filter.toLowerCase();
            books = books.filter(book => {
                // book.title.includes(filter) || book.author.includes(filter)
                if (book.title.toLowerCase().includes(filter))
                    return true;
                if (book.author.toLowerCase().includes(filter))
                    return true;
                return false;
            });
        }
        
        res.send(JSON.stringify({
            books: books.slice(0, 50),
            total: books.length
        }));
    });
})

apiRouter.get("/books/title", (req, res) => {
    fs.readFile("data/books.json", { encoding: 'utf8' }, (err, data) => {
        if (err) {
            console.error("ERROR is: ", err);
            return;
        }
    
        let books = JSON.parse(data);
        let titles = books.map(book => book.title);
        res.send(JSON.stringify(titles));
    });
})

apiRouter.get("/books/author", (req, res) => {
    fs.readFile("data/books.json", { encoding: 'utf8' }, (err, data) => {
        if (err) {
            console.error("ERROR is: ", err);
            return;
        }
    
        let books = JSON.parse(data);
        let authors = books.map(book => book.author);
        res.send(JSON.stringify(authors));
    });
})


app.use("/api", apiRouter);


app.listen(8080, () => console.log('Example app listening on port 8080!'));
