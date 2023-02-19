const express = require('express')
const router = express.Router()

const Post = require('../models/post.js')
const User = require('../models/user.js')

router.get('/', (req, res) => {
    Post.find()
        .then((posts) => {
            console.log(posts)
            res.render('home.ejs', { posts: posts })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/post/:id', (req, res) => {
    Post.findById(req.params.id)
        .then((post) => {
            res.render('post.ejs', { post: post })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/add-post', (req, res) => {
    res.render('post-form.ejs')
})

router.get('/user', (req, res) => {
    res.render('user.ejs')
})

router.post('/add-post', (req, res) => {
    const newPost = new Post({ title: req.body.title, content: req.body.content })
    newPost.save()
        .then((post) => {
            //res.redirect('/post/' + post_id)
            res.redirect(`/post/${post._id}`)
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

router.post('/delete-post', (req, res) => {
    // console.log(req.body.postId)
    Post.findByIdAndDelete(req.body.postId).then(() => {
        res.redirect('/')
    })
        .catch((err) => {
            console.log(err)
        })
})
module.exports = router