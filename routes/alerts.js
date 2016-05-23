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

router.route('/:id')
  	.put((req, res) => {
    	Alert.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, alert) => {
      res.status(err ? 400 : 200).send(err || alert);
    })
  })
    .delete((req, res) => {
    	var alert = (req.body)
    	Alert.findByIdAndRemove(req.params.id, (err, alert) => {
      		res.status(err ? 400 : 200).send(err);
    	})
  	})
  	.get((req, res) => {
    	Alert.findById(req.params.id, function (err, alert) {
    	res.status(err ? 400 : 200).send(err || alert);
    	console.log('alert:', alert);
  		});
  	});

module.exports = router;