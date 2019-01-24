const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const Schema = mongoose.Schema;
// const cors = require("cors");

const users = require("./routes/api/users");
const clients = require("./routes/api/clients");
// const profile = require('./routes/api/profile');
// const posts = require('./routes/api/posts');
const questionnaire = require("./routes/api/questionnaire");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/clients", clients);

// app.use('/api/questionnaire', questionnaire);
// console.log('/api/questionairre')
// app.use('/api/posts', posts);

let schema = new Schema(
  {
    addFellow: [
      {
        firstName: String,
        lastName: String,
        phoneNumber: String,
        email: String,
        address: String
      }
    ]
  },
  {
    collection: "fellows"
  }
);

let Model = mongoos.model("Model", schema);
mongoose.connect("mongodb://localhost:27017/testaro");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.post("/addFellow", function(req, resp) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;
  let address = req.body.address;
  console.log(
    "Post Received: %s %s %s",
    firstName,
    lastName,
    phoneNumber,
    email,
    address
  );
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
