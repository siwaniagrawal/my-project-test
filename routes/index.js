var express = require('express');
var router = express.Router();
console.log("rechead");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index_page' });
});
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'login_page' });
  });
  router.get('/login/signup', function(req, res, next) {
    res.render('signup', { title: 'signup_page' });
  });
module.exports = router;
