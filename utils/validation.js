const { celebrate, Joi } = require('celebrate');

const validURL = /^(https?:\/\/)(www\.)?([\w-.~:/?#[\]@!$&')(*+,;=]*\.?)*\.{1}[\w]{2,8}(\/([\w-.~:/?#[\]@!$&')(*+,;=])*)?/;

module.exports.validationUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().regex(validURL),
  }),
});

module.exports.validationProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
});

module.exports.validationAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().regex(validURL),
  }),
});

module.exports.validationId = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().length(24).hex(),
  }),
});

module.exports.validationCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().regex(validURL),
  }),
});

const cardIdJoi = { cardId: Joi.string().length(24).hex().required() };

module.exports.validationDeleteCard = celebrate({
  params: Joi.object().keys(cardIdJoi),
});

module.exports.validationAddLike = celebrate({
  params: Joi.object().keys(cardIdJoi),
});

module.exports.validationDeleteLike = celebrate({
  params: Joi.object().keys(cardIdJoi),
});
