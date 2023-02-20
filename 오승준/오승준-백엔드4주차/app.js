const express = require('express');
const bodyParser=require('body-parser');

const app = express();


app.set('view engine', 'ejs'); //ejs 사용법
app.use(bodyParser.urlencoded({extended: true})); //body-parser 사용법

//홈페이지 작성법
app.get('/', function(req, res) {
  res.render('home.ejs');
  //console.log(__dirname +'/views/home.html');
  //res.sendFile(./views/home.html);
});

app.get('/express', function(req, res) {
  res.render('express.ejs');
  //console.log(__dirname +'/views/express.html');
  //res.send("<h1>express</h1> <p>express 는 ... 입니다.</p>")
});
// __dirname 은 현재 실행중인 '폴더'경로
// __filename 은 현재 실행중인 '파일'경로

app.get('/nodejs', function(req, res){
  res.render('nodejs.ejs');
});

app.get('/post', function(req,res){
  res.render('post.ejs');
});

app.post('/post',function(req,res){
  console.log("/post를 post 방식으로 이동하였습니다.");
  // console.log(req.body);
  // console.log(req.body.tilte);
  // console.log(req.body.content);
  res.render('result.ejs',{article: req.body});
})
app.listen(3000, function() {
  console.log("Listening on 3000 port ...");
});