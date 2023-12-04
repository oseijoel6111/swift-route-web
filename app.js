const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()
const dbConnection = require('./dbConfig/connect')
const {shortenerRoute} = require('./routes')

const PORT = process.env.PORT || 4000

const app = express()
// setting required middlewares
app.use(cors())
app.use(express.json())
app.use(helmet())

// Shortener routes
app.use('/api/v1/shorten', shortenerRoute)

const startServer = async()=>{
        try { 
           await dbConnection.authenticate()
           console.log('DB connection established');

          // start server
          app.listen(PORT, ()=>{
            console.log(`Server started on http://localhost:${PORT}`);
        }) 
        } catch (error) {
        console.log(error);  
        }
}

startServer()