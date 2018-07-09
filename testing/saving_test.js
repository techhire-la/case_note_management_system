const mocha= require('mocha');
const assert = require('assert');
const User = require('../models/user');

// Describe our tests
describe('Saving records', function(){

  // Create tests
  it('Saves a record to the database', function(done){

    const char = new User({
      email: 'James@gmail.com'
    });

    char.save().then(function(){
      assert(!char.isNew);
      done();

      });
  });

});
