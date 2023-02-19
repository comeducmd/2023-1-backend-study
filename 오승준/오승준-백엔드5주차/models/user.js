const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  name :  {
    type:String,
    required:true
  },
  age : {
    type: Number,
    required: true
  },
  birth : {
    type: Number,
    required: true
  } ,
  job : String,
  address :  String
});

module.exports = mongoose.model('User', userSchema);