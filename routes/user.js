const express = require('express');
const router = express.Router();
const User = require('../schemas/User');

router.get('/join', (req, res, next) => {
  res.render('join.pug');
});

router.post('/save', async (req, res, next) => {
  const { userid, age } = req.body;
  const user = new User({ userid, age });

  try {
    const result = await user.save();
    res.json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
