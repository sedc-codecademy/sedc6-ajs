const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("public"));

const apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.get("/books", (req, res) => {
    let sortby = req.query["sortby"];
    let filter = req.query["filter"];

    fs.readFile("data/books.json", { encoding: 'utf8' }, (err, data) => {
        if (err) {
            console.error("ERROR is: ", err);
            return;
        }

        let books = JSON.parse(data);

        if (sortby) {
            if (sortby === "author") {
                books.sort((a, b) => a.author.localeCompare(b.author));
            } else if (sortby === "title") {
                books.sort((a, b) => a.title.localeCompare(b.title));
            }
        }

        if (filter) {
            filter = filter.toLowerCase();
            books = books.filter(book => book.title.toLowerCase().includes(filter));
        }

        let result = {
            books: books.slice(0, 50),
            total: books.length
        }

        res.send(JSON.stringify(result));
    })
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})