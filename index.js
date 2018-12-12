const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/producthunt', { useNewUrlParser: true });

app.get('/', (req, res) => {
    res.send('Hello api');
});

app.listen(2900);