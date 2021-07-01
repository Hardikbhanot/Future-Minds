const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  courseName: { type: String, required: true, min: 3, max: 255 },
  coursePrice: { type: Number, required: true },
  courseImage: { type: String, required: true },
  courseInclude: { type: [String], required: true },
  courseBy: {
    type: {
      instructorId: { type: mongoose.Schema.Types.ObjectId },
      instructorName: { type: String }
    },
    required: true
  },
  courseLevel: { type: String, required: true },
  courseCategory: { type: [String], required: true },
  courseDuration: { type: Number, required: true },
  totalEnrolledStudents: { type: Number, default: 0 },
  lastUpdated: { type: Date },
  dateAdded: { type: Date, required: true },
  smallDescription: { type: String, required: true },
  largeDescription: { type: String, required: true },
  whatWillYouLearnDesp: { type: [String], required: true },
  topicsOfCourse: {
    type: [
      {
        topicName: String,
        topics: [String]
      }
    ],
    required: true
  },
  ratings: { type: Number, default: 0 },
  requirements: { type: [String], required: true },
  tags: { type: [String], required: true },
  targetAudience: { type: [String], required: true }
});

module.exports = mongoose.model('courses', courseSchema);
