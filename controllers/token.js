'use strict';

const express = require('express');
const twilio = require('twilio');


/*POST /token/generate
this will create the twilio token for the users and give them capabilities*/
exports.generateTwilioToken = (req, res) => {
    var capability = new twilio.Capability(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

    // allows users to make outgoing calls
    capability.allowClientOutgoing(process.env.TWILIO_APP_SID);

    // allows user to receive incoming calls
    capability.allowClientIncoming("hearmewnow_client");

    var token = capability.generate();
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify({token:token}));
};
