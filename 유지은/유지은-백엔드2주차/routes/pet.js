const express = require('express');

const petrouter = express.Router(); // electrouter -> router
/*
라우터 변수의 경우, routes 폴더 안에 있는 파일들끼리의 코드 일관성을 위해 모두 'router'라는 이름으로 통일하여 작성합니다.
petrouter는 오직 이 파일 안에서만 동작하기 때문에 electronic.js와 pet.js에 있는 라우터 변수 모두 router라는 이름으로 바꾸어도 서로 겹치지 않습니다.
*/

petrouter.get('/',function(req,res){
    res.send("반려동물 페이지입니다.");
});

petrouter.get('/cat',function(req,res){
    res.send("고양이 페이지입니다.");
});

petrouter.get('/dog',function(req,res){
    res.send("강아지 페이지입니다.");
});

petrouter.get('/hamster',function(req,res){
    res.send("햄스터 페이지입니다.");
});

module.exports = petrouter;