// 백엔드 스터디 오승준 2주차 과제
const express = require('express');
const app = express();
const petRoutes = require('./routes/pet.js'); // 패키지를 require 하는거랑 다르게 경로를 설정 해준다.
const electronicRoutes = require('./routes/electroinc.js'); // 가전제품


app.use('/pet',petRoutes);
app.use('/electronic',electronicRoutes);

app.listen(3000,function(){
	console.log("Listening on 3000 port...") // 서버가 실행중인지 확인 가능
});
