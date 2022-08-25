var nodemailer = require("nodemailer");
let cron = require("node-cron");

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
    text: `Dear User, Thank you for taking initiative towards a child labour free India.\nYou can track the Complaint using this Complaint ID: ${id}\n\nRegards\nPENCIL Team`,
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
const fifteemdayemail = async (tot, id, subject) => {
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
  cron.schedule("* * 360 * * *", () => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });
};
// const sendMailUser = async (tot, subject) => {
//   var transporter = nodemailer.createTransport({
//     service: "yahoo",
//     auth: {
//       user: "avichal_tripathi@yahoo.com",
//       pass: "vwtartydnxaijsvk",
//     },
//   });

//   var mailOptions = {
//     from: "avichal_tripathi@yahoo.com",
//     to: tot,
//     subject: `${subject}`,
//     text: `Change Password`,
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   });
// };

const sendMailResetPassword = async (tot, subject, body) => {
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
    text: `${body}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};



module.exports = { sendMail, sendMailChild, sendMailResetPassword };

module.exports = {
  sendMail,
  sendMailChild,
  sendMailResetPassword,
  fifteemdayemail,
};
