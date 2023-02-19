/*
이 파일의 이름은 임의로 정하지 마시고 app.js로 고정해두시길 바랍니다.
Node.js로 백엔드 서버를 만들 때 개발자들이 일반적으로 지키는 관례입니다.
예) app_3.js(X) app.js(O)
*/

/*
그리고 package.json에 수정할 부분이 있습니다.
package.json의 name 속성은 현재 파일들이 위치해 있는 프로젝트 폴더의 이름과 동일하게 해주시고, 예) 김지윤-백엔드3주차
package.json의 main 속성은 지금 현재 있는 이 파일의 이름과 동일하게 해주세요. 예) app.js
*/

/*
nodemon 패키지도 설치해주시길 바랍니다.
npm install --save-dev nodemon
*/

/*
그 외 나머지는 피드백할 부분 없습니다. 아주 잘하셨습니다!
*/

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res){ //main
    //console.log(__dirname+'/views/home.html');
    res.render('home.ejs');
});

app.get('/express', function (req, res) {
    res.render('express.ejs');
});

app.get('/nodejs', function (req, res) {
    res.render('nodejs.ejs');
});

app.get('/html', function (req, res) {
    res.render('html.ejs');
});

app.get('/css', function (req, res) {
    res.render('css.ejs');
});

app.listen(3000,function(){
    console.log("3000 port");
});

