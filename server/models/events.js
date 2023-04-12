const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review');

const EventSchema = new Schema({
    title: String,
    location: String,
    date: Date,
    description: String,
    image: String,
    rating: Number,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

EventSchema.post('findOneAndDelete', async function (doc) {
	if (doc) {
		await Review.deleteMany({
			_id: {
				$in: doc.reviews
			}
		})
	}
})

module.exports = mongoose.model('Event', EventSchema);