'use strict';
var express = require('express');
var router = express.Router();

const { showItems } = require('./item.controller')

router.get('/showItems', showItems)



module.exports = router;