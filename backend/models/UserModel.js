const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: { type: String, trim: true, required: true, min: 3, max: 255 },
  lastName: { type: String, trim: true, min: 3, max: 255 },
  email: { type: String, trim: true, required: true, min: 6, max: 255 },
  password: { type: String, trim: true, required: true, min: 6, max: 255 },
  mobileNumber: { type: Number, trim: true, required: true },
  address: { type: String, trim: true, min: 6, max: 1024 },
  typeOfUser: { type: String, default: 'student' },
  courseAdded: [mongoose.Schema.Types.ObjectId],
  coursePurchased: [mongoose.Schema.Types.ObjectId],
  cart: [mongoose.Schema.Types.ObjectId],
  dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('users', userSchema);
