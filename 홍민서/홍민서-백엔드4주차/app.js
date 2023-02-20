const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('home.ejs');
});

app.get('/post', function(req, res) {
  res.render('post.ejs');
});

app.post('/post', function(req, res) {
  res.render('result.ejs', { article: req.body });
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