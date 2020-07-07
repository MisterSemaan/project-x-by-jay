const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST_NAME || 'localhost';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`SERVER IS ALIVE >>> http://${host}:${port}`);
});