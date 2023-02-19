const express = require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blog.js')

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(blogRoutes);

//Node.js는 비동기 방식 <-> 동기방식

//mongoose 설치 후 connect 오래 걸림
mongoose.set('strictQuery',false);
mongoose.connect('mongodb+srv://admit:admit1234@cluster0.hsgta3o.mongodb.net/blog?retryWrites=true&w=majority')
.then(function(){ //동기방식처럼 작동하도록하기 위해 then 이용
    //빨리 걸림
    app.listen(3000, function () {
        console.log("3000 port");
    });
})
.catch(function(err){ //오류 났을 때 오류 출력
    console.log(err);
});


