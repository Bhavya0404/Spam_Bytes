const nodemailer = require("nodemailer");
require('dotenv').config();

var transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

exports.sendMail = (to, subject, html) => {
  var mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: to,
    subject: subject,
    html: html,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
      return { success: false }
    } else {
      return { success: true }
    }
  });
};
