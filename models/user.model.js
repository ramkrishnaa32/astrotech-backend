const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  emailVerified: Boolean,
  phoneVerified: Boolean,
  otp: String,
  otpExpiresAt: Date,
  refreshToken: String,
  updatedAt: Date
});
module.exports = mongoose.model('User', userSchema);
