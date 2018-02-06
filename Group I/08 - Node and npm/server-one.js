const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {

    console.log(request.url);

    if (request.url === "/api/books") {
        fs.readFile("books.json", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                // if an error occured, show appropriate message
                console.log(`Error Happened: ${err}`);
                return;
            }

            // parse the read data
            const books = JSON.parse(data);

            response.write(JSON.stringify(books));
            response.end();
        });
    } else if (request.url === "/") {
        fs.readFile("index.html", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                // if an error occured, show appropriate message
                console.log(`Error Happened: ${err}`);
                return;
            }

            response.write(data);
            response.end();
        });
    } else {
        response.write("<html><body><h1>")
        response.write("HELLO FROM SEDC SERVER");
        response.write(`<div>
        You requested the url: ${request.url}
    </div>`)
        response.write("</h1></body></html>")
        response.end();
    }
});

const port = 3001;

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

