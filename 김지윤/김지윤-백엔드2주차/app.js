/*
npm init이 안되어 있어 express 패키지를 가져올 수 없다고 오류가 나네요.
다음에는 npm init을 통해 package.json 파일을 생성하시고, express 패키지도 설치해주시길 바랍니다.
npm init
npm install express
*/

// 모듈 추출 (가져오기).
/*
http 모듈은 가져올 필요가 없습니다.
express가 http의 서버 생성 기능을 지원해줍니다.
express를 이용해 서버 생성 기능을 구현하는 방법은 이 파일의 마지막에 후술하였습니다.
*/
const http = require('http'); // 이 부분은 없어도 됩니다.
const express = require('express');

// express 객체 생성.
const app = express();

/*
라우터를 생성하는 부분은 routes 폴더에 외부 파일로 빼놓기 바랍니다.
예) routes/pet.js, routes/electronic.js
*/

/*
그리고 app.js에는 다음과 같이 router를 임포트하여 가져와주세요.
const petRoutes = require('./routes/pet.js');
const electronicRoutes = require('./routes/electronic.js');
*/

/* 여기에서부터 */
// 라우터 생성.
const router = express.Router(); // routes/pet.js으로
const routerB = express.Router(); // routes/electronic.js으로
/* 여기까지를 각각 routes/pet.js와 routes/electronic.js에 */

/* 여기에서부터 */
//pet 라우터 설정
router.get('/', function(req, res) { // 경로 : localhost:5000/pet
    res.send('<h1>애완동물 페이지 입니다.<h1>');
});

router.get('/hamster', function(req, res) { // 경로 : localhost:5000/pet/hamster
    res.send('햄스터');
});

router.get('/cat', function(req, res) { // 경로 : localhost:5000/pet/cat
    res.send('고양이');
});

router.get('/dog', function(req, res) { // 경로 : localhost:5000/pet/dog
    res.send('강아지');
});
/* 여기까지를 routes/pet.js에 */

/* 여기에서부터 */
//electronic 라우터B 설정.
routerB.get('/', function(req, res) { // 경로 : localhost:5000/electronic
    res.send('<h1>전자제품 페이지 입니다.<h1>');
});

routerB.get('/microwave', function(req, res) { // 경로 : localhost:5000/electronic/microwave
    res.send('전자레인지');
});

routerB.get('/refrigerator', function(req, res) { // 경로 : localhost:5000/electronic/refrigerator
    res.send('냉장고');
});

routerB.get('/airConditioner', function(req, res) { // 경로 : localhost:5000/electronic/airConditioner
    res.send('에어컨');
});

routerB.get('/oven', function(req, res) { // 경로 : localhost:5000/electronic/oven
    res.send('오븐');
});

routerB.get('/television', function(req, res) { // 경로 : localhost:5000/electronic/television
    res.send('텔레비전');
});
/* 여기까지를 routes/electronic.js에 */

/*
그리고 아래에 있는 app.use()를 다음과 같이 수정하면 됩니다.
app.use('/pet', petRoutes);
app.use('/electronic', electronicRoutes);
*/
app.use('/pet', router);
app.use('/electronic', routerB); // routerB는 default 경로가 localhost:5000/electronic 이다.

// 서버 생성 (http)
/*
http 모듈을 가져올 필요 없이 express를 이용해서 다음과 같이 작성할 수 있습니다.
app.listen(5000, function() {
    console.log('서버 실행 중...');
});
*/
const server = http.createServer(app); 

server.listen(5000);
console.log('서버 실행 중...');

/*
제가 피드백한 부분에 대한 자세한 설명은 2주차 영상 강의를 참고해주세요!
*/