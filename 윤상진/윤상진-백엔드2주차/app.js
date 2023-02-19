const express = require('express');
const petRoutes = require('./routes/pet');
const elecRoutes = require('./routes/electronic');

const app = express();

app.use('/pet', petRoutes);
app.use('/electronic', elecRoutes);

app.listen(3000, () => {
    console.log("Listening on 3000 port");
});

// URL Routing => url을 페이지에 연결
