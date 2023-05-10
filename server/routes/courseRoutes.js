const express = require('express');
const { getCourses, addUser, createCourse, getCourse, editCourse, deleteCourse } = require('../controller/courseController');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

router.get('/', getCourses);

router.post('/new', validateToken, createCourse);
router.get('/:id', getCourse);
router.put('/:id', editCourse);
router.post('/:id', validateToken, addUser);
router.delete('/:id', validateToken, deleteCourse)

module.exports = router;