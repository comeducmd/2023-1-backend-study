//URL 라우팅
const express = require('express');

const Article = require('../models/article.js');//모델 갖고 오기(파일경로)
const User = require('../models/user.js');

const router = express.Router();

router.get('/', function (req, res) { //main
    res.render('home.ejs');
});

router.get('/post', function (req, res) {
    res.render('post.ejs');
});

router.get('/user', function (req, res) {
    res.render('user.ejs');
});

router.get('/express', function (req, res) {
    res.render('express.ejs');
});

router.get('/nodejs', function (req, res) {
    res.render('nodejs.ejs');
});

router.get('/html', function (req, res) {
    res.render('html.ejs');
});

router.get('/css', function (req, res) {
    res.render('css.ejs');
});

//1. 파일 저장소
//2. 데이터베이스-MongoDB
router.post('/post', function (req, res) {
    const newArticle = new Article({ title: req.body.title, content: req.body.content });
    newArticle.save() //데이터베이스에 저장
        .then(function (article) {
            res.render('result.ejs', { article: article }); //데이터 베이스의 저장 값
        })
        .catch(function (err) {
            console.log(err);
        });
});

//과제 - User 
router.post('/user', function (req, res) {
    const newUser = new User({
        name : req.body.name,
        birth: req.body.birth ,
        age : req.body.age,
        gender : req.body.gender,
        school : req.body.school
    });
    newUser.save() //데이터베이스에 저장
        .then(function (user) {
            res.render('result2.ejs', {user: user}); //데이터 베이스의 저장 값
        })
        .catch(function (err) {
            console.log(err);
        });
});

module.exports=router;