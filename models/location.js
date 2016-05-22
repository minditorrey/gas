'use strict';

var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    lattitude: { type: String, required: true },
    longitude: { type: String, required: true }
});

var Location = mongoose.model('Location', locationSchema);

module.exports = Location;