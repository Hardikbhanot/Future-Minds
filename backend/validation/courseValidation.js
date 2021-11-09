const Joi = require('joi');

const courseAddValidation = (data) => {
  const courseAddSchema = Joi.object({
    courseName: Joi.string().min(3).required(),
    coursePrice: Joi.number().required(),
    courseImage: Joi.string().required(),
    courseBy: Joi.object({
      instructorId: Joi.string().required(),
      instructorName: Joi.string().required()
    }).required(),
    courseLevel: Joi.string().required(),
    courseDuration: Joi.number().required(),
    courseMode: Joi.string().required(),
    courseCategory: Joi.array().items(Joi.string()).required(),
    tags: Joi.array().items(Joi.string()).required(),
    description: Joi.string().min(5).required(),
    topicsOfCourse: Joi.array()
      .items(
        Joi.object({
          chapterName: Joi.string().required(),
          topics: Joi.array().items(Joi.string()).required()
        })
      )
      .required(),
    requirements: Joi.array().items(Joi.string()).required(),
    paymentGateway: Joi.string().required()
  });

  return courseAddSchema.validate(data);
};

module.exports.courseAddValidation = courseAddValidation;
