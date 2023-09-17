const express = require('express');
const mongoose = require('mongoose');

const userRoute = require('./routes/users');
const cardRoute = require('./routes/cards');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use((req, res, next) => {
  req.user = {
    _id: '6507131ba04262e6018bd7a4',
  };

  next();
});

app.use(userRoute);
app.use(cardRoute);

app.use('*', (req, res) => {
  res.status(404).send({ message: 'Страница не сущуствует' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Слушаю порт ${PORT}`);
});
