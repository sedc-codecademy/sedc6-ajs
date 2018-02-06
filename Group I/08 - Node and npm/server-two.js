const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.sendFile("index.html", {root: __dirname});
    //res.send('Hello World!')
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))