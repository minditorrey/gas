var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req, res) => {
  var indexPath = path.join(__dirname, '../view/index.html');
  res.sendFile(indexPath);
});


module.exports = router;