const express = require('express');
const router = express.Router({ mergeParams: true });
const reviews = require('../controller/reviewController');
const validateToken = require('../middleware/validateTokenHandler');

router.get('/', reviews.getReviews);
router.post('/', validateToken, reviews.createReview);
router.put('/:reviewId/edit', validateToken, reviews.editReview);
router.delete('/:reviewId', validateToken, reviews.deleteReview);

module.exports = router;