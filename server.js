const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const publicPath = path.join(__dirname, 'public');
const buildPath = path.join(__dirname, 'build');

app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, 'src', 'assets')));

// Development
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Production
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up! --> http://localhost:${port}`);
});