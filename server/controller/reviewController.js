const asyncHandler = require('express-async-handler');
const Review = require('../models/review');
const Event = require('../models/events');

const getReviews = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const reviews = await Review.find({});
    const event = await Event.findById(id);
    console.log(reviews);
    console.log(req.user);
    // res.status(200).json(reviews);
    res.status(200).json(event.reviews);
})

const createReview = asyncHandler(async (req, res) => {
    const { comment } = req.body;
    const { id } = req.params;

    if (!comment) {
        res.status(400);
        throw new Error("Pole komentarza wymagane");

    }
    const event = await Event.findById(id);
    const review = await Review.create({comment});
    review.author = req.user._id;
    event.reviews.push(review);
    const updatedEvent = await event.save();
    const createdReview = await review.save();
    if (updatedEvent && createdReview) {
        res.status(200).json({ message: "Pomyślnie dodano komentarz do bazy danych" });
    } else {
        res.statusMessage(400);
        throw new Error("Pole komentarz nie jest poprawne");
    }
})

const editReview = asyncHandler(async (req, res) =>{
    const { comment } = req.body;
    const { reviewId } = req.params;

    if (!comment) {
        res.status(400);
        throw new Error("Pole komentarza wymagane");
    }

    const updatedReview = await Review.findByIdAndUpdate(reviewId, {
        comment
    });

    if (updatedReview) {
        res.status(200).json({ message: "Pomyślnie zaktualizowano komentarz w bazie danych" });
    } else {
        res.status(400);
        throw new Error("Pole komentarz nie jest poprawne");
    }
})

const deleteReview = asyncHandler(async (req, res) => {
    const { id, reviewId } = req.params;
    const updatedEvent = await Event.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    const updatedReview = await Review.findByIdAndDelete(reviewId);
    if (updatedReview && updatedEvent) {
        res.status(200).json({ message: "Pomyślnie usunięto komentarz" });
    } else {
        res.status(400);
        throw new Error("Nie udało się usunąć komentarza");
    }
})

module.exports = { createReview, deleteReview, getReviews, editReview }