const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blog.js');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(blogRoutes);

mongoose.connect('mongodb+srv://admin:1234qwer@cluster0.o8xdgmm.mongodb.net/blog?retryWrites=true&w=majority')
.then(function() {
  app.listen(3000, function() {
    console.log("Listening on 3000 port...");
  });
})
.catch(function(err) {
  console.log(err);
});
