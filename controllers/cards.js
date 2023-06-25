const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({}).then((cards) => res.send({ data: cards }));
};

const postCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id }).then((card) => {
    res.send({ data: card });
  });
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId).then((card) => {
    res.send({ data: card });
  });
};

const putLikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  ).then((card) => res.send({ data: card }));
};

const deleteLikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  ).then((card) => res.send({ data: card }));
};

module.exports = {
  getCards,
  postCard,
  deleteCard,
  putLikeCard,
  deleteLikeCard,
};
