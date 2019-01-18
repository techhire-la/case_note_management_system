const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// const User = require('../../models/User');
const Client = require("../../models/clients");

// @route   GET api/clients/test
// @desc    Tests clients route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Clients Works" }));

router.post("/createFellow", (req, res) => res.json({ msg: "Clients Works" }));

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
