const mongoose = require('mongoose')

const agentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true }, // You can hash it later
}, { timestamps: true })

module.exports = mongoose.model('Agent', agentSchema)
