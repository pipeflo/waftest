const express = require('express');
var request = require('request');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hola Mund');
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
