var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  let screen1Array = [
    "/images/screen2-1.jpeg",
    "/images/screen3-1.jpeg",
    "/images/screen1-1.jpeg",  
  ]
  
  let screen2Array = [
    "/images/screen2-2.jpeg",
    "/images/screen3-2.jpeg",
    "/images/screen1-2.jpeg",  
  ]
  
  res.render('index', { screen1Array, screen2Array});
});

module.exports = router;
