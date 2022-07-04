var nodemailer = require("nodemailer");

const sendMail = async (tot, id) => {
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
    subject: "Sending Email using Node.js",
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


module.exports = {sendMail}