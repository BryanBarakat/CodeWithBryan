const uuid = require('uuid');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Appointment = require('../models/appointment');

const createAppointments = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(res.status(404).json({ message: "Invalid inputs passed or missing inputs, please check your data." }))
    }

    const { fullName, date, time, place, subject, numOfPeople, message, emailForm } = req.body;

    const createdAppointment = new Appointment({
        fullName,
        date,
        time,
        place,
        subject,
        numOfPeople,
        message,
        emailForm
    });

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        createdAppointment.save({ session: sess });
        sess.commitTransaction();
    } catch (err) {
        const error = res.status(500).json({ message: "Creating place failed, please try again." });
        return next(error);
    }
    res.status(201).json({ appointment: createdAppointment });

};

exports.createAppointments = createAppointments;
