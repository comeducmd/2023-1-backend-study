const express = require('express')
const bodyParser = require('body-parser')

const app = express();

//Template Engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/express', (req, res) => {
    res.render('express.ejs')
})

app.get('/node-js', (req, res) => {
    res.render('nodejs.ejs')
})

app.get('/post', (req, res) => {
    res.render('post.ejs')
})

app.post('/post', (req, res) => {
    console.log('POST 방식을 이용해 post로 이동')
    console.log(req.body)
    console.log(req.body.title)
    console.log(req.body.content)
    res.render('result.ejs', { article: req.body })
})

app.listen(3000, function () {
    console.log("Listening on 3000 port")
})