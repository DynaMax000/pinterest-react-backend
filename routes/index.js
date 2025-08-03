const express = require('express');
const router = express.Router();
const userModel = require('../models/User.models.js');
const postModel = require('../models/Post.models.js');

express.use(express.json());
express.use(express.urlencoded({ extended: true }));

express.set('view engine', 'ejs');

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
    postText, user
  });
  
  let user = await userModel.findOne({ _id: user });
  user.posts.push(createdPost._id);
  await user.save();

});



express.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
