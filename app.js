const express = require('express'),
 redirect = require("express-redirect");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const User = require('./models/user');
const mongoose = require('mongoose');
const root = require('./route/root');
//const routes = require('./route/index');


//parse incoming request
//sapp.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);
//res.render(views, locals);


//res.json({ error: err });

//app.use('/test', test);
//app.use('/index', routes);

var routes = require('./route/root');
app.use('/', routes);



app.use('/', (req, res) => {
  res.sendFile('./root.html',  {"root": __dirname});
});




app.get('/test', function(err,req, res, next) {
        res.render('test.ejs') ;
});



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
