const mongoose = require('mongoose');
const validator = require('email-validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [(value) => validator.validate(value), 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter an password'],
    minlength: [8, 'Minimum password length is 8 characters'],

  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
