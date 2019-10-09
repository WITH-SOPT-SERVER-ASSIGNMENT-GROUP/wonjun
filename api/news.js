var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('This is news');
});

router.get('/like',function(req,res,next){
    res.send('news like please');
});

module.exports = router;
