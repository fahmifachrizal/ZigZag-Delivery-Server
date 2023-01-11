const express = require('express')
const route = express()
const Controller = require('../controllers/controllerPayment')
const { authentication, authorization } = require('../middlewares/auth')
route.use(express.urlencoded({extended:true}))

route.get('/', Controller.generatePayment)

module.exports = route