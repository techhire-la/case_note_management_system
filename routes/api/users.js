const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const bcrypt = require('bcryptjs');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
// const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/user');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));


// @route   GET api/users/register
// @desc    Register user
// @access  Public


///////////////////////////////
// @route   POST api/users/register
// @desc    Register user
// @access  Public
<<<<<<< HEAD
router.post('/register', function(req, res) {
    // console.log(req.body)
    // res.json({msg: 'register'})
    // res.json({msg: res.body})

    //console.log(User.findOne({ email: req.body.email }));

    User.findOne({ email: req.body.email }).then(user => {
        console.log("right before IF")
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {

        console.log("in the else")

        const newUser = new User({
            email: req.body.email,
            password: req.body.password
        });

        console.log('newUser: ' + newUser)


        newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));

    }
  });


})

///////////////////////////////


// @route   POST api/users/register
// @desc    Register user
// @access  Public
=======
>>>>>>> 73d77a431c45f4c84aa5abf67efe9412ff972e43
// router.post('/register', (req, res) => {
//     console.log(req.body)
//     // res.json({msg: 'register'})
//     // res.json({msg: res.body})
//
//     // console.log(User.findOne({ email: req.body.email }));
//
//     User.findOne({ email: req.body.email }).then(user => {
//         console.log("right before IF")
//     if (user) {
//       errors.email = 'Email already exists';
//       return res.status(400).json(errors);
//     } else {
//
//         console.log("in the else")
//
//         const newUser = new User({
//             email: req.body.email,
//             password: req.body.password
//         });
//
//         console.log('newUser: ' + newUser)
//
//
//         newUser
//             .save()
//             .then(user => res.json(user))
//             .catch(err => console.log(err));
//
//     }
//   });
//
//
// })

// router.post('/register', (req, res) => {
//     // console.log("Before validateRegisterInput ")
//     // // console.log(validateRegisterInput(req.body))
//     // const { errors, isValid } = validateRegisterInput(req.body);
//     //
//     //
//     // // Check Validation
//     // console.log("Before isValid")
//     // if (!isValid) {
//     //     return res.status(400).json(errors);
//     // }
//
//     console.log("Before UserFindOne")
//     // console.log(typeof req.body.email)
//
//     const errors = {}
//
//     User.findOne({ email: req.body.email }).then(user => {
//         if (user) {
//             errors.email = 'Email already exists';
//             return res.status(400).json(errors);
//         } else {
//
//             const newUser = new User({
//                 email: req.body.email,
//                 password: req.body.password
//             });
//
//             bcrypt.genSalt(10, (err, salt) => {
//                 bcrypt.hash(newUser.password, salt, (err, hash) => {
//                     if (err) throw err;
//                     newUser.password = hash;
//                     newUser
//                         .save()
//                         .then(user => res.json(user))
//                         .catch(err => console.log(err));
//                 });
//             });
//         }
//     });
// });

///////////////////////////////


// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {


  const { errors, isValid } = validateRegisterInput(req.body);


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

      const newUser = new User({
        // name: req.body.name,
        email: req.body.email,
        // avatar,
        password: req.body.password
      });


      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

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

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
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
        return res.status(400).json(errors);
      }
    });
  });
});

router.get('/login', (req, res) => {

  res.render('index.ejs', {client: result}) ;

});
// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
