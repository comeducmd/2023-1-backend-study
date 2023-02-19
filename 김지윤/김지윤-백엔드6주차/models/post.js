const mongoose = require('mongoose');
// 설계도
const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    content: {
        type: String,
        required: true
    }
},
{
        versionKey: false
});

//모델 생성
module.exports = mongoose.model('Post', postSchema); //단수형태+대문자로 시작
