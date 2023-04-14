const asyncHandler = require('express-async-handler');
const Review = require('../models/review');
const Event = require('../models/events');

const createReview = asyncHandler(async (req, res) => {
    const { comment } = req.body;
    const event = await Event.findById(req.params.id);
    // const review = new Review(comment);
    console.log(req.user);
    // review.author = req.user._id;
    // event.reviews.push(review);
    // await review.save();
    // await event.save();
})

module.exports = { createReview }