const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const otherRouter = require('./routes/other');
const authRouter = require('./routes/auth');
const authMiddleware = require('./middlewares/auth');
const errors = require('./middlewares/errors');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(express.urlencoded());
app.use(express.json());

app.use(authRouter);

app.use(authMiddleware);
app.use(userRouter);
app.use(cardRouter);
app.use(otherRouter);

app.use(errors);

app.listen(PORT);
