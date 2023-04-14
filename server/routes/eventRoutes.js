const express = require('express');
const { getEvents, createEvent, getEvent, editEvent, deleteEvent, displayEditForm, displayNewForm } = require('../controller/eventController');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

router.get('/', getEvents);

router.get('/new', validateToken, displayNewForm);
router.post('/', validateToken, createEvent);

router.get('/:id', getEvent);

router.get('/:id/edit', validateToken, displayEditForm);
router.put('/:id', validateToken, editEvent);

router.delete('/:id', validateToken, deleteEvent);

module.exports = router;