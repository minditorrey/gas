var express = require('express');
var router = express.Router();
var path = require('path');

var Location = require('../models/location');

router.route('/')
	.get((req, res) => {
		Location.find({}, (err, locations) => {
			res.status(err ? 400 : 200).send(err || locations);
		});
	})

	.post((req, res) => {
		var location = new Location(req.body);
		location.save((err, savedlocation) => {
		res.status(err ? 400 : 200).send(err || location);
		});	
	});


module.exports = router;