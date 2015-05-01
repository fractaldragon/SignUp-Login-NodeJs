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
    console.log("INPUT FOR NEW USER " + name);
    var User = mongoose.model('User');
    var result = null;
    var newUser = new User({name: name, password: password, email: email, contactnumber: contactnumber});
// todo check restriction for user creation
    if(name == "" || password == "" || email == "" || contactnumber == ""){
        callback(false);

    }
    else{
        User.find({email: email}, function (err, docs) {
            if(!err){
                result = docs[0];
                if(result != null){
                    console.log("Found something "+ result);
                    console.log("user Already in DB");
                    //todo callback return user already in db
                    callback(false);
                }
                else{
                    newUser.save(function(err){
                        if(err) return console.error("Error while saving new User: "+err);
                        console.log("User Saved");
                        //todo callback return user creation successful
                        callback(true);
                    });
                }


            }
            else{
                console.log("there was an error finding an existing user: " + err);
                result = -1;
                throw err;
            }
        });


    }

};

exports.updateUserData =  function updateUserData(callback){
    var User = mongoose.model('User');
    User.findOneAndUpdate();

};


exports.deleteUser = function deleteUser (email, callback) {

    var User = mongoose.model('User');
    User.findOneAndRemove({email:email}, function (err, userFound) {
            if(err){
                throw err;
            }
            else{
               callback(userFound);
            }
        }
    );


};

exports.findUser = function findUser (param,callback){
    var User = mongoose.model('User');

    User.findOne(param, function (err, userFound) {
        if(err){
            throw err;
        }
        else{
            callback(userFound);
        }
    });
};