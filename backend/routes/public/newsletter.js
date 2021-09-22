const mongoose = require('mongoose');
const router = require('express').Router();
const Newsletter = require('../../models/NewsletterModel');
const {
  newsletterValidation
} = require('../../validation/newsletterValidation');
const logger = require('../../../logger/index');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Newsletter Routes' });
});

router.post('/', async (req, res) => {
  const email = req.body.email;
  // Validate stepDegree user register data
  const { error } = newsletterValidation({
    email
  });
  if (error)
    return res
      .status(400)
      .json({ error: { message: error.details[0].message } });

  // check if email exist
  const emailExist = await Newsletter.findOne({ email: email });
  if (emailExist)
    // if email exist then don't save again
    return res.status(208).json({
      error: { message: 'Email already registered' }
    });

  const newEmail = new Newsletter({
    _id: new mongoose.Types.ObjectId(),
    email: email
  });
  try {
    const savedEmail = await newEmail.save();
    const response = {
      email: savedEmail.email
    };
    res.status(200).json(response);
  } catch (error) {
    logger.error('Error in newsletter ' + error.message);
    res.status(500).json({ error: { message: error.message } });
  }
});

module.exports = router;
