const mongoose= require('mongoose');
const articleSchema=mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        require: true
    },
    User:{
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true
    }
});

module.exports=mongoose.model('Article',articleSchema);
//몽고db에서 s추가됨