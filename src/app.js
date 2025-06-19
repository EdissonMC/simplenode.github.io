const express = require('express');
const path = require('path');
const app = express();
console.log("solo una prueba")
app.get('/',   (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
