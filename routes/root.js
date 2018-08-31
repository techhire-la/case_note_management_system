var express = require('express');
var router = express.Router();

const user = require('../models/user');
const mongoose = require('mongoose');
//const client = require('../models/client');
const client = require('../models/clients');


var db = mongoose.connection;


router.get('/', function(err,req, res, next) {
    return res.render('root', {title: "root"});
});


router.get('/index', function(req, res, next) {

    db.collection('client').find().toArray(function (err, result) {
        if (err) return console.log(err);



        res.render('index.ejs', {client: result}) ;

    })
});


router.param('id', (req, res, next , id)=> {

    next();
});


router.get('/index/:id', function(req, res, next) {

    res.send('What is up ' + req.params.id + ' !');

});

router.post('/addname', function(req, res, next) {

    if (req.body.email && req.body.password) {

        // create object with form inputs
        var userData = {
            username: req.body.email,
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


module.exports = router;