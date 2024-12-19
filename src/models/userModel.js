const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Optional: Ensure unique email addresses
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create and export user model
module.exports = mongoose.model('User', userSchema);
