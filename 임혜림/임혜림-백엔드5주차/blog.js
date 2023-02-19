const express = require('express');
const Article = require('./article.js');
const router=express.Router();
router.get('/',function(req,res){
    res.render('home.ejs');
});

router.get('/express',function(req,res){
    res.render('express.ejs');
});

//1. 파일 저장소
//2. 데이터베이스-mongodb-nosql
router.get('/post',function(req,res){
    const newArticle = new Article({title:req.boby.title, content: req.body.content});
    newArticle.save()
    .then(function(){
        res.render('result.ejs',{article: req.body});
    })
    .catch(function(err){
        console.log(err);
    });
});

router.get('/user',function(req,res){
    const newArticle = new Article({user:req.boby.user});
    newArticle.save()
    .then(function(){
        res.render('result2.ejs',{article: req.body});
    })
    .catch(function(err){
        console.log(err);
    });
});

module.exports=router;