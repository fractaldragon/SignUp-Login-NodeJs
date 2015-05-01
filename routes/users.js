var express = require('express');
var router = express.Router();


var usersData = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  usersData.userList(
      function (allusers){
        console.log(allusers);
        res.render('userList',{title:"User List", maker:'Alejandro Arbelaez Acevedo', allUsers :allusers});
      }

  );
});


module.exports = router;
