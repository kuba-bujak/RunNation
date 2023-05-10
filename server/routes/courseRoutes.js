const express = require('express');
const { getCourses, addUser } = require('../controller/courseController');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

router.get('/', getCourses);

router.post('/:id', validateToken, addUser);

module.exports = router;