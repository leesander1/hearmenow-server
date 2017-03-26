const request = require('supertest');
const app = require('../server.js');
const chai = require('chai');
const chaiXml = require('chai-xml');
const should = chai.should();
const expect = chai.expect();

describe('POST /connectCall', () => {
    it('Should respond with 200', (done) => {
        request(app)
          .post('/api/connectCall')
          .expect(200, done);
    });
});
