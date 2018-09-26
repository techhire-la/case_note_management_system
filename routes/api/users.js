const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const bcrypt = require('bcryptjs');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/user');
const Client = require('../../models/clients');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));


// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {

  console.log(req.body);
  const { errors, isValid } = validateRegisterInput(req.body);
  console.log('isValid: ' + isValid);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {

    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      // const avatar = gravatar.url(req.body.email, {
      //   s: '200', // Size
      //   r: 'pg', // Rating
      //   d: 'mm' // Default
      // });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          const newUser = new User({
            email: req.body.email,
            password: hash
          });

          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   POST api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
  router.post('/login', (req, res, next) => {
    console.log("I've hit the login");
    const { errors, isValid } = validateLoginInput(req.body);

    console.log('isValid = ' + isValid);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {
      // Check for user
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }

      console.log('password = ' + password);
      console.log('user.password = ' + user.password);
      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User Matched
          console.log("The passwords matched! Loading payload..");
          const payload = { id: user.id, name: user.name}; // Create JWT Payload
          //, avatar: user.avatar

          // Sign Token
          jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              }
          );
        } else {
          errors.password = 'Password incorrect';
          console.log(errors.password);
          return res.status(400).json(errors);
        }
      });
    });
  });



// router.get('/login', (req, res) => {
//
//     res.render('index.ejs', {client: result}) ;
//
// });



// @route   GET api/users/current
// @desc    Return current user
// @access  Private
    router.get(
        '/current',
        passport.authenticate('jwt', { session: false }),
        (req, res) => {
            res.json({
                id: req.user.id,
                name: req.user.name,
                email: req.user.email
            });
        }
    );


    router.get('/dashboard', passport.authenticate('jwt', { session: false }), (req, res) => {
        Client.find(function (err, clients) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Got res.json(clients)")
                    console.log(clients)
                    res.json({
                        id: req.user.id,
                        name: req.user.name,
                        email: req.user.email,
                        clients: req.user.clients
                    });
                }

                // res.json({
                //     id: req.user.id,
                //     name: req.user.name,
                //     email: req.user.email
                // });
            }
        );
    })

module.exports = router;
