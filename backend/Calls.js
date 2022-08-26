require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);



  client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+917289912763',
         from: '+12184504609'
       }, function(err, call) {
        if(err) {
          console.log(err);
        }else {
          console.log(call.sid);
        }
       })
      // .then(call => console.log(call.sid));



