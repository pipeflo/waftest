const express = require('express');
var request = require('request');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('Request');
  res.send('Hola Mundo');
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
