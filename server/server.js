const express = require('express');
const app = express();

const mongoose = require('mongoose');

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});