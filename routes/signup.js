/**
 * Created by Alejandro Arbelaez Acevedo on 30/04/2015.
 */
var express = require('express');
var router = express.Router();

var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));


var usersData = require('../model/user');

router.post('/', function (req, res) {
    var name = req.body.signUpName;
    var email = req.body.signUpEmail;
    // todo encrypt passowrd with bcrypt
    var password = req.body.signUpPassword;
    var number = req.body.signUpPhone;

    console.log("POST FOR SIGN UP: "+name+" "+email+" "+password+" "+number);

    usersData.createUser(name, password, email, number, function (wasSuccessful) {
        if(wasSuccessful){
            res.render('signUpSuccess', { title: 'Sign Up Success!', maker: 'Alejandro Arbelaez Acevedo' });
        }
        else{
            //todo take to url / and not url/signup
            console.log("could not create user");
            res.redirect('/');
            //res.render('index', { title: 'Sign Up Failed!', signUpFailed:true  ,maker: 'Alejandro Arbelaez Acevedo' });
        }
    });


});

module.exports = router;