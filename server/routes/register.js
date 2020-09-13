const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

router.get('/', (req, res, next) => {
  res.send({ message: 'hello' });
});

router.post('/', async (req, res, next) => {
  //Must use passport
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
    const user = { ...req.body, password: { bcrypt: hashedPassword } };

    console.log(user);
    User.create(user, err => {
      if (err) return next(err);
      res.redirect('/login');
    });
  } catch {
    res.redirect('/register');
  }
});

module.exports = router;
