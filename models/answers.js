const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bcrypt = require('bcrypt');

// Create a Schema and a Model

const answerSchema = new Schema({
    id: {type: Number, required: true , unique: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true, unique: true},
    password_confirmation:{type: String, required: true, unique: true},
    timestamp: true

});
// hash password before saving to databse


UserSchema.pre('save', function(next) {

  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash){

      if(err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
});
UserSchema.pre('save', function(next) {

  var user = this;
  bcrypt.hash(user.password_confirmation, 10, function(err, hash){

      if(err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
});


const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;









const Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;
