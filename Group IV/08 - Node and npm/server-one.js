const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write("<head><body><h1>");
  res.write("Hello World");
  res.write("</h1></body></head>");
  res.end();
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

