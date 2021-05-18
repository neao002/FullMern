const PostUser = require("../models/userModels");

exports.getUsers = async (req, res) => {
  try {
    const postUser = await PostUser.find();
    console.log(postUser);
    res.status(200).json(postUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const userPost = req.body;

  const newPost = new PostUser(userPost);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = createUser;
