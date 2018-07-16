const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const User = require('./models/user');
const mongoose = require('mongoose');
const route = require('./route.js');

//parse incoming request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engin', 'pug');
app.engine('html', require('ejs').renderFile); // copy pasted, shaky on what it's for

var routes = require('./route');
app.use('/', routes);



app.use("/", (req, res) => {
res.sendFile(__dirname + "/root.html");
});

// The mongoose connection

mongoose.connect('mongodb://localhost:27017/testaro');

mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');

}).on('error', function(error){
    console.log('Connection error:', error);
});






app.listen(4000, () => {
console.log('the application is running')
});


/*
// Should be moved to the route page
app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    }).catch(err => {
   res.status(400).send("unable to save to database");
  });
});
*/
