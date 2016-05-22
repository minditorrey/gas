'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/alerts', require('./alerts'));
router.use('/twitter', require('./twitter'));
router.use('/map', require('./map'));
router.use('/locations', require('./locations'));


module.exports = router;