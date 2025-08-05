const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],

  dp: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  fullName: {
    type: String,
    required: true
  },
});


module.exports = mongoose.model('User', userSchema);