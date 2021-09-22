const mongoose = require('mongoose');
const router = require('express').Router();
const StepDegree = require('../../models/StepDegreeModel');
const {
  stepDegreeValidation
} = require('../../validation/stepDegreeValidation');
const logger = require('../../../logger/index');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to StepDegree Routes' });
});

router.post('/', async (req, res) => {
  const name = req.body.name;
  const city = req.body.city;
  const contactNumber = req.body.contactNumber;
  const email = req.body.email;
  const promo = req.body.promo;

  // Validate stepDegree user register data
  const { error } = stepDegreeValidation({
    name,
    city,
    contactNumber,
    email,
    promo
  });
  if (error)
    return res
      .status(400)
      .json({ error: { message: error.details[0].message } });

  // check if email exist
  const emailExist = await StepDegree.findOne({ email: email });
  if (emailExist)
    // if email exist then don't save again
    return res.status(208).json({
      error: { message: 'Email already registered' }
    });
  // check if contactNumber exist
  const contactNumberExist = await StepDegree.findOne({
    contactNumber: contactNumber
  });
  if (contactNumberExist)
    // if email exist then don't save again
    return res.status(208).json({
      error: { message: 'Contact Number already registered' }
    });

  const newStepDegreeUser = new StepDegree({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    city: city,
    contactNumber: contactNumber,
    email: email,
    promo: promo
  });
  try {
    const savedStepDegreeUser = await newStepDegreeUser.save();
    const response = {
      name: savedStepDegreeUser.name,
      city: savedStepDegreeUser.city,
      contactNumber: savedStepDegreeUser.contactNumber,
      email: savedStepDegreeUser.email
    };
    res.status(200).json(response);
  } catch (error) {
    logger.error('Error in registering StepDegree User' + error.message);
    res.status(500).json({ error: { message: error.message } });
  }
});

module.exports = router;
