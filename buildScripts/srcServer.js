const express = require('express');
const path = require('path');
const open = require('opn');

let port = 3000;
const app = express();

// default route & send index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

//port number
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
})
