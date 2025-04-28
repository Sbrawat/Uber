const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDB = require('./db/db');

connectToDB();

app.use(cors());

console.log(process.env.PORT);

app.get('/', (req, res) => {
    res.send('hello');
})

module.exports = app;