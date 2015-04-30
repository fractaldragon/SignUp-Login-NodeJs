/**
 * Created by Alejandro Arbelaez Acevedo on 30/04/2015.
 */
var mongoose = require('mongoose');

exports.userList = function userList (callback) {
    var User = mongoose.model('User');

    User.find(function (err, users) {

        if(err){
            console.log(err);
        }
        else{
            console.log(users);
            callback(users);
        }
    });
};