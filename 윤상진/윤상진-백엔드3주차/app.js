const express = require('express')

const app = express();

//Template Engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/express', (req, res) => {
    res.render('express.ejs')
})

app.get('/node-js', (req, res) => {
    res.render('nodejs.ejs')
})

app.listen(3000, function () {
    console.log("Listening on 3000 port")
})