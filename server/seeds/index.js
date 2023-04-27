const mongoose = require('mongoose');
const Events = require('../models/events');
const events = require('./events');
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
}

seedDB().then(() => {
	mongoose.connection.close();
})  