'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
var http = require('http');
var https = require('https');
var request = require('request');

var Location = require('../models/location');


router.get('/:location', (req, res) => {
	console.log('req.params.location:', req.params.location);
	request(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.location}&key=AIzaSyAgbe_EmhvD_r_ymCjTMJrMUnxrPSMwALo`, function (error, response, body) {
		// console.log('response:', res);
		body = JSON.parse(body)
		// console.log('body:', JSON.parse(body));
		console.log('results:', body.results);
		var newlocation = new Location();
		newlocation.lattitude = body.results[0].geometry.location.lat;
        newlocation.longitude = body.results[0].geometry.location.lng;

        newlocation.save(function (err, location) {
        	console.log('location:', location);
		res.send(location);
        });
	});
	});
	

module.exports = router;