const fs = require('fs')
const express = require('express')
const app = express();

app.use(express.static("public"));

const apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.get("/books", (req, res) => {
    let sortBy = req.query["sortby"];
    let filter = req.query["filter"];

    fs.readFile("data/books.json", { encoding: 'utf8' }, (err, data) => {
        if (err) {
            console.error("ERROR is: ", err);
            return;
        }

        let books = JSON.parse(data);

        if (sortBy) {
            if (sortBy === "author") {
                books.sort((a, b) => a.author.localeCompare(b.author));
            } else if (sortBy === "title") {
                books.sort((a, b) => a.title.localeCompare(b.title));
            }
        }

        if (filter) {
            filter = filter.toLowerCase();
            books = books.filter(book => book.author.toLowerCase().includes(filter));
        }

        let result = {
            books: books.slice(0, 50),
            total: books.length
        }

        res.send(JSON.stringify(result));
    });
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))