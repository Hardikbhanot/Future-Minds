const mongoose = require('mongoose');
const router = require('express').Router();
const Course = require('../../models/CourseModel');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'course route' });
});

router.post('/addcourse', async (req, res) => {
  // Validate course data

  const date = new Date();
  // create a new course
  const newCourse = new Course({
    _id: new mongoose.Types.ObjectId(),
    courseName: req.body.courseName,
    coursePrice: req.body.coursePrice,
    courseImage: req.body.courseImage,
    courseBy: req.body.courseBy,
    courseLevel: req.body.courseLevel,
    courseDuration: req.body.courseDuration,
    lastUpdated: date.toLocaleString('en-GB'),
    dateAdded: date.toLocaleString('en-GB'),
    smallDescription: req.body.smallDiscription,
    largeDescription: req.body.largeDiscription,
    whatWillYouLearnDisp: req.body.whatWillILearnDisp,
    topicsOfCourse: req.body.topicsOfCourse,
    requirements: req.body.requirements,
    tags: req.body.tags,
    targetAudience: req.body.targetAudience
  });

  // save a new course
  try {
    const savedCourse = await newCourse.save();
    res.status(200).json(savedCourse);
  } catch (error) {
    console.log('Error in adding course ' + error.message);
    res.status(500).json({ error: { message: error.message } });
  }
});

module.exports = router;
