const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.post('/api/reviews/new', async (req, res) => {
    res.json({ message: 'Review created' });
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});