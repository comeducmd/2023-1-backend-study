const express = require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
// const connect = () => {
//   mongoose
//   .connect("mongodb://127.0.0.1:27017/spa_mall")
//   .catch(err => console.log(err));
// };
const app = express();

const blogRoutes = require('./routes/blog.js');


app.set('view engine', 'ejs'); //ejs 사용법
app.use(bodyParser.urlencoded({extended: true})); //body-parser 사용법
app.use(blogRoutes);

mongoose.set('strictQuery',false);
mongoose.connect('mongodb+srv://admin:qwer1234@cluster0.fo5cksf.mongodb.net/?retryWrites=true&w=majority')
.then(function() {
  app.listen(3000, function() {
    console.log("Listening on 3000 port ...");
  });
})
.catch(function(err) {
  console.log(err);
});

