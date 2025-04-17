const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// ✅ Don't call the functions — just reference them
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
