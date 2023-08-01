const express = require("express");
const { check } = require('express-validator');

const router = express.Router();

const appointmentsController = require("../controllers/appointments");

router.post("/", [check("fullName").not().isEmpty(), check("date").not().isEmpty(), check("time").not().isEmpty(), check("place").not().isEmpty(), check("subject").not().isEmpty(), check("numOfPeople").not().isEmpty(), check("emailForm").isEmail().not().isEmpty()], appointmentsController.createAppointments);

module.exports = router;