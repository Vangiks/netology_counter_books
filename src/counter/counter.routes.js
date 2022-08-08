const express = require('express'),
  router = express.Router(),
  CounterController = require('./counter.controller');

router.route('/:bookId').get(CounterController.getCounter);
router.route('/:bookId/incr').post(CounterController.increaseCounter);

module.exports = router;
