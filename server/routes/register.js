const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send({ message: 'hello' });
});

router.post('/', (req, res, next) => {
  console.log(req.body);

  User.create(req.body, err => {
    if (err) return next(err);
    console.log('created');
  });

  return next();
  // Create user
});

module.exports = router;
