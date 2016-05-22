var express = require('express');
var router = express.Router();
var path = require('path');


var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'rZemgM1ghVCueeLGE5Xg0VKGs',
  consumer_secret: 'yZ5auP5p3TQ0XPIaI1SaSjBxVHLPdeR1F6CMz2Vb3xX441bK0i',
  access_token_key: '264014691-SniC4u10VFOajhhyFVYVsy09lbruPZN7PVyESTKx',
  access_token_secret: '5rJxzCGaAvqQxSGhv5b5cJsBH6QvVga9Ev32ApGVxMFkS'
});

router.post('/', (req, res) => {
	var status = {status: `Grimes Alert: Zombie sighting at ${req.body.location} with reports of ${req.body.size} zombies, traveling ${req.body.trajectory}.`};
	client.post('statuses/update', status, function(error, tweet, response) {
  if(error) {
  	console.log('error');
  }
  // console.log(tweet);  // Tweet body. 
  // console.log(response);  // Raw response object. 
});	
});

router.get('/', (req, res) => {
  var indexPath = path.join(__dirname, '../view/index.html');
  res.sendFile(indexPath);
});





module.exports = router;