const express = require('express')
const route = express()

route.get('/', (req, res, next) => {
  console.log('Server is running')
})

const routeUser = require('./routeUser')
const routePayment = require('./routePayment')
// const routeLog = require('./routeLog')
// const routeCategory = require('./routeCategory')
// const routePublic = require('./routePublic')

route.use('/users', routeUser)
route.use('/payment', routePayment)
// route.use('/categories', routeCategory)
// route.use('/logs', routeLog)
// route.use('/public', routePublic)

module.exports = route