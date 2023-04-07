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

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});