const express = require('express');

const petRoutes = require('./routes/pet.js');

const app = express();

app.use('/pet', petRoutes);

app.listen(3000, function() {
  console.log("Listening on 3000 port...");
});

// URL Routing -> URL을 페이지에 연결하는 작업
