const asyncHandler = require('express-async-handler');
const Events = require('../models/events');

const getEvents = asyncHandler(async (req, res) => {
    const events = await Events.find({});
    res.status(200).json(events);
})

const createEvent = asyncHandler(async (req, res) => {
    const { title, location, description, date, rating, image } = req.body;
    if (!title || !location || !description || !date || !rating || !image) {
        res.status(400);
        throw new Error("Wszystkie pola są wymagane");
    }
    const event = await Events.create({
        title,
        location,
        description,
        date,
        rating,
        image
    });
    
    if (event) {
        res.status(201).json(event);
    } else {
        res.status(400);
        throw new Error("Pola wydarzenia nie są poprawne")
    }

    res.json({ message: "Utworzono wydarzenie" })
});

const displayNewForm = (req, res) => {
    res.status(200).json({ message: 'Stworzono formularz' });
}

const displayEditForm = (req, res) => {
    res.status(200).json({ message: 'Stworzono formularz' });
}

const getEvent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const event = await Events.findById(id);
    if (event) {
        res.status(200).json(event);
    } else {
        res.status(404);
        throw new Error("Nie znaleziono wydarzenia");
    }
})

const editEvent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, location, description, date, rating, image } = req.body;

    if (!title || !location || !description || !date || !rating || !image) {
        res.status(400);
        throw new Error("Wszystkie pola są wymagane");
    }

    const updatedEvent = await Events.findByIdAndUpdate(id, {
        title,
        location,
        description,
        date,
        rating,
        image
    });
    if (updatedEvent) {
        res.status(200).json(updatedEvent);
    } else {
        res.status(400);
        throw new Error("Pola wydarzenia nie są poprawne");
    }

    res.json({ message: "Edytowano wydarzenie" });
})

const deleteEvent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedEvent = await Events.findByIdAndDelete(id);

    if (deletedEvent) {
        res.status(200).json(deletedEvent);
    } else {
        res.status(400);
        throw new Error("Nie usunięto wydadrzenia");
    }

    res.json({ message: "Usunięto wydarzenie" });

})

module.exports = { getEvents, createEvent, getEvent, editEvent, deleteEvent, displayEditForm, displayNewForm };