const http = require("http");
const fs = require("fs");

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.write("<html><body>");
//     res.write("<h1>HELLO FROM SEDC SERVER</h1>");
//     res.write("<div>HOW DO YOU DO?</div>");
//     res.write(`<div>You requested ${req.url}</div>`);
//     res.write("</body></html>");
//     res.end();
// })

const server = http.createServer((req, res) => {
    if (req.url === "/api/books") {
        fs.readFile("books.json", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(`Error caught: ${err}`);
                return;
            }
            let books = JSON.parse(data);

            books = books.slice(0, 50);

            res.write(JSON.stringify(books));
            res.end();
        });
    } else {
        fs.readFile("index.html", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(`Error caught: ${err}`);
                return;
            }

            res.write(data);
            res.end();
        });
    }
})


server.listen(3000, () => {
    console.log("Started server on port 3000");
})