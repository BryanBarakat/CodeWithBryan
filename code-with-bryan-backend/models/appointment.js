const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    fullName: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    place: { type: String, required: true },
    subject: { type: String, required: true },
    numOfPeople: { type: Number, required: true },
    message: { type: String, required: false },
    email: { type: String, required: true },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
