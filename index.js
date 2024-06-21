require ('dotenv').config()

const express = require('express')

const cors = require("cors")


const router = require('./routes/routes')

require('./db/connection')



const server = express()
server.use(cors())
server.use(express.json())

server.use(router)

const PORT = 3000 || process.env.PORT

server.listen(PORT,()=>{
    console.log(`User Server started at port : ${PORT}`);
})

server.get('/',(req,res)=>{
    res.status(200).send(`<h1>User server started and awaited </h1>`)
})