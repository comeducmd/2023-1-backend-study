const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    birth: {
        type: String,
        required: true
    },

    gender: {
        type: Number,
        required: true
    },

    school: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    }
});

//모델 생성
module.exports = mongoose.model('User', userSchema); //단수형태+대문자로 시작
