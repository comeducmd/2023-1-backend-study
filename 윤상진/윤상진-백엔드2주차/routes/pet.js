const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("반려동물 페이지입니다.");
});

router.get('/cat', (req, res) => {
    res.send("고양이 페이지입니다.");
});

router.get('/dog', (req, res) => {
    res.send("강아지 페이지입니다.");
});

module.exports = router;