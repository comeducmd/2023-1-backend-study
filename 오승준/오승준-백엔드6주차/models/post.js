const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
  title : {
    type:String,
    required:true // 빈값이면 안되는 의미
  },
  content: {
    type:String,
    required: true
  },
  versionKey : false
});

//mongoose.model(모델명-> 단수,t설계도);
module.exports = mongoose.model('Post',postSchema);