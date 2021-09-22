const Joi = require('joi');

const newsletterValidation = (data) => {
  const newsletterSchema = Joi.object({
    email: Joi.string().min(6).required()
  });
  return newsletterSchema.validate(data);
};

module.exports.newsletterValidation = newsletterValidation;
