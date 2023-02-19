// 가전제품
const express = require('express')
const router_2 = express.Router(); // router_2 -> router

/*
일반적으로 router 변수는 저렇게 router_2로 구분짓지 않고 코드의 일관성을 위해 router로 통일해서 사용합니다.
저 위에 router 변수는 이 파일 안에서만 동작하기 때문에 routes/pet.js의 router 변수와 겹치지 않습니다.
그러므로 routes/pet.js의 router 변수와 이름이 동일하다고 현재 파일의 router를 router_2로 바꿀 필요는 없습니다.
*/

// /electronic
router_2.get('',function(req, res){ // '' -> '/'
	res.send("가전제품 페이지입니다.");
})
/*
이부분을 ''으로 해야 하는지 '/'로 해야 하는지에 대해서 조금 더 찾아봤는데요.
아무래도 ''보단 '/'로 하는 게 더 좋을 것 같습니다.
인터넷에 있는 코드들을 보면 대부분 '/'로 작성되었고,
실제로도 이렇게 해야 일관성이 있고 직접 보기에도 직관적이라 더 좋을 것 같습니다.
*/

// /electronic/desktop
router_2.get('/desktop',function(req, res){
	res.send("데스크탑 페이지입니다.");
})

// /electronic/television
router_2.get('/television',function(req, res){
	res.send("텔레비전 페이지입니다.");
})

// /electronic/rifrigerator
router_2.get('/rifrigerator',function(req, res){
	res.send("냉장고 페이지입니다.");
})

// /electronic/air_conditioner
router_2.get('/air_conditioner',function(req, res){
	res.send("에어컨 페이지입니다.");
})

// /electronic/microwave
router_2.get('/microwave',function(req, res){
	res.send("전자렌지 페이지입니다.");
})

module.exports = router_2;