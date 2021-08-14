const mongoose = require('mongoose');
const router = require('express').Router();
const Course = require('../../models/CourseModel');
const { courseAddValidation } = require('../../validation/courseValidation');
const logger = require('../../../logger/index');

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
              courseImage: course.courseImage,
              courseCategory: course.courseCategory,
              courseDuration: course.courseDuration,
              courseLevel: course.courseLevel,
              courseMode: course.courseMode,
              isTrending: course.isTrending
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
            courseBy: course.courseBy,
            courseLevel: course.courseLevel,
            courseDuration: course.courseDuration,
            courseMode: course.courseMode,
            courseCategory: course.courseCategory,
            tags: course.tags,
            description: course.description,
            topicsOfCourse: course.topicsOfCourse,
            rating: course.rating,
            requirements: course.requirements,
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

// Add a course
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
    courseBy: req.body.courseBy,
    courseLevel: req.body.courseLevel,
    courseDuration: req.body.courseDuration,
    courseMode: req.body.courseMode,
    courseCategory: req.body.courseCategory,
    tags: req.body.tags,
    description: req.body.description,
    topicsOfCourse: req.body.topicsOfCourse,
    requirements: req.body.requirements,
    lastUpdated: Date.now(),
    dateAdded: Date.now()
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
        courseBy: savedCourse.courseBy,
        courseLevel: savedCourse.courseLevel,
        courseDuration: savedCourse.courseDuration,
        courseMode: savedCourse.courseMode,
        courseCategory: savedCourse.courseCategory,
        tags: savedCourse.tags,
        description: savedCourse.description,
        topicsOfCourse: savedCourse.topicsOfCourse,
        rating: savedCourse.rating,
        requirements: savedCourse.requirements,
        lastUpdated: savedCourse.lastUpdated.toLocaleString('en-GB')
      }
    };
    res.status(200).json(response);
  } catch (error) {
    logger.error('Error in adding course ' + error.message);
    res.status(500).json({ error: { message: error.message } });
  }
});

router.patch('/updatecourse/:courseId', (req, res) => {
  const courseId = req.params.courseId;
  Course.find({ _id: courseId }, (err, course) => {
    if (err) {
      logger.log(
        'Error in finding a course in path route of course ' + err.message
      );
      res.status(500).json({ error: { message: err.message } });
    } else {
      //! check instructor ID (courseBy/instructorId) of this course for further validation
      //! and only allow change if login user ID macthes the course instuctor ID
      // Send patch request as
      // {
      //		key1: value1,
      //		key2: value2,
      // }
      const updateProps = {};
      for (const [key, value] of Object.entries(req.body)) {
        updateProps[key] = value;
      }
      updateProps['lastUpdated'] = Date.now();
      Course.findOneAndUpdate({ _id: courseId }, updateProps, {
        new: true
      })
        .select('-__v -dateAdded')
        .exec()
        .then((updateCourse) => {
          const response = {
            data: {
              courseId: updateCourse._id,
              courseName: updateCourse.courseName,
              coursePrice: updateCourse.coursePrice,
              courseImage: updateCourse.courseImage,
              courseBy: updateCourse.courseBy,
              courseLevel: updateCourse.courseLevel,
              courseDuration: updateCourse.courseDuration,
              courseMode: updateCourse.courseMode,
              courseCategory: updateCourse.courseCategory,
              tags: updateCourse.tags,
              description: updateCourse.description,
              topicsOfCourse: updateCourse.topicsOfCourse,
              rating: updateCourse.rating,
              requirements: updateCourse.requirements,
              lastUpdated: updateCourse.lastUpdated.toLocaleString('en-GB')
            }
          };
          res.status(200).json(response);
        })
        .catch((err) => {
          logger.log(
            'Error in updating a course patch route of course ' + err.message
          );
          res.status(500).json({ error: { message: err.message } });
        });
    }
  });
});

module.exports = router;
