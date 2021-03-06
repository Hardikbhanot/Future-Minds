const Joi = require('joi');

const registerValidation = (data) => {
  const registerSchema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3),
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).required(),
    mobileNumber: Joi.number().required(),
    typeOfUser: Joi.string()
  });

  return registerSchema.validate(data);
};

const loginValidation = (data) => {
  const loginSchema = Joi.object({
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).required()
  });

  return loginSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
