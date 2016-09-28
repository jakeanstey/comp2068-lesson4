var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 4', message: "It is about time for lunch" });
});

/* GET random page */
router.get('/random', function(req, res, next){
  /* Generate random number */
  var randomNumber = Math.random()*100;
  res.render('random', { title: "Random # Generator", randomNumber: randomNumber } );
});

module.exports = router;
