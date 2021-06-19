const Joi = require('joi');

const courseAddValidation = (data) => {
  const courseAddSchema = Joi.object({
    courseName: Joi.string().min(3).required(),
    coursePrice: Joi.number().required(),
    courseImage: Joi.string().required(),
    courseInclude: Joi.array().items(Joi.string()).required(),
    courseBy: Joi.object({
      instructorId: Joi.string().required(),
      instructorName: Joi.string().required()
    }).required(),
    courseLevel: Joi.string().required(),
    courseCategory: Joi.array().items(Joi.string()).required(),
    courseDuration: Joi.number().required(),
    smallDescription: Joi.string().min(5).required(),
    largeDescription: Joi.string().min(10).required(),
    whatWillYouLearnDesp: Joi.array().items(Joi.string()).required(),
    topicsOfCourse: Joi.array()
      .items(
        Joi.object({
          topicName: Joi.string().required(),
          topics: Joi.array().items(Joi.string()).required()
        })
      )
      .required(),
    requirements: Joi.array().items(Joi.string()).required(),
    tags: Joi.array().items(Joi.string()).required(),
    targetAudience: Joi.array().items(Joi.string()).required()
  });

  return courseAddSchema.validate(data);
};

module.exports.courseAddValidation = courseAddValidation;
