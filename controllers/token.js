'use strict';

const express = require('express');
const twilio = require('twilio');


/*POST /token/generate
this will create the twilio token for the users and give them capabilities*/
exports.generateTwilioToken = (req, res) => {
    var capability = new twilio.capability(process.env.TWILIO_ACOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    // allows users to make outgoing calls
    capability.allowClientOutgoing(process.env.TWILIO_ACOUNT_SID);

    // need to add more capabilities for internal calls

    var token = capability.generate();
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify({token:token}));
};
