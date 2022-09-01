const express = require('express')
const router = express.Router()

//Controllers
const { register,login,  listUser, editUser, deleteUser } = require('../controllers/auth')

//@Endpoint http://localhost:3000/register
//@Method   POST
//@Access   Public
router.post('/register', register);

//@Endpoint http://localhost:3000/login
//@Method   POST
//@Access   Public
router.post('/login', login);

//@Endpoint http://localhost:3000/auth
//@Method   GET
//@Access   Public
router.get('/auth', listUser);

//@Endpoint http://localhost:3000/auth
//@Method   PUT
//@Access   Public
router.put('/auth', editUser);

//@Endpoint http://localhost:3000/auth
//@Method   DELETE
//@Access   Public
router.delete('/auth', deleteUser);

module.exports = router