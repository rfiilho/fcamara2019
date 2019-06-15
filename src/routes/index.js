const express = require('express');

const router = express.Router();
const path = require('path');

router.get('/', function (req, res, next) {
    res.status(200).send({
        'status': 'UP',
        'title': 'Hackaton FCamara API'
    });
});

router.get('/notification', function (req, res, next) {
    res.status(200).sendFile(path.join(__dirname+"../../services/notification.js"));
});

module.exports = router;
