const request = require('supertest');
const app = require('../server.js');
const chai = require('chai');
const should = chai.should();

describe('POST /generateToken', () => {
    it('should return send 200 response', (done) => {
        request(app)
            .post('/api/generateToken')
            .expect(200, done);
    });

    it('should return a token', (done) => {
        request(app)
            .post('/api/generateToken')
            .end((err, res) => {
                res.body.should.be.json;
                res.body.should.have.property("token");
                done();
            });
    });
});
