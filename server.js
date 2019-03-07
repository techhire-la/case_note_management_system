const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
// manages uploads
const multer = require("multer");
// generates name of file
const uuidv4 = require("uuid/v4");
const path = require("path");

const users = require('./routes/api/users');
const clients = require('./routes/api/clients');
// const profile = require('./routes/api/profile');
// const posts = require('./routes/api/posts');
const questionnaire = require('./routes/api/questionnaire');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/clients', clients);

// app.use('/api/questionnaire', questionnaire);
// console.log('/api/questionairre')
// app.use('/api/posts', posts);
//-------
// configure storage (Multer package)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); //a place to save files
    console.log("---a place to save files");
  },
  filename: (req, file, cb) => {
    const newFilename = `${path.extname(file.originalname)}`;
    //uuidv4() will generate a random ID => add this to newFilename const ${uuidv4()}
    //We use path.extname() to get the extension from the original file name
    // and add that to the new generated ID.
    // "userID7777_" - this is hard-coded version.
    // Later we can read a real "userId" from a component State or redux-store
    cb(null, "userID7777_" + uuidv4() + newFilename);
  }
});
// create the multer instance that will be used to upload/save the file
const upload = multer({ storage });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log("before app post")
app.post("/", upload.single("selectedFile"), (req, res) => {
  // console.log("IM in upload post")
  /*
        We now have a new req.file object here. At this point the file has been saved
        and the req.file.filename value will be the name returned by the
        filename() function defined in the diskStorage configuration. Other form fields
        are available here in req.body.
      */
  res.send();
  //update file by UserID
});
//-------
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
