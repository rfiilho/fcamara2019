const express = require('express');
var path = require('path');
var slack = require('../services/notification');


const router = express.Router();
<<<<<<< HEAD
const app = express()

app.use(express.static('../src/view'))

// const indexHTML = require('../src/view/index.html')
router.get('/', function (req, res, next) {
    
    res.sendFile(__dirname+'../view/index.html')
    
    // res.status(200).send({
    //     'status': 'UP',
    //     'title': 'Hackaton FCamara API'
    // });
});

router.get('/home', function (req,res,next) {
})

// router.get('/filas',function(req, res,next){
//     res.send(indexHTML)
// })
=======
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

>>>>>>> 17d453aa520699de779d14323bb1c944dba52db3

module.exports = router;
