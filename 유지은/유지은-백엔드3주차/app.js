const express = require('express');

const app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('home.ejs');
});

app.get('/red',function(req,res){
    res.render('red.ejs');
});

app.get('/yellow',function(req,res){
    res.render('yellow.ejs');
});

app.get('/green',function(req,res){
    res.render('green.ejs');
});

app.get('/blue',function(req,res){
    res.render('blue.ejs');
});

app.listen(3000,function(){
    console.log("Listening on 3000 port...");

});

/*
피드백할 부분이 전혀 없네요. 아주 잘하셨습니다!
*/
