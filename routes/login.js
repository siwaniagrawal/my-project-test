var express = require('express');
var router = express.Router();
console.log("rechead");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login_page' });
});

module.exports = router;
