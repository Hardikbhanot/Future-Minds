const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  courseName: { type: String, required: true, min: 3, max: 255 },
  coursePrice: { type: Number, required: true },
  courseImage: { type: String, required: true },
  courseBy: {
    type: [
      {
        instructorId: mongoose.Schema.Types.ObjectId,
        instructorName: String
      }
    ],
    required: true
  },
  courseLevel: { type: [String], required: true },
  courseCategory: { type: [String], required: true },
  courseDuration: { type: Number, required: true },
  totalEnrolledStudents: { type: Number, required: true },
  lastUpdated: { type: Date },
  dateAdded: { type: Date, default: Date.now },
  smallDiscription: { type: String, required: true },
  largeDiscription: { type: String, required: true },
  whatWillILearnDisp: { type: [String], required: true },
  topicsOfCourse: {
    type: [
      {
        topicName: String,
        topics: [Stirng]
      }
    ],
    required: true
  },
  ratings: { type: Number },
  requriments: { type: String, required: true },
  tags: { type: [String], required: true },
  targetAudience: { type: [string], required: true }
});

module.exports = mongoose.model('courses', courseSchema);
