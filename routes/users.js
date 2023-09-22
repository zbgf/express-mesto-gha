const router = require('express').Router();
const {
  getUsers,
  getUserById,
  updateProfile,
  updateAvatar,
  getUserInfoById,
} = require('../controllers/users');
const { validationProfile, validationId, validationAvatar } = require('../utils/validation');

router.get('/users', getUsers);
router.get('/users/:id', validationId, getUserById);
router.patch('/users/me', validationProfile, updateProfile);
router.patch('/users/me/avatar', validationAvatar, updateAvatar);
router.get('/users/me', getUserInfoById);

module.exports = router;
