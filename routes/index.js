var express = require('express');
var router = express.Router();

var usersData = require('../model/user');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express',signUpFailed:false , maker: 'Alejandro Arbelaez Acevedo' });
});

router.post('/', function (req, res) {

    usersData.userList(
        function (allusers){
            console.log(allusers);
            res.render('404',{title:"User List", maker:'Alejandro Arbelaez Acevedo', allUsers :allusers});
        }

    );
});

module.exports = router;
