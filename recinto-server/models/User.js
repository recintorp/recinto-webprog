/* eslint-disable no-undef */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: String, default: 'Not specified' },
  gender: { type: String, default: 'Not specified' },
  contactNumber: { type: String, default: 'Not specified' },
  email: { type: String, required: true, unique: true },
  type: { type: String, enum: ['admin', 'editor', 'viewer'], default: 'editor' },
  username: { type: String, required: true, unique: true }, 
  password: { type: String, required: true },
  address: { type: String, default: 'Not specified' },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);