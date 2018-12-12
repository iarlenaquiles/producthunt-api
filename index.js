const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const app = express();

mongoose.connect('mongodb://localhost:27017/producthunt', { useNewUrlParser: true });

requireDir('./models');

const Product = mongoose.model('Product');

app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'teste',
        url: 'www.react.com'
    });
    res.send('Hello api');
});

app.listen(2900);