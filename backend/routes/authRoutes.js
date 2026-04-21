const express = require('express');
const router = express.Router();
const { registerUser, authUser, updateUserProfile } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', authUser);
router.put('/profile/:id', updateUserProfile);

module.exports = router;
