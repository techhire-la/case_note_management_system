var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');


router.get('/index', function(req, res, next) {
  return res.render('index.html');
  });

module.exports = router;
