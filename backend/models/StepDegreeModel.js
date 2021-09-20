const mongoose = require('mongoose');

const stepDegreeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, trim: true, required: true, min: 3, max: 255 },
  city: { type: String, trim: true, required: true, min: 3, max: 50 },
  contactNumber: { type: Number, trim: true, required: true, min: 10 },
  email: { type: String, trim: true, required: true, min: 6, max: 255 },
  promo: { type: Boolean, default: true, required: true },
  dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('stepdegree', stepDegreeSchema);
