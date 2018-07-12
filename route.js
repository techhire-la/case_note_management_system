module.exports = function(app, User)
{
  // admin.html
  app.get('/root', function(req, res){
    res.render('./root.html');
  });

  app.get('/addname', function(req,res){ // api/user
    User.find(function(err, contents){
      if(err) return res.status(500).send({err: 'database failure'});
      res.json(contents);
    });
  });

  app.post('/addname', function(req, res){  // api search
  
    Content.find({name: req.body.name}, function(err, contents){
      if(err) return res.status(500).send({err: 'database failure'});
      res.json(contents);
    });
  });


  app.post('/addname', function(req, res){ // api/insert
    var user = new User();
    // console.log("req.body.name : ",req.body.name);
      user.username = req.body.username;
      user.password = req.body.password;

      content.save(function(err){
          if(err){
              console.error(err);
              res.json({result: "error"});
              return;
          }
      });
      res.redirect('/root'); //

  });

};
