const express = require('express')
const router = express.Router()

const Article = require('../models/article.js')
const User = require('../models/user.js')

router.get('/', (req, res) => {
    res.render('home.ejs')
})

router.get('/express', (req, res) => {
    res.render('express.ejs')
})

router.get('/node-js', (req, res) => {
    res.render('nodejs.ejs')
})

router.get('/post', (req, res) => {
    res.render('post.ejs')
})

router.get('/user', (req, res) => {
    res.render('user.ejs')
})

//1. 파일 저장소
//2. 데이터베이스 - MongoDB - NoSQL?
//
router.post('/post', (req, res) => {
    const newArticle = new Article({ title: req.body.title, content: req.body.content })
    newArticle.save()
        .then(() => {
            res.render('result.ejs', { article: req.body })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.post('/user', (req, res) => {
    const newUser = new User({ firstName: req.body.firstName, secondName: req.body.secondName, phone: req.body.phone, email: req.body.email, address: req.body.address })
    newUser.save()
        .then(() => {
            res.render('uInfo.ejs', { user: req.body })
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router