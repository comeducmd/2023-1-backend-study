const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const blogRoutes= require('./blog.js');

const app =express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(blogRoutes);

mongoose.connect('url').then(function(){
    app.listen(3000,function(){
        console.log("Listening on 3000 port...");
    });
})
.catch(function(err){
    console.log(err);
});

/*app.get('/',function(req,res){
    res.render('home.ejs');
});

app.get('/express',function(req,res){
    res.render('express.ejs');
});

app.get('/post',function(req,res){
    res.render('post.ejs');
});*/

app.post('/post',function(req,res){
    console.log("post를 post 방식으로 이동함.")
    console.log(req.body);
    console.log(req.body.tittle);
    console.log(req.body.content);
    res.render('result.ejs',{article: req.body});
});

/*app.get('/nodejs',function(req,res){
    res.send("<h1>Node</h1><p>node.js는 ... 입니다.</p>");
});*/
