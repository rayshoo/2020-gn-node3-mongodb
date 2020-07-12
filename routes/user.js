const express = require('express');
const router = express.Router();
const User = require('../schemas/User');

router.get('/join', (req, res, next) => {
  res.render('join.pug');
});

router.put('/save', async (req, res, next) => {
  const { _id, age } = req.body;
  const result = await User.update({ _id }, { age });
  // res.json(result);
  res.redirect('/user/list');
});

router.delete('/delete', async (req, res, next) => {
  const _id = req.body._id;
  const result = await User.remove({ _id });
  res.json(result);
});

router.post('/save', async (req, res, next) => {
  const { userid, age } = req.body;
  const user = new User({ userid, age });

  try {
    const result = await user.save();
    // res.json(result);
    res.redirect('/user/list');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/list', async (req, res, next) => {
  const result = await User.find();
  res.render('list.pug', { result });
});

router.get('/update/:id', async (req, res, next) => {
  const result = await User.find({ _id: req.params.id });
  // res.json(result);
  res.render('update.pug', { result: result[0] });
});

module.exports = router;
