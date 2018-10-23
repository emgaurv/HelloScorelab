var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HelloScorelab' });
});
router.get('/hindi', function(req, res, next) {
  res.render('hindi', { title: 'HelloScorelab' });
});
module.exports = router;
