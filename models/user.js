const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const userSchema = new Schema({
    id: {type: String, required: true , unique: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true, unique: true},
    password_confirmation:{type: String, required: true, unique: true},
    timestamp: true

});

// hash password before saving to databse'
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

const User = mongoose.model('User', userSchema);

module.exports = User;

const User = mongoose.model('Client', userSchema);

module.exports = User;
