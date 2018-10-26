var express = require('express');
var user = require('../controller/UserController');
var test = require('../controller/TestController');
var goods = require('../controller/GoodsController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user', function (req, res, next) {
  test.test(req,res,next);
});
router.get('/goods/list', function (req, res, next) {
    goods.list(req,res,next);
});

module.exports = router;
