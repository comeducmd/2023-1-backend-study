const express = require('express');

const Article = require('../models/article.js');

const router = express.Router();

router.get('/', function(req, res) {
  res.render('home.ejs');
});

router.get('/post', function(req, res) {
  res.render('post.ejs');
});

router.post('/post', function(req, res) {
  const newArticle = new Article({ title: req.body.title , content: req.body.content });
  newArticle.save()
  .then(function(article) {
    res.render('result.ejs', { article: article });
  })
  .catch(function(err) {
    console.log(err);
  });
});

router.get('/express', function(req, res) {
  res.render('express.ejs');
});

router.get('/nodejs', function(req, res) {
  res.render('nodejs.ejs');
});

module.exports = router;
