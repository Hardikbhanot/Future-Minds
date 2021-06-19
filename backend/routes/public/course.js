const mongoose = require('mongoose');
const router = require('express').Router();
const Course = require('../../models/CourseModel');
const { courseAddValidation } = require('../../validation/courseValidation');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'course route' });
});

// Get all courses
router.get('/all', (req, res) => {
  Course.find()
    .exec()
    .then((courses) => {
      if (courses && courses.length > 0) {
        const response = {
          count: courses.length,
          data: courses.map((course) => {
            return {
              courseId: course._id,
              courseName: course.courseName,
              coursePrice: course.coursePrice,
              courseImage: course.courseImage,
              courseLevel: course.courseLevel,
              smallDescription: course.smallDescription,
              rating: course.rating
            };
          })
        };
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: { message: 'No course found' } });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: { message: error.message } });
    });
});

// Get a course by ID
router.get('/:courseId', (req, res) => {
  const courseId = req.params.courseId;

  Course.findOne({ _id: courseId })
    .select('-__v -dateAdded')
    .exec()
    .then((course) => {
      if (course) {
        const response = {
          data: {
            courseId: course._id,
            courseName: course.courseName,
            coursePrice: course.coursePrice,
            courseImage: course.courseImage,
            courseInclude: course.courseInclude,
            courseBy: course.courseBy,
            courseLevel: course.courseLevel,
            courseCategory: course.courseCategory,
            courseDuration: course.courseDuration,
            smallDescription: course.smallDescription,
            largeDescription: course.largeDescription,
            whatWillYouLearnDesp: course.whatWillYouLearnDesp,
            topicsOfCourse: course.topicsOfCourse,
            rating: course.rating,
            requirements: course.requirements,
            tags: course.tags,
            targetAudience: course.targetAudience,
            lastUpdated: course.lastUpdated.toLocaleString('en-GB')
          }
        };
        res.status(200).json(response);
      } else {
        res
          .status(404)
          .json({ error: { message: 'No course found for this Id' } });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: { message: error.message } });
    });
});

router.post('/addcourse', async (req, res) => {
  // Validate course data
  const { error } = courseAddValidation(req.body);
  if (error)
    return res
      .status(400)
      .json({ error: { message: error.details[0].message } });

  // create a new course
  const newCourse = new Course({
    _id: new mongoose.Types.ObjectId(),
    courseName: req.body.courseName,
    coursePrice: req.body.coursePrice,
    courseImage: req.body.courseImage,
    courseInclude: req.body.courseInclude,
    courseBy: req.body.courseBy,
    courseLevel: req.body.courseLevel,
    courseCategory: req.body.courseCategory,
    courseDuration: req.body.courseDuration,
    lastUpdated: Date.now(),
    dateAdded: Date.now(),
    smallDescription: req.body.smallDescription,
    largeDescription: req.body.largeDescription,
    whatWillYouLearnDesp: req.body.whatWillYouLearnDesp,
    topicsOfCourse: req.body.topicsOfCourse,
    requirements: req.body.requirements,
    tags: req.body.tags,
    targetAudience: req.body.targetAudience
  });

  // save a new course
  try {
    const savedCourse = await newCourse.save();
    const response = {
      data: {
        courseId: savedCourse._id,
        courseName: savedCourse.courseName,
        coursePrice: savedCourse.coursePrice,
        courseImage: savedCourse.courseImage,
        courseInclude: savedCourse.courseInclude,
        courseBy: savedCourse.courseBy,
        courseLevel: savedCourse.courseLevel,
        courseCategory: savedCourse.courseCategory,
        courseDuration: savedCourse.courseDuration,
        smallDescription: savedCourse.smallDescription,
        largeDescription: savedCourse.largeDescription,
        whatWillYouLearnDesp: savedCourse.whatWillYouLearnDesp,
        topicsOfCourse: savedCourse.topicsOfCourse,
        rating: savedCourse.rating,
        requirements: savedCourse.requirements,
        tags: savedCourse.tags,
        targetAudience: savedCourse.targetAudience,
        lastUpdated: savedCourse.lastUpdated.toLocaleString('en-GB')
      }
    };
    res.status(200).json(response);
  } catch (error) {
    console.log('Error in adding course ' + error.message);
    res.status(500).json({ error: { message: error.message } });
  }
});

module.exports = router;
