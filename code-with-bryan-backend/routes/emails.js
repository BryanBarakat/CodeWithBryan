const express = require("express");
const { check } = require('express-validator');

const router = express.Router();

const emailsController = require("../controllers/emails");

router.post("/", [check("fullName").not().isEmpty(), check("subject").not().isEmpty(), check("message").not().isEmpty()], emailsController.createEmails);

module.exports = router;