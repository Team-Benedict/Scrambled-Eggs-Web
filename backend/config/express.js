const express = require('express')
const indexRouter = require('../src/routes/index.route.js')
const app = express()

app.use('/', indexRouter)

module.exports = app
