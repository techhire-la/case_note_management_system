const express = require('express'),
 redirect = require("express-redirect");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const User = require('./models/user');
const mongoose = require('mongoose');
const root = require('./route/root');

app.use(bodyParser.urlencoded({ extended: true }));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);



app.use('/', require('./route/root'));


app.use('/', (req, res) => {
  res.sendFile('./root.html',  {"root": __dirname});
});





//Mongooose Connection

mongoose.connect('mongodb://localhost:27017/testaro');
mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');

}).on('error', function(error){
    console.log('Connection error:', error);
});


///listen to port 4000

app.listen(4000, () => {
  console.log('the application is running');
});
