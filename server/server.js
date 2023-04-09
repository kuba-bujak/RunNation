const express = require('express');
const app = express();
const Events = require('./models/events');

const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

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
    res.send('Created');
})

app.get('/api/events/:id', async (req, res) => {
    const { id } = req.params;
    const event = await Events.findById(id);
    res.json(event);
})

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});