const express = require('express');
const Post = require('./post.js');
const router=express.Router();
router.get('/',function(req,res){
    Post.find()
    .then(function(posts){
        console.log(posts);
        res.render('home.ejs',{posts:posts});
    })
    .catch(function(err){
        console.log(err);
    });
});

router.get('/post/:id',function(req,res){
    console.log(req.params.id);
    Post.findById(req.params.id)
    .then(function(post){
        res.render('post.ejs',{post:post});
    })
    .catch(function(err){
        console.log(err);
    });
});

router.get('/add-post',function(req,res){
    res.render('post-form.ejs');
});

//1. 파일 저장소
//2. 데이터베이스-mongodb-nosql
router.post('/add-post',function(req,res){
    const newPost = new Post({title:req.boby.title, content: req.body.content});
    newPost.save()
    .then(function(post){
        //res.redirect('/post'+post_id);
        res.redirect(`/post/${post._id}`);
    })
    .catch(function(err){
        console.log(err);
    });
});

router.post('/delete-post',fuction(req,res){
    //console.log(req.body.postId);
    Post.findByIdDelete(req.body.postId)
    .then(function(post){
        res.redirect('/');
    })
    .catch(function(err){
        console.log(err);
    });
});

/*router.get('/user',function(req,res){
    const newArticle = new Article({user:req.boby.user});
    newArticle.save()
    .then(function(){
        res.render('result2.ejs',{article: req.body});
    })
    .catch(function(err){
        console.log(err);
    });
});*/
/*
router.get('/express',function(req,res){
    res.render('express.ejs');
});
router.get('/nodejs',function(req,res){
    res.render('nodejs.ejs');
});*/
module.exports=router;