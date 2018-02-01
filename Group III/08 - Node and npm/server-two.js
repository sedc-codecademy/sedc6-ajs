const fs = require('fs');
const express = require('express');
const app = express();

console.log(__dirname);

app.get("/", (req, res) => {
    res.sendFile("hello.html", { root: __dirname });
});

const apiRouter = express.Router();

apiRouter.get("/books", (req, res) => {
    res.sendFile("books.json", { root: __dirname });
})

apiRouter.get("/books/title", (req, res) => {
    fs.readFile("books.json", { encoding: 'utf8' }, (err, data) => {
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
    fs.readFile("books.json", { encoding: 'utf8' }, (err, data) => {
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
