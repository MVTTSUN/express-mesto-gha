const router = require('express').Router();
const UnauthorizedError = require('../errors/unauthorizedError');

router.use('*', (req, res, next) => {
  next(new UnauthorizedError('Передан некорректный путь'));
});

module.exports = router;
