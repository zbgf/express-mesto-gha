const router = require('express').Router();
const {
  getUsers,
  getUserById,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');
const { validationProfile, validationAvatar } = require('../utils/validation');

router.get('/users', getUsers);
router.get('/users/me', getUserById);
router.get('/users/:id', getUserById);
router.patch('/users/me', validationProfile, updateProfile);
router.patch('/users/me/avatar', validationAvatar, updateAvatar);

module.exports = router;
