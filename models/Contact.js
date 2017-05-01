/**
 * Contact Schema
 */
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  updated_at: { type: Date, default: Date.now },
  name: {
    first: String,
    middle: String,
    last: String
  },
  phone: String,
  company: String,
  bio: String,
  picture: String,
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
