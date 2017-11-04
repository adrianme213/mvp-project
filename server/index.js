const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../client')));

/* -------- ROUTE HANDLING --------- */
// app.get('/', function(req, res) {
//   res.send('Hi');
// });

app.listen(port, function() {
  console.log('Listening on: ', port)
});
