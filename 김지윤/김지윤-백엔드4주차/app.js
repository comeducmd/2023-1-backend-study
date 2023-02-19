//패키지
const express = require('express');
const bodyParser=require('body-parser');

const app = express();

app.set('view engine', 'ejs');
//사용자가 입력했던 정보를 body 안에 담기도록
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){ //main
    //console.log(__dirname+'/views/home.html');
    res.render('home.ejs');
});

app.get('/post',function(req,res){
    res.render('post.ejs');
});

//submit하면 아래로 이동(post)
app.post('/post', function (req, res) {
    //console.log("/post로 post 방식으로 이동하였습니다.");
    //console.log(req.body);
    //console.log(req.body.title);
    //console.log(req.body.content);
    res.render('result.ejs',{article: req.body});
});

app.get('/express', function (req, res) {
    res.render('express.ejs');
});

app.get('/nodejs', function (req, res) {
    res.render('nodejs.ejs');
});

app.get('/html', function (req, res) {
    res.render('html.ejs');
});

app.get('/css', function (req, res) {
    res.render('css.ejs');
});

app.listen(3000,function(){
    console.log("3000 port");
});