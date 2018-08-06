const express = require('express'),
 redirect = require("express-redirect");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const User = require('./models/user');
const mongoose = require('mongoose');
const root = require('./route/root');
const routes = require('./route/index');


//parse incoming request
//sapp.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);



//res.json({ error: err });

app.use('/', root);
app.use('/index', routes);

app.use(express.static(__dirname + '/route'));

app.use('/', (req, res) => {
res.sendFile('./root.html',  {"root": __dirname});

});


app.use('/index', (req, res) => {
  res.render('./route/index');
});


// The mongoose connection



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
