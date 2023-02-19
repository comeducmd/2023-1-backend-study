const express = require('express');
const router = express('router'); // -> express.Router()
/*
router는 express 안에 내장된 기능이므로 express.Router()를 이용해 가져오셔야 합니다.
pet.js에서는 올바르게 작성하신 것을 보니, 아무래도 이 파일에서만 실수를 하신 것 같네요!
*/

router.get('/', (req, res) => {
    res.send("전자제품 페이지입니다.");
});

router.get('/refridgerator', (req, res) => {
    res.send("냉장고 페이지입니다.");
});

router.get('/television', (req, res) => {
    res.send("TV 페이지입니다.");
});

router.get('/microwave', (req, res) => {
    res.send("전자레인지 페이지입니다.");
});

router.get('/computer', (req, res) => {
    res.send("컴퓨터 페이지입니다.");
});

module.exports = router;