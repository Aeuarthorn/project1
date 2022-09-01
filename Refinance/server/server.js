const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
// const dotenv = require('dotenv')
const { readdirSync } = require('fs')
const connectDB = require('./config/database')
require('dotenv').config();


const app = express()
const port = process.env.PORT

//Middleware
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '20mb' }))
app.use(cors())
 
//COnnectDB
connectDB()
 
//Route
// how to use api Router #1 (mannnual)
// app.use('/api', require('./routes/api'))

//how to use api Router #2 (auto)
readdirSync('./routes').
    map((r) =>
        app.use('/api', require('./routes/' + r))
    )



app.listen(port, () => {
    console.log('Server is running on port ' + port)
})

