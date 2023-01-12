const express = require('express')
const route = express()
const Controller = require('../controllers/controllerUser')
const { authentication, authorization } = require('../middlewares/auth')
route.use(express.urlencoded({extended:true}))

route.post('/login', Controller.login)
route.post('/register', Controller.register)


module.exports = route