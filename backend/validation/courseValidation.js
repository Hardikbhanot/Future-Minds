const Joi = require('joi');

const courseAddValidation = (data) => {
  const courseAddSchema = Joi.object({
    courseName: Joi.string().min(3).required(),
    coursePrice: Joi.number().required(),
    courseImage: Joi.string().required(),
    courseBy: Joi.string().min(6).required(), //
    courseLevel: Joi.string().required(),
    courseCategory: Joi.array().items(Joi.string()),
    courseDuration: Joi.number().required(),
    smallDescription: Joi.string().min(5).required(),
    largeDescription: Joi.string().min(10).required(),
    whatWillYouLearnDisp: Joi.array().items(Joi.string()),
    topicsOfCourse: Joi.array()
      .items(
        Joi.object({
          topicName: Joi.string().required(),
          topics: Joi.array().items(Joi.string()).required()
        })
      )
      .required(),
    requirements: Joi.array().items(Joi.string()),
    tags: Joi.array().items(Joi.string()),
    targetAudience: Joi.array().items(Joi.string())
  });

  return courseAddSchema.validate(data);
};

module.exports.courseAddValidation = courseAddValidation;
