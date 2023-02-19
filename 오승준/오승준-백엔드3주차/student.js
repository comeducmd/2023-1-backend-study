/*
app.js에서도 언급했다시피,
student.js 파일은 URL 라우팅에 관한 파일이기 때문에 이와 같은 파일들은 모두 routes 폴더에 넣어 관리하는 것이 좋습니다.
./student.js -> ./routes/student.js

일반적으로 개발자들은 비슷한 기능을 하는 파일들을 폴더별로 분류하여 관리합니다.
예) views 폴더, routes 폴더
*/

const express = require('express');
const router = express.Router();

router.get('/freshman',function(req,res){
  res.render('freshman.ejs');
});

router.get('/sophmore',function(req,res){
  res.render('sophmore.ejs');
});

router.get('/junior',function(req,res){
  res.render('junior.ejs');
});

router.get('/senior',function(req,res){
  res.render('senior.ejs');
});

module.exports = router; //app.js 로 보내주기.