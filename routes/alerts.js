var express = require('express');
var router = express.Router();
var path = require('path');

var Alert = require('../models/alert');

router.route('/')
	.get((req, res) => {
		Alert.find({}, (err, alerts) => {
			res.status(err ? 400 : 200).send(err || alerts);
		});
	})

	.post((req, res) => {
		var alert = new Alert(req.body);
		alert.save((err, savedAlert) => {
		res.status(err ? 400 : 200).send(err || alert);
		});	
	});


module.exports = router;