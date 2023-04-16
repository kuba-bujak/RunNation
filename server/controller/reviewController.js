const asyncHandler = require('express-async-handler');
const Review = require('../models/review');
const Event = require('../models/events');

const getReviews = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const event = await Event.findById(id);
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
    const review = new Review({comment});
    review.author = req.user.id;
    event.reviews.push(review);
    const updatedEvent = await event.save();
    const createdReview = await review.save();
    const displayCreatedReview = await Review.findById(createdReview._id)
    .populate({
        path: 'author',
    })
    if (updatedEvent && createdReview && displayCreatedReview) {
        res.status(200).json(displayCreatedReview);
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
        res.status(200).json(updatedReview);
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