const express = require('express');
var router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');

router.get('/', isLoggedIn(), (req, res, next) => {
  res.send({ message: 'hello' });
});
module.exports = router;
