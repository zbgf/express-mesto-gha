const express = require('express');
const mongoose = require('mongoose');

const userRoute = require('./routes/users');
const cardRoute = require('./routes/cards');
const { createUser, login } = require('./controllers/users');
const { validationUser } = require('./utils/validation');
const auth = require('./middlewares/auth');
const NotFoundError = require('./utils/notFound');
const error = require('./middlewares/error');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.post('/signin', login);
app.post('/signup', validationUser, createUser);
app.use(auth);

app.use(auth, userRoute);
app.use(auth, cardRoute);

app.use('*', (req, res, next) => next(new NotFoundError('Страница не существует')));

app.use(error);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Слушаю порт ${PORT}`);
});
