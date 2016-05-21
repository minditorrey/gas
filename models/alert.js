
'use strict';

var mongoose = require('mongoose');

var alertSchema = new mongoose.Schema({
    reportedBy: { type: String, required: true },
    location: {type: String, required: true},
    size: { type: String },
    trajectory: { type: String },
    injuries: { type: String }
});

var Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;