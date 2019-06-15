const express = require('express');
var path = require('path');
var slack = require('../services/notification');


const router = express.Router();
router.use(express.static(__dirname + '../../view/'));

router.post('/notification/', (req, res) => {
    res.status(200).send('');
});

router.get('/manicure/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../view/manicure.html'));
});

router.get('/massagem/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../view/massagem.html'));
});

router.get('/videogame/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../view/videogame.html'));
});


module.exports = router;
