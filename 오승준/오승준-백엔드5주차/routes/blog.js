const express = require('express');

const router = express.Router();
const User = require('../models/user.js');

// get
router.get('/adduser', function(req,res){
  res.render('adduser.ejs');
});

//post
router.post('/adduser',function(req,res){
  const newUser = new User({
    name : req.body.name,
    age : req.body.age,
    birth : req.body.birth,
    job : req.body.job,
    address : req.body.address
  });
  newUser.save()
  .then(function(){
    res.render('result.ejs',{User : req.body});
  })
  .catch(function(err) {
    console.log(err);
  });
});

module.exports = router;