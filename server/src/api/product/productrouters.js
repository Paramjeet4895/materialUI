'use strict';
var express = require('express');
var router = express.Router();
const auth=require('../middleware/auth')

const { addProduct } = require('./controllers/addProduct')
const { deleteProduct } = require('./controllers/deleteProduct')
const { showProducts } = require('./controllers/showProducts')
const { showProduct } = require('./controllers/showProduct')
const { updateProduct } = require('./controllers/updateProduct')



router.post('/addProduct',auth, addProduct)
router.delete('/deleteProduct/:id',auth, deleteProduct)
router.get('/showProducts', auth, showProducts)
router.get('/showProduct/:id', auth, showProduct)
router.patch('/updateProduct/:id',auth, updateProduct)


module.exports = router;