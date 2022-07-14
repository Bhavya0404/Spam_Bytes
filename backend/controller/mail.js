var nodemailer = require("nodemailer");

const sendMail = async (tot, id, subject) => {
  var transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: "avichal_tripathi@yahoo.com",
      pass: "vwtartydnxaijsvk",
    },
  });

  var mailOptions = {
    from: "avichal_tripathi@yahoo.com",
    to: tot,
    subject: `${subject}`,
    text: `That was easy! Complaint ID ${id}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const sendMailChild = async (tot, id, subject) => {
  var transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: "avichal_tripathi@yahoo.com",
      pass: "vwtartydnxaijsvk",
    },
  });

  var mailOptions = {
    from: "avichal_tripathi@yahoo.com",
    to: tot,
    subject: `${subject}`,
    text: `Another Child was reported, kindly click on the link to accept your help for the child with id ${id}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendMail, sendMailChild };
