/**
 * CallLog Schema
 */
const mongoose = require('mongoose');

const CallLogSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  ended_at: { type: Date, default: Date.now },
  outgoing: String,
  incoming: String,
  call_time: Number
}, { timestamps: true });

const CallLog = mongoose.model('CallLog', CallLogSchema);

module.exports = CallLog;
