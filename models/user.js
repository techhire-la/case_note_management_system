const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model


const userSchema = new Schema({
  //  id: {type: String, required: true , unique: true},
    username:{type: String, required: true, unique: true},
    password:{type: String, required: true, unique: true},
  //  password_confirmation:{type: String, required: true, unique: true},
    // timestamp: true

});
//const User = mongoose.model('User', userSchema);



// hash password before saving to databse'
userSchema.pre('save', function(next) {

  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash){

      if(err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
});

module.exports = mongoose.model('User', userSchema);

//module.exports = User;
