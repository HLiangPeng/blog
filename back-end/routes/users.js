var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', function(req, res, next) {
  var list = [{_id: 1, username: 'linxin', email: '123123@qq.com'}];
  res.send(list)
});

module.exports = router;
