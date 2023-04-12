const express = require('express');
const app = express();
const Events = require('./models/events');
const passport = require('passport');
const LocalStartegy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./models/user');
const session = require('express-session');
const flash = require('connect-flash');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://0.0.0.0:27017/projekt-kierunkowy-2', {
    useNewUrlParser: true,
	useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Database connected');
});

app.get('/api/events', async (req, res) => {
    const events = await Events.find({});
    res.json(events);
})

app.post('/api/events/new', async (req, res) => {
    const data = req.body;
    const event = new Events(data);
    await event.save();
})

app.get('/api/events/:id', async (req, res) => {
    const { id } = req.params;
    const event = await Events.findById(id);
    res.json(event);
})

app.put('/api/events/:id/edit', async (req, res) => {
    const{ id } = req.params;
    const updatedEvent = await Events.findByIdAndUpdate(id, req.body);
    res.json(updatedEvent);
})

app.delete('/api/events/:id', async (req, res) => {
    const { id } = req.params;
    await Events.findByIdAndDelete(id);
    res.json({ success: true });
})

app.use('/api/users', require('./routes/userRoutes'));

app.post('/api/reviews/new', async (req, res) => {
    res.json({ message: 'Review created' });
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});