const { celebrate, Joi } = require('celebrate');
const router = require('express').Router();
const {
  getUsers,
  getUser,
  getCurrentUser,
  patchUserProfile,
  patchUserAvatar,
} = require('../controllers/users');
const { LINK_REG_EXP } = require('../const');

router.get('/users', getUsers);
router.get('/users/:userId', getUser);
router.get('/users/me', getCurrentUser);
router.patch(
  '/users/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
    }),
  }),
  patchUserProfile
);
router.patch(
  '/users/me/avatar',
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().regex(LINK_REG_EXP),
    }),
  }),
  patchUserAvatar
);

module.exports = router;
