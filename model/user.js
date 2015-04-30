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

exports.createUser = function createUser (name, password, email, contactnumber, callback){
    var User = mongoose.model('User');
    var result = null;
    var newUser = new User({name: name, password: password, email: email, contactnumber: contactnumber});

    User.find({name: name, email: email}, function (err, docs) {
        if(!err){
            result = docs[0];
            console.log("Found something "+ result);
        }
        else{
            console.log("there was an error finding an existing user: " + err);
            result = -1;
            throw err;
        }
    });

    if( result == null){
        newUser.save(function(err){
            if(err) return console.error("Error while saving new User: "+err);
            console.log("User Saved");
            //todo callback return user creation successful
            callback();
        });
    }
    else {
        console.log("user Already in DB");
        //todo callback return user already in db
        callback();
    }

};