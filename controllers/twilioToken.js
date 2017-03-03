var express = require('express');
var router = express.Router();
var twilio = require('twilio');

// - Will generate the a token
router.post('/generate', function(req, res) {
    var capability = new twilio.capability(process.env.TWILIO_ACOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    // - Allows users to make outgoing calls
    capability.allowClientOutgoing(process.env.TWILIO_ACOUNT_SID);

    // - Need to add more capabilities for internal calls

    var token = capability.generate();
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify({token:token}));
});

module.exports = router;
