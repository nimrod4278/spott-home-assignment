const mongoose = require('mongoose');


// CONNECT TO DB
mongoose.connect(
    process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
        console.log("Database connected")
    },
    error => {
        console.log("Database could't be connected to: " + error)
    }
);