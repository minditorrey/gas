'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/alerts', require('./alerts'));


module.exports = router;