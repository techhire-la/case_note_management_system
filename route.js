var express = require('express');
var router = express.Router();

const User = require('./models/user');
const Clients = require('./models/clients');

const mongoose = require('mongoose');
// GET /register
//router.get('/', function(req, res, next) {
//      return res.sendFile(__dirname + "/root.html");
//});
/*
router.get('/index', function(req, res, next) {
      return res.sendFile(__dirname + "/index.html");

});
*/
router.get('/index', function(req, res, next) {
    //getting my all products information
    var client = Clients.find(function (err, docs) {
        if(err) {
            console.log('Error Happened'  + err);
            return res.redirect('/');
        } else {
            //HERE IS THE PROBLEM
            //ALL PRODUCT NAME IS SHOWN UNDEFINED
            //BUT WHEN I SEND THEM TO THE CLIENT, I GET PRODUCT NAME
            for(var client in docs) {
              console.log('Name: ' + docs[client].first_name);
            }
          }
          res.render('/index', {
                client: docs  //sending these information to the client side
            });
        });
    });


/*
router.post('/index', (req, res, next) => {

        // create object with form inputs



              var char = {
                first_name: "Mario",
                last_name: "Spon"
              };

              Clients.create(char, function (error, user) {
                if (error) {
                  return next(error);
                } else {
              //    req.session.userId = user._id;
                  return res.redirect('/index');
                }
              });
})
// GET /about


*/

router.post('/', (req, res, next) =>  {

  var char1 = {
    first_name: "James",
    last_name: "Car"
  };
  var char2 = {
    first_name: "James",
    last_name: "Car"
  };
  var char3 = {
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
          return next(error);
        } else {
      //    req.session.userId = user._id;
          return res.redirect('/index');
        }
      });

    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
})



module.exports = router;
