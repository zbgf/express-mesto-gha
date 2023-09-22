const router = require('express').Router();
const {
  getCards,
  createCard,
  deleteCard,
  addLike,
  deleteLike,
} = require('../controllers/cards');
const { validationCard, validationId } = require('../utils/validation');

router.get('/cards', getCards);
router.post('/cards', validationCard, createCard);
router.delete('/cards/:cardId', validationId, deleteCard);
router.put('/cards/:cardId/likes', validationId, addLike);
router.delete('/cards/:cardId/likes', validationId, deleteLike);

module.exports = router;
