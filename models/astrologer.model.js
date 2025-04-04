const mongoose = require('mongoose');
const astrologerSchema = new mongoose.Schema({
  phone: String,
  email: String,
  name: String,
  languages: [String],
  emailVerified: Boolean,
  phoneVerified: Boolean,
  userType: String,
  createdAt: Date,
  updatedAt: Date,
  aboutSelf: String,
  address: Object,
  dob: Date,
  documents: {
    identity: {
      aadhar: String,
      pan: String
    }
  },
  gender: String,
  maritalStatus: String,
  profileImage: String,
  skills_experience: {
    professional: {
      highest_qualification: String,
      experience_years: Number,
      skills: [String],
      daily_contribution_hours: Number
    },
    additional: {
      income_source: String,
      social_links: {
        instagram: String
      }
    }
  },
  serviceIds: [String],
  profileCompletedAt: Date
});
module.exports = mongoose.model('Astrologer', astrologerSchema);
