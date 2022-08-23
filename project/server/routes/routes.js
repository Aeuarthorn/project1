var express = require('express');
var router = express.Router()
const { register, login, authens, webhook, applyloan, applyloanID} = require("../middleware/middleware");

//route api
router.post('/register', register)
router.post('/login', login)
router.post('/authens', authens)

router.post('/webhook', webhook)
router.get('/applyloan', applyloan)
router.get('/applyloan/:id', applyloanID)



module.exports = router;