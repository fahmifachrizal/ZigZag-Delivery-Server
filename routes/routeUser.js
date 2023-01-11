const express = require('express')
const route = express()
const Controller = require('../controllers/controllerUser')
const { authentication, authorization } = require('../middlewares/auth')
route.use(express.urlencoded({extended:true}))

route.post('/login', Controller.handleLogin)
route.post('/register', Controller.handleRegister)
route.post('/OAuthApple', Controller.handleOAuthApple)
route.post('/OAuthGoogle', Controller.handleOAuthGoogle)


module.exports = route