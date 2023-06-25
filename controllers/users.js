const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({}).then((users) => res.send({ data: users }));
};

const getUser = (req, res) => {
  User.findById(req.params.userId).then((user) => res.send({ data: user }));
};

const postUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar }).then((user) => res.send({ data: user }));
};

const patchUser = (req, res, data) => {
  User.findByIdAndUpdate(req.user._id, data).then((user) => {
    res.send({ data: user });
  });
};

const patchUserProfile = (req, res) => {
  const { name, about } = req.body;

  patchUser(req, res, { name, about });
};

const patchUserAvatar = (req, res) => {
  const { avatar } = req.body;

  patchUser(req, res, { avatar });
};

module.exports = {
  getUsers,
  getUser,
  postUser,
  patchUserProfile,
  patchUserAvatar,
};
