const express = require('express');
const router = express.Router();
const passport = require('passport');

const getCurrentUser = (req, res) => {
  // I'm picking only the specific fields its OK for the audience to see publicly
  // never send the whole user object in the response, and only show things it's OK
  // for others to read (like ID, name, email address, etc.)
  console.log(req, res);
};

router.get('/', (req, res, next) => {
  res.send({ message: 'hello' });
});

router.post(
  '/',
  passport.authenticate('local', (req, res) => {
    console.log(req);
  })
);

module.exports = router;
