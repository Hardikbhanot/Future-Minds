const Joi = require('joi');

const stepDegreeValidation = (data) => {
  const stepDegreeSchema = Joi.object({
    name: Joi.string().min(3).required(),
    city: Joi.string().min(3).required(),
    contactNumber: Joi.number().min(10).required(),
    email: Joi.string().min(6).required(),
    promo: Joi.boolean().required()
  });
  return stepDegreeSchema.validate(data);
};

module.exports.stepDegreeValidation = stepDegreeValidation;
