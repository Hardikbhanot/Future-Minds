const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  courseName: { type: String, required: true, min: 3, max: 255 },
  coursePrice: { type: Number, required: true },
  courseImage: { type: String, required: true },
  courseBy: {
    type: {
      instructorId: { type: mongoose.Schema.Types.ObjectId },
      instructorName: { type: String }
    },
    required: true
  },
  courseLevel: { type: String, required: true },
  courseDuration: { type: Number, required: true },
  courseMode: { type: String, required: true },
  courseCategory: { type: [String], required: true },
  tags: { type: [String], required: true },
  description: { type: String, required: true },
  topicsOfCourse: {
    type: [
      {
        chapterName: String,
        topics: [String]
      }
    ],
    required: true
  },
  ratings: { type: Number, default: 0 },
  totalEnrolledStudents: { type: Number, default: 0 },
  requirements: { type: [String], required: true },
  lastUpdated: { type: Date },
  dateAdded: { type: Date, required: true },
  isTrending: { type: Boolean, default: false }
});

module.exports = mongoose.model('courses', courseSchema);
