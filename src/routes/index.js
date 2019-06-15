const express = require('express');

const router = express.Router();
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

module.exports = router;
