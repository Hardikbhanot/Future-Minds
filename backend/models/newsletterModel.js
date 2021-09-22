const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, trim: true, required: true, min: 6, max: 255 }
});

module.exports = mongoose.model('newsletter', newsletterSchema);
