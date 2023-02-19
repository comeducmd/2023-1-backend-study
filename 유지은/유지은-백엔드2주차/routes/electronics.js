const express = require('express');

const elecrouter = express.Router(); // electrouter -> router
/*
라우터 변수의 경우, routes 폴더 안에 있는 파일들끼리의 코드 일관성을 위해 모두 'router'라는 이름으로 통일하여 작성합니다.
elecrouter는 오직 이 파일 안에서만 동작하기 때문에 electronic.js와 pet.js에 있는 라우터 변수 모두 router라는 이름으로 바꾸어도 서로 겹치지 않습니다.
*/

elecrouter.get('/',function(req,res){
    res.send("전자제품 페이지입니다.");
});

elecrouter.get('/computer',function(req,res){
    res.send("컴퓨터 페이지입니다.");
});

elecrouter.get('/refrigerator',function(req,res){
    res.send("냉장고 페이지입니다.");
});

elecrouter.get('/tv',function(req,res){
    res.send("티비 페이지입니다.");
});

elecrouter.get('/radio',function(req,res){
    res.send("라디오 페이지입니다.");
});

elecrouter.get('/dishwasher',function(req,res){
    res.send("식기세척기 페이지입니다.");
});

module.exports = elecrouter;