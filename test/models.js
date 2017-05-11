const mongoose = require('mongoose');
const {expect} = require('chai');
const sinon = require('sinon');
require('sinon-mongoose');

const User = require('../models/User');
const Contact = require('../models/Contact');

describe('User Model', () => {
  it('should create a new user', (done) => {
    const UserMock = sinon.mock(new User({ email: 'test@gmail.com', password: 'root' }));
    const user = UserMock.object;

    UserMock
      .expects('save')
      .yields(null);

    user.save(function (err, result) {
      UserMock.verify();
      UserMock.restore();
      expect(err).to.be.null;
      done();
    });
  });

  it('should return error if user is not created', (done) => {
    const UserMock = sinon.mock(new User({ email: 'test@gmail.com', password: 'root' }));
    const user = UserMock.object;
    const expectedError = {
      name: 'ValidationError'
    };

    UserMock
      .expects('save')
      .yields(expectedError);

    user.save((err, result) => {
      UserMock.verify();
      UserMock.restore();
      expect(err.name).to.equal('ValidationError');
      expect(result).to.be.undefined;
      done();
    });
  });

  it('should not create a user with the unique email', (done) => {
    const UserMock = sinon.mock(User({ email: 'test@gmail.com', password: 'root' }));
    const user = UserMock.object;
    const expectedError = {
      name: 'MongoError',
      code: 11000
    };

    UserMock
      .expects('save')
      .yields(expectedError);

    user.save((err, result) => {
      UserMock.verify();
      UserMock.restore();
      expect(err.name).to.equal('MongoError');
      expect(err.code).to.equal(11000);
      expect(result).to.be.undefined;
      done();
    });
  });

  it('should find user by email', (done) => {
    const userMock = sinon.mock(User);
    const expectedUser = {
      _id: '5700a128bd97c1341d8fb365',
      email: 'test@gmail.com'
    };

    userMock
      .expects('findOne')
      .withArgs({ email: 'test@gmail.com' })
      .yields(null, expectedUser);

    User.findOne({ email: 'test@gmail.com' }, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(result.email).to.equal('test@gmail.com');
      done();
    })
  });

  it('should remove user by email', (done) => {
    const userMock = sinon.mock(User);
    const expectedResult = {
      nRemoved: 1
    };

    userMock
      .expects('remove')
      .withArgs({ email: 'test@gmail.com' })
      .yields(null, expectedResult);

    User.remove({ email: 'test@gmail.com' }, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(err).to.be.null;
      expect(result.nRemoved).to.equal(1);
      done();
    })
  });
});

describe('Contact Model', () => {
  it('should create a new user', (done) => {
    const ContactMock = sinon.mock(new Contact({ email: 'test@gmail.com', phone: '1112223333' }));
    const contact = ContactMock.object;

    ContactMock
      .expects('save')
      .yields(null);

    contact.save(function (err, result) {
      ContactMock.verify();
      ContactMock.restore();
      expect(err).to.be.null;
      done();
    });
  });

  it('should return error if contact is not created', (done) => {
    const ContactMock = sinon.mock(new Contact({ email: 'test@gmail.com', phone: '1112223333' }));
    const contact = ContactMock.object;
    const expectedError = {
      name: 'ValidationError'
    };

    ContactMock
      .expects('save')
      .yields(expectedError);

    contact.save((err, result) => {
      ContactMock.verify();
      ContactMock.restore();
      expect(err.name).to.equal('ValidationError');
      expect(result).to.be.undefined;
      done();
    });
  });

  it('should not create a contact with the unique email', (done) => {
    const ContactMock = sinon.mock(new Contact({ email: 'test@gmail.com', phone: '1112223333' }));
    const contact = ContactMock.object;
    const expectedError = {
      name: 'MongoError',
      code: 11000
    };

    ContactMock
      .expects('save')
      .yields(expectedError);

    contact.save((err, result) => {
      ContactMock.verify();
      ContactMock.restore();
      expect(err.name).to.equal('MongoError');
      expect(err.code).to.equal(11000);
      expect(result).to.be.undefined;
      done();
    });
  });

  it('should find contact by email', (done) => {
    const contactMock = sinon.mock(Contact);
    const expectedContact = {
      _id: '5700a128bd97c1341d8fb365',
      email: 'test@gmail.com'
    };

    contactMock
      .expects('findOne')
      .withArgs({ email: 'test@gmail.com' })
      .yields(null, expectedContact);

    Contact.findOne({ email: 'test@gmail.com' }, (err, result) => {
      contactMock.verify();
      contactMock.restore();
      expect(result.email).to.equal('test@gmail.com');
      done();
    })
  });

  it('should find contact by phone', (done) => {
    const contactMock = sinon.mock(Contact);
    const expectedContact = {
      _id: '5700a128bd97c1341d8fb365',
      phone: '1112223333'
    };

    contactMock
      .expects('findOne')
      .withArgs({ phone: '1112223333' })
      .yields(null, expectedContact);

    Contact.findOne({ phone: '1112223333' }, (err, result) => {
      contactMock.verify();
      contactMock.restore();
      expect(result.phone).to.equal('1112223333');
      done();
    })
  });

  it('should remove contact by email', (done) => {
    const contactMock = sinon.mock(Contact);
    const expectedResult = {
      nRemoved: 1
    };

    contactMock
      .expects('remove')
      .withArgs({ email: 'test@gmail.com' })
      .yields(null, expectedResult);

    Contact.remove({ email: 'test@gmail.com' }, (err, result) => {
      contactMock.verify();
      contactMock.restore();
      expect(err).to.be.null;
      expect(result.nRemoved).to.equal(1);
      done();
    })
  });
});
