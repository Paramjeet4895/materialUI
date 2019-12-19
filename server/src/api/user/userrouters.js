'use strict';
var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth')

const { addUser } = require('./controllers/addUser')
const { login } = require('./controllers/login')
const { logout } = require('./controllers/logout')
const { updateProfile } = require('./controllers/updateProfile')
const { deleteAccount } = require('./controllers/deleteAccount')
const { showme } = require('./controllers/showme')
const { addUserdata } = require('./controllers/addUser')

router.post('/adduser', addUser)
router.post('/loginuser', login)
router.post('/logout', auth, logout)
router.get('/verify/:token', addUserdata)
router.patch('/update/me', auth, updateProfile)
router.delete('/deleteaccount/me', auth, deleteAccount)
router.get('/showme', auth, showme)


module.exports = router;