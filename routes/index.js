const express = require('express')
const route = express()

const routePayment = require('./routePayment')
// const routeLog = require('./routeLog')
// const routeUser = require('./routeUser')
// const routeCategory = require('./routeCategory')
// const routePublic = require('./routePublic')

route.use('/payment', routePayment)
// route.use('/categories', routeCategory)
// route.use('/users', routeUser)
// route.use('/logs', routeLog)
// route.use('/public', routePublic)

module.exports = route