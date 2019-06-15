const express = require('express');
var path = require('path');

const router = express.Router();
router.use(express.static(__dirname + '/'));

router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname + '../../view/index.html'));
});

module.exports = router;