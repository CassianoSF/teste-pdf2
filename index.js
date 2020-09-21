const port = 3003

const express = require('express')
// const cors = require('cors')
const server = express()
const allowCors = require('./cors')

server.use(allowCors)
server.use(express.static('public'));

// server.use(cors());
// server.options('*', cors());


server.listen(port, function () {
  console.log(`BACKEND is running on port ${port}`)
})

module.exports = server

