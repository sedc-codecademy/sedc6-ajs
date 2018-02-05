const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.headers.host);

  fs.readFile("index.html", { encoding: "utf-8"}, (err, data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();
  })
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

