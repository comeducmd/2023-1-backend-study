//펫
const express = require('express');
const router = express.Router(); // 반환한 값을 변수에 저장.

// /pet
router.get('',function(req, res){ // '' -> '/'
	res.send("반려동물 페이지입니다.");
})
/*
이부분을 ''으로 해야 하는지 '/'로 해야 하는지에 대해서 조금 더 찾아봤는데요.
아무래도 ''보단 '/'로 하는 게 더 좋을 것 같습니다.
인터넷에 있는 코드들을 보면 대부분 '/'로 작성되었고,
실제로도 이렇게 해야 일관성이 있고 직접 보기에도 직관적이라 더 좋을 것 같습니다.
*/

// /pet/cat
router.get('/cat',function(req, res){ 
	res.send("고양이 페이지입니다.");
}) // pet에 포함

// /pet/dog
router.get('/dog',function(req, res){
	res.send("강아지 페이지입니다.");
}) // pet에 포함

// /pet/hamster
router.get('/hamster',function(req, res){
	res.send("햄스터 페이지입니다.");
}) // pet에 포함

module.exports = router; //app.js 로 보내주기