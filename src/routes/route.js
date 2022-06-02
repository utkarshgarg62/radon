const express = require('express');
//const externalModule =require('../logger/logger.js');
//const externalModule=require('../util/helper.js');
const externalModule=require('../validator/formatter.js');



const router = express.Router();



router.get('/test-me', function (req, res) {
    //console.log('The constant in logger route has a value '+externalModule.endpoint)
    //console.log('The current batch is '+externalModule.batch)
    //externalModule.log()
    //res.send('Hello, Here Problem 1 Solution.')
    //externalModule.a()
    // res.send('Hello, Here Problem 2 Solution.')
    // externalModule.pd()
    // externalModule.pm()
    // externalModule.pb()
    res.send('Hello, Here Problem 3 Solution.')
    externalModule.t()
    externalModule.lc()
    externalModule.uc()



});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason