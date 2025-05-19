const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  phone: { type: String, required: true },
  notes: { type: String },
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent' },
});

const Record = mongoose.model('Record', recordSchema);
module.exports = { Record };
