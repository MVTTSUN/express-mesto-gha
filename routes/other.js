const router = require('express').Router();
const { codesError } = require('../const');

router.use('*', (req, res) => {
  res
    .status(codesError.INCORRECT_DATA)
    .send({ message: 'Передан некорректный путь' });
});

module.exports = router;
