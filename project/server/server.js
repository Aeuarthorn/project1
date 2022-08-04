var express = require('express')
var cors = require('cors')
var app = express()
const router = require('./routes/routes')
const bodyParser = require('body-parser')
const { applyloan, applyloanID} = require('./middleware/middleware')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())
app.use(express.json('./'))
app.use('/', router)
app.use('/applyloan', applyloan)
app.use('/applyloan/:id', applyloanID)


app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})