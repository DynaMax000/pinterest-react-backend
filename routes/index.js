const express = require('express');
const router = express.Router();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const userModel = require('../models/User.models.js');
const postModel = require('../models/Post.models.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

router.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

router.get('/create-user', async (req, res) => {
  const { username, email, password, posts, dp, fullName } = req.body;
  let createdUser = await userModel.create({
    username, email, password, posts, dp, email, fullName
  })
  res.render('create-user');
});

router.post('/create-post', async (req, res) => {
  const { postText } = req.body;
  let createdPost = await postModel.create({
  });

  let user = await userModel.findOne({ _id: user });
  user.posts.push(createdPost._id);
  await user.save();
});

app.listen(4000, () => {
  console.log('Server is running on port http://localhost:4000');
});
