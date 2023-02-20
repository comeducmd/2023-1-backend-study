const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home.ejs');
});

app.get('/express', function(req, res) {
  res.render('express.ejs');
});

app.get('/nodejs', function(req, res) {
  res.render('nodejs.ejs');
});

app.listen(3000, function() {
  console.log("Listening on 3000 port...");
});