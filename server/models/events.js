const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: String,
    location: String,
    date: Date,
    description: String,
    image: String
});

module.exports = mongoose.model('Event', EventSchema);