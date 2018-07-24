var express = require('express');
var router = express.Router();

const User = require('./models/user');
const Clients = require('./models/clients');
const mongoose = require('mongoose');


router.get('/', function(err,req, res, next) {
  return res.json({ error: err })
});



/*
router.post('/', (req, res, next) =>  {

  var char1 = {
    first_name: "James",
    last_name: "Car"
  };

  Clients.create(char1, function (error, user) {
    if (error) {
      return next(error);
    } else {
  //    req.session.userId = user._id;
      return res.redirect('/index');
      }
  });


});
*/

router.post('/addname', function(req, res, next) {

  if (req.body.username &&
    req.body.password) {

      // create object with form inputs
      var userData = {
        username: req.body.username,
        password: req.body.password
      };

      // use schema's `create` method to insert document into Mongo
      User.create(userData, function (error, user) {
        if (error) {

          console.log("error");
          return next(error);
        } else {
      //    req.session.userId = user._id;

          console.log("saved");
        //  console.log(
            res.redirect('./index');

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
