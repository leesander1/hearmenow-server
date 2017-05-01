'use strict';

const express = require('express');
const twilio = require('twilio');

exports.connectCall = (req, res) => {
    var phoneNumber = req.body.phoneNumber;
    var callerId = process.env.TWILIO_PHONE_NUMBER;
    var twiml = new twilio.TwimlResponse();

    // function to dial the phonenumber that was sent over from the client-side
    var numberDialer = function(dial) {
        dial.number(phoneNumber);
    }

    var hearmenowDialer = function(dial) {
      dial.client("hearmewnow_client");
    }

    // if a phonenumber was sent over with the request, dial the phonenumber
    if (phoneNumber != null) {
      twiml.dial({callerId: callerId}, numberDialer);
    }
    else {
      console.log("Incoming call for the hearmewnow_client", req);
      twiml.dial({callerId: 4323498373}, hearmenowDialer);
    }


    res.send(twiml.toString());
};
