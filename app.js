const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const otherRouter = require('./routes/other');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(express.urlencoded());
app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: '6498453ec45919b7c4fa9c12',
  };

  next();
});
app.use(userRouter);
app.use(cardRouter);
app.use(otherRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
