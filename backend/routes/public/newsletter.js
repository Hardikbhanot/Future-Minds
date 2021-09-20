const mongoose = require('mongoose');
const router = require('express').Router();
const Newsletter = require('../../models/NewsletterModel');
const logger = require('../../../logger/index');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Newsletter Routes' });
});

router.post('/', async (req, res) => {
  const email = req.body.email;
  logger.info(email);
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
