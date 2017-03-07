const request = require('supertest');
const app = require('../server.js');

describe('token', function() {
    describe('generateTwilioToken()', () => {
        it('should return ', (done) => {
            request(app)
              .get('/api/generateToken')
              .expect(200, done);
        });

    });

});
