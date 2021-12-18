// import user model
const { User, Post, Colony } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  async getposts(req, res) {
    const posts = await Post.find({});

    if (!posts) {
      return res.status(400).json({ message: 'Cannot find posts' });
    }

    res.json(posts);
  },

  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find user' });
    }

    res.json(foundUser);
  },
  // create user, sign token, and send back (client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    // console.log(body);
    const user = await User.create(body);
    // console.log(user)
    if (!user) {
      return res.status(400).json({ message: 'User not created' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // login user, sign token, and send back (client/src/components/LoginForm.js)
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  async addPostToUser(req, res) {
    console.log(req)
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { posts: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  }
};
