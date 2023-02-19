const express = require('express');
const bodyParser=require('body-parser');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blog.js');


app.set('view engine', 'ejs'); //ejs 사용법
app.use(bodyParser.urlencoded({extended: true})); //body-parser 사용법
app.use(blogRoutes);

mongoose.connect('mongodb+srv://admin:qwer1234@cluster0.ipyqvor.mongodb.net/?retryWrites=true&w=majority')
.then(function() {
  app.listen(3000, function() {
    console.log("Listening on 3000 port ...");
  });
})
.catch(function(err) {
  console.log(err);
});