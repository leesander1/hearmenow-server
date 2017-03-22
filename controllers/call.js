'use strict';

const express = require('express');
const twilio = require('twilio');

exports.connectCall = (req, res) => {
    var phoneNumber = req.body.phoneNumber;
    var callerId = process.env.TWILIO_PHONE_NUMBER;
    var twiml = new twilio.TwilmlResponse();

    // function to dial the phonenumber that was sent over from the client-side
    var numberDialer = function(dial) {
        dial.number(phoneNumber);
    }

    var clientDialer = function(dial) {
        dial.client("client");
    }

    // if a phonenumber was sent over with the request, dial the phonenumber
    if (phoneNumber != null) {
      twiml.dial({callerId: callerId}, numberDialer);
    }else {
      twiml.dial({callerId: callerId}, clientDialer);
    }


    res.send(twiml.toString());
};
