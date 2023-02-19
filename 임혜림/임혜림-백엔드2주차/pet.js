/*
app.js에서도 언급했다시피,
pet.js 파일은 URL 라우팅에 관한 파일이기 때문에 이와 같은 파일들은 모두 routes 폴더에 넣어 관리하는 것이 좋습니다.
./pet.js -> ./routes/pet.js

일반적으로 개발자들은 비슷한 기능을 하는 파일들을 폴더별로 분류하여 관리합니다.
예) views 폴더, routes 폴더
*/

const express = require('express');
const router = express.Router();
router.get('/',function(req,res){
    res.send("반려동물 페이지입니다.");
});

router.get('/cat',function(req,res){
    res.send("고양이 페이지입니다.");
});

router.get('/dog',function(req,res){
    res.send("강아지 페이지입니다.");
});

router.get('/hamster',function(req,res){
    res.send("햄스터 페이지입니다.");
});

router.get('/hedgehog',function(req,res){
    res.send("고슴도치 페이지입니다.");
});

router.get('/bear',function(req,res){
    res.send("곰 페이지입니다.");
});

module.exports=router;