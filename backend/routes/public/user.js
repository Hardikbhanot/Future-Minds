const mongoose = require('mongoose');
const router = require('express').Router();
const User = require('../../models/UserModel');
const {
  registerValidation,
  loginValidation
} = require('../../validation/userValidation');
const logger = require('../../../logger/index');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'user route' });
});

router.post('/login', async (req, res) => {
  // Validate login data
  const { error } = loginValidation(req.body);
  if (error)
    return res
      .status(400)
      .json({ error: { message: error.details[0].message } });
  // if (error) return res.status(400).json(error);

  const userEmail = req.body.email;
  const userPassword = req.body.password;

  try {
    const loginUser = await User.findOne({
      email: userEmail
    });
    if (!loginUser)
      return res
        .status(400)
        .json({ error: { message: "Email doesn't exist. Please register" } });
    if (loginUser.password !== userPassword)
      return res
        .status(400)
        .json({ error: { message: 'Email or password is incorrect' } });
    res.status(200).json(loginUser);
  } catch (error) {
    logger.error('Error in loging user ' + error.message);
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
  const emailExist = await User.findOne({ email: emailToBeChecked });
  if (emailExist)
    return res.status(208).json({
      error: { message: 'Email already registered' }
    });
  // creates a new user
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    mobileNumber: req.body.mobileNumber,
    typeOfUser: req.body.typeOfUser
  });

  // save a new user
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    logger.error('Error in registering user ' + error.message);
    res.status(500).json({ error: { message: error.message } });
  }
});

module.exports = router;
