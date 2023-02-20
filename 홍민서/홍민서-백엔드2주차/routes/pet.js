const express = require('express');

const router = express.Router();

// /pet
router.get('', function(req, res) {
  res.send("반려동물 페이지입니다.");
});

// /pet/cat
router.get('/cat', function(req, res) {
  res.send("고양이 페이지입니다.");
});

// /pet/dog
router.get('/dog', function(req, res) {
  res.send("강아지 페이지입니다.");
});

module.exports = router;
