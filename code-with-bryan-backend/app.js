const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const appointmentsRoutes = require('./routes/appointments');
const emailRoutes = require('./routes/emails');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});

app.use('/api', appointmentsRoutes);
// app.use("/email", emailRoutes);

// app.use((req, res, next) => {
//     return res.status(404).json({ message: "could not find this page" });
// });

// app.use((error, req, res, next) => {
//     res.status(error.code || 500);
//     res.json({ message: error.message || 'An unknown error occurred!' });
// });

mongoose
    .connect(
        `mongodb+srv://bryanba02:oaCU0KA9H4DpxeCg@codewithbryan.qk8q8yw.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });
