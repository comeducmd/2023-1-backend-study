const express=require('express');
const petRoutes =require('./pet.js'); // ./pet.js -> ./routes/pet.js
const app=express();
app.use('/pet',petRoutes);
app.listen(3000,function(){
    console.log("Listening on 3000 port...");
});

/*
pet.js 파일은 URL 라우팅에 관한 파일이기 때문에 이와 같은 파일들은 모두 routes 폴더에 넣어 관리하는 것이 좋습니다.
./pet.js -> ./routes/pet.js
*/