const express = require('express');

const petRoutes = require('./routes/pet.js');

const elecRoutes = require('./routes/electronics.js');

const app = express();

app.use('/pet',petRoutes);

app.use('/electronic',elecRoutes);

app.listen(3000,function(){
    console.log("Listening on 3000 port...");
});

/*
피드백할 부분이 하나도 없네요. 아주 잘하셨습니다!
*/