/**
 * Created by Alejandro Arbelaez Acevedo on 30/04/2015.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    contactnumber: String
});

var User = mongoose.model('User',userSchema);

mongoose.connect('mongodb://localhost/sid');