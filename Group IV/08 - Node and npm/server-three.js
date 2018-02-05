const fs = require('fs');
const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.sendFile("index.html", {
        root: __dirname
    });
});

const apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.get("/books", (req, res) => {
    fs.readFile("books.new.json", {
        encoding: 'utf8'
    }, (err, data) => {
        if (err) {
            console.error("ERROR is: ", err);
            return;
        }

        let books = JSON.parse(data);

        if (req.query.sortBy || req.query.sortby) {
            let sortBy = req.query.sortBy || req.query.sortby;
            if (sortBy === "author") {
                books.sort((a, b) => a.author.localeCompare(b.author));
            } else if (sortBy === "title") {
                books.sort((a, b) => a.title.localeCompare(b.title));
            } else {
                res.statusCode = 404;
            }

        }

        res.send(books);
    });
})


app.listen(3001, () => console.log('Example app listening on port 3001!'));