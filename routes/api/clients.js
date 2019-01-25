const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// const User = require('../../models/User');
const Client = require("../../models/clients");

// @route   GET api/clients/test
// @desc    Tests clients route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Clients Works" }));

router.post("/addFellow", function(req, res, next) {
  //   const { errors, isValid } = validateRegisterInput(req.body);
  console.log("hit addFellow route");
  debugger;
  const errors = {};
  Client.findOne({ email: req.body.email }).then(client => {
    if (client) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    }
  });
  const newClient = new Client({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address
  });
  newClient
    .save()
    .then(client => res.json(client))
    .catch(err => console.log(err));
  //   Client.create(req.body, function(err, post) {
  //     if (err) return next(err);
  //     res.json(post);
  //   });
});
// @route   GET /all
// @desc    get all cliens
// @access  Public
router.get("/all", (req, res) => {
  Client.find(function(err, clients) {
    if (err) {
      console.log(err);
    } else {
      console.log("Got res.json(clients)");
      res.json(clients);
    }
    // })
    // .then(post => res.json(post))
    // .catch(err =>
    //     res.status(404).json({ nopostfound: 'No clients were found' })
    // );
  });
});

module.exports = router;
