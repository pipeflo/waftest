const express = require('express');
var request = require('request');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  if (req.query.url) {
    request(
      {
        uri: req.query.url
      },
      function(error, response, body) {
        res.send(body);
      }
    );
  } else {
    res.send('You did not send an URL!');
  }
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
