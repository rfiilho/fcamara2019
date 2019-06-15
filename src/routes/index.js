const express = require('express');

const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        'status': 'UP',
        'title': 'Hackaton FCamara API'
    });
});

router.get('/notification', function (req, res, next) {
    res.status(200).send("OKAY");
});

module.exports = router;
