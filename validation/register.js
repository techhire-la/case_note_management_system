const Validator = require('validator');
const isEmpty = require('./is-empty');


module.exports = function validateRegisterInput(data) {
  let errors = {};

  // data.name = !isEmpty(data.name) ? data.name : '';

  console.log(data)
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  // data.password2 = !isEmpty(data.password2) ? data.password2 : '';



  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  console.log("made it past validations")

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
