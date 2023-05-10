const mongoose = require('mongoose');
const Events = require('../models/events');
const events = require('./events');
const courses = require('./courses');
const Courses = require('../models/courses');
require('dotenv').config();

mongoose.set('strictQuery', true);

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
	useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Database connected');
});

const seedDB = async () => {
    await Events.deleteMany({});
    await Courses.deleteMany({});

    for (let i = 0; i < events.length; i++) {
        const event = new Events({
            title: events[i].title,
            location: events[i].location,
            date: new Date(events[i].date),
            description: events[i].description,
            image: events[i].image,
            rating: events[i].rating
        });
        await event.save();
    }

    for (let i = 0; i < courses.length; i++) {
        const course = new Courses({
            title: courses[i].title,
            dateFrom: new Date(courses[i].dateFrom),
            dateTo: new Date(courses[i].dateTo),
            hoursFrom: courses[i].hoursFrom,
            hoursTo: courses[i].hoursTo,
            language: courses[i].language,
            level: courses[i].level,
            location: courses[i].location,
            coach: courses[i].coach,
            img: courses[i].img,
        });
        await course.save();
    }
}

seedDB().then(() => {
	mongoose.connection.close();
})  