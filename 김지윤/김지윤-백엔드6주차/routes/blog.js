//URL 라우팅
const express = require('express');

const Post = require('../models/post.js');//모델 갖고 오기(파일경로)

const router = express.Router();

router.get('/', function (req, res) { //
    Post.find()
    .then(function(posts){
        console.log(posts);
        res.render('home.ejs', { posts: posts });
    })
    .catch(function(err){
        console.log(err);
    })
});

router.get('/post/:id',function(req,res){
    //console.log(req.params.id);
    Post.findById(req.params.id)
    .then(function (post) {
       // console.log(result);
       res.render('post.ejs', {post: post});
    })
    .catch(function (err) {
        console.log(err);
    })
})

router.get('/add-post', function (req, res) {
    res.render('post-form.ejs');
});



router.post('/add-post', function (req, res) {
    const newPost = new Post({ title: req.body.title, content: req.body.content });
    newPost.save() //데이터베이스에 저장
        .then(function (post) {
            // res.render('post.ejs', { post: post }); //데이터 베이스의 저장 값
            // res.redirect('/post/' + post._id); //다른 url로 이동
            res.redirect(`/post/${post._id}`); 
        })
        .catch(function (err) {
            console.log(err);
        });
});

router.post('/delete-post', function(req, res){
    Post.findByIdAndDelete(req.body.postId)
        .then(function () {
           res.redirect('/');
        })
        .catch(function (err) {
            console.log(err);
        });
});

module.exports=router;