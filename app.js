var twilio = require("twilio");
var express = require("express");

var app = express();

app.get('/receive', function (req, res) {
    res.send('Hi, this is the TwilioBot listening endpoint!');
});

app.listen(process.env.port, function () {
    console.log('TwilioBot listening on port'+process.env.port);
});

var accountSid = 'AC7d2939aeeb3856cc794fb7498a1b7da1';
// Your Account SID from www.twilio.com/console 

var authToken = '9fdfbf7c4b97df16623dbfca6042064d';
// Your Auth Token from www.twilio.com/console

//var client = new twilio.RestClient(accountSid, authToken);


var inspect = require('util').inspect

var client = require('twilio')(accountSid, authToken);
//[JF] The Returned object is a Rest Client and explicit call for Restclient fails...Also new is not accepted

//console.log(inspect(client))


/*client.messages.create({
        body: 'Greetings earthling, this is the SmsBot ;)',
        to: '+18577015501',  // Number that receives the SMS
        from: '+14156502941 ' // Purchased Twilio number that send the SMS
    },
    function(err, message) {
        console.log(message.sid);
    });*/

