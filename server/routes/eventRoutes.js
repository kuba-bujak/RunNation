const express = require('express');
const { getEvents, createEvent, getEvent, editEvent, deleteEvent } = require('../controller/eventController');

const router = express.Router();

router.get('/', getEvents);

router.post('/new', createEvent);

router.get('/:id', getEvent);

router.put('/:id/edit', editEvent);

router.delete('/:id', deleteEvent);

module.exports = router;