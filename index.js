const http = require('http');
const fs = require('fs');

const PORT = 5000;

fs.readFile('./index.html',  (err, html) => {

  if (err) throw err;

  http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write(html);
    res.end()
  }).listen(process.env.PORT || PORT)
});