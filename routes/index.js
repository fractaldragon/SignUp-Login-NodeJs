var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express',signUpFailed:false , maker: 'Alejandro Arbelaez Acevedo' });
});



module.exports = router;
