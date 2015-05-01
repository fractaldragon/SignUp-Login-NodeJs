/**
 * Created by Alejandro Arbelaez Acevedo on 30/04/2015.
 */
var express = require('express');
var router = express.Router();

var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));


var usersData = require('../model/user');

router.post('/', function (req, res) {
    var uId = req.body.loginId;
    //todo encrypt/decrypt password
    var password = req.body.loginPassword;



    if(uId == null || password == null || uId == "" || password == ""){
        console.log("User or pwd null :(");
        res.redirect('/');
    }
    else{
        var param = {email:uId};

        usersData.findUser(param, function(foundUser){

            console.log('User found '+ foundUser.name+" mail: "+foundUser.email);

            if(password == foundUser.password){
                res.render('loginSuccess', { title: 'Loged In!',user:foundUser.name , maker: 'Alejandro Arbelaez Acevedo' });
            }
            else{
                console.log("could not log in");
                res.redirect('/');
            }

        });
    }



});

module.exports = router;
