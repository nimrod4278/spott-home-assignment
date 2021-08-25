const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRouter = require('./routes/api');

require("dotenv").config();

mongoose.set('useFindAndModify', false);

mongoose.connect(
    process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
        console.log("Database connected");
    },
    error => {
        console.log("Database could't be connected to: " + error);
    }
);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/', apiRouter)

module.exports = app;