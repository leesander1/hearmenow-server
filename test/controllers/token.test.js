const request = require('supertest');
const app = require('../server.js');

describe('token', function() {
    describe('generateTwilioToken()', () => {
        it('should return send 200 response', (done) => {
            request(app)
              .get('/api/generateToken')
              .expect(200, done);
        });

        it('should return a token', (done) => {
            var blah = request(app).get('/api/generateToken');
            console.log(blah);
        });
    });
});
