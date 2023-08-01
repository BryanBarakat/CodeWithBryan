const nodemailer = require("nodemailer");

const emailConfig = {
    host: "smtp.gmail.com", // e.g., "smtp.gmail.com"
    port: 587, // e.g., 587
    secure: false,
    auth: {
        user: "itsbryanbarakat@gmail.com",
        pass: "Blanky1122@#$",
    },
};

const transporter = nodemailer.createTransport(emailConfig);


const createEmails = (req, res, next) => {
    const { fullName, subject, message } = req.body;

    const mailOptions = {
        from: "itsbryanbarakat@gmail.com", // Use your email address
        to: "itsbryanbarakat@gmail.com", // Your inbox email address
        subject: subject,
        text: `${fullName} says: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            res.status(500).send("Error sending email");
        } else {
            console.log("Email sent:", info.response);
            res.send("Email sent successfully");
        }
    });
};

exports.createEmails = createEmails;
