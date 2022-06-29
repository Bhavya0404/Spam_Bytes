var nodemailer = require('nodemailer');
 
exports.Mail = async (req, res) => {

    var transporter = nodemailer.createTransport({
      service: 'yahoo',
      auth: {
        user: 'avichal_tripathi@yahoo.com',
        pass: 'vwtartydnxaijsvk'
      }
    });
     
    var mailOptions = {
      from: 'avichal_tripathi@yahoo.com',
      to: 'meenalprakash03@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
     
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

