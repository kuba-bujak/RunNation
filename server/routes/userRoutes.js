const express = require('express');
const { registerUser, loginUser, currentUser, getProfile, editProfile, changePassword } = require('../controller/userController');
const validateToken = require('../middleware/validateTokenHandler');



const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current', validateToken, currentUser);
router.put('/password-equality', validateToken, changePassword);

router.get('/profile', validateToken, getProfile);
router.put('/edit', validateToken, editProfile);

module.exports = router;