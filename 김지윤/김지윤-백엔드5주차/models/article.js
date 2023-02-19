const mongoose = require('mongoose');
// 설계도
const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    content: {
        type: String,
        required: true
    }
});

//모델 생성
module.exports = mongoose.model('Article', articleSchema); //단수형태+대문자로 시작
