const express = require('express'),
  router = express.Router(),
  counterModule = require('./counter/counter.module');

router.use('/counter', counterModule.routes);

module.exports = router;
