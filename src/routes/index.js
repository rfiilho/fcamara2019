const express = require('express');
var path = require('path');
var slack = require('../services/notification');


const router = express.Router();
router.use(express.static(__dirname + '../../view/'));



router.post('/notification/', (req, res) => {
       res.status(200).send('');
   });

module.exports = router;
