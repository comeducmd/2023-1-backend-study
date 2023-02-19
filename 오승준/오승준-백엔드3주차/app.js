// 오승준 백엔드 3주차 과제
const express = require("express");
const app = express();
const routerStudent = require("./student.js"); // -> ./routes/student.js

/*
student.js 파일은 URL 라우팅에 관한 파일이기 때문에 이와 같은 파일들은 모두 routes 폴더에 넣어 관리하는 것이 좋습니다.
./student.js -> ./routes/student.js
*/

app.set('view engine', 'ejs'); //ejs 사용법.
app.use('/',routerStudent);

app.get('/',function(req,res){
  res.render('home.ejs');
});

app.listen(3000,function(){
  console.log(" Listening on 3000 Port . . .");
});
