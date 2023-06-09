const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const CourseSchema = new Schema({
    title: String,
    dateFrom: String,
    dateTo: Date,
	 hoursFrom: String,
	 hoursTo: String,
	 language: String,
	 level: String,
	 location: String,
	 coach: String,
	 img: String,
	 users: [
		{
			 type: Schema.Types.ObjectId,
			 ref: 'User'
		}
  ]
});


module.exports = mongoose.model('Course', CourseSchema);