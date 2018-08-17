var express = require('express');
var router = express.Router();

const user = require('../models/user');
const mongoose = require('mongoose');


router.get('/', function(err,req, res, next) {
  return res.render('root', {title: "root"});
});

router.get('/index', function(req, res, next) {
  return res.render('index', { title: 'index' });
  });


router.post('/addname', function(req, res, next) {

  if (req.body.username && req.body.password) {

      // create object with form inputs
      var userData = {
        username: req.body.username,
        password: req.body.password
      };

      // use schema's `create` method to insert document into Mongo
      user.create(userData, function (error, user) {

      if (error) {

          console.log("error");
          return next(error);

        } else {
          console.log("saved");
           res.redirect('/index');
           return;
          }
      });

    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
})


//Fetching data
/*
router.get('/', (req, res) => {
    let user = User.find({})
    .sort({date:'desc'}).exec( (err, ideas) => {
      res.json({ error: err });
    });
})
*/

module.exports = router;
