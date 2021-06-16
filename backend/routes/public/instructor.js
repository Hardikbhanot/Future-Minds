const mongoose = require('mongoose');
const router = require('express').Router();
const Instructor = require('../../models/InstructorModel');
const {
  registerValidation,
  loginValidation
} = require('../../validation/instructorValidation');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'instructor route' });
});

router.post('/login', async (req, res) => {
  // Validate login data
  const { error } = loginValidation(req.body);
  // if (error)
  //   return res
  //     .status(400)
  //     .json({ error: { message: error.details[0].message } });
  if (error) return res.status(400).json(error);

  const instructorEmail = req.body.email;
  const instructorPassword = req.body.password;

  try {
    const loginInstructor = await Instructor.findOne({
      email: instructorEmail
    });
    if (!loginInstructor)
      return res
        .status(400)
        .json({ error: { message: "Email doesn't exist. Please register" } });
    if (loginInstructor.password !== instructorPassword)
      return res
        .status(400)
        .json({ error: { message: 'Email or password is incorrect' } });
    res.status(200).json(loginInstructor);
  } catch (error) {
    console.log('Error in logging instructor ' + error.message);
    res.status(500).json({ error: { message: error.message } });
  }
});

router.post('/register', async (req, res) => {
  // Validate register data
  const { error } = registerValidation(req.body);
  if (error)
    return res
      .status(400)
      .json({ error: { message: error.details[0].message } });

  // Check if email exist
  const emailToBeChecked = req.body.email;
  const emailExist = await Instructor.findOne({ email: emailToBeChecked });
  if (emailExist)
    return res.status(208).json({
      error: { message: 'Email already registered' }
    });

  // creates a new user
  const newInstructor = new Instructor({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    mobileNumber: req.body.mobileNumber
  });

  // save a new user
  try {
    const savedInstructor = await newInstructor.save();
    res.status(200).json(savedInstructor);
  } catch (error) {
    console.log('Error in registering instructor ' + error.message);
    res.status(500).json({ error: { message: error.message } });
  }
});

module.exports = router;
