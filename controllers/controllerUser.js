const { User } = require('../models')
const { hashPassword, comparePassword } = require('../helpers/hash')

class Controller {
  static async register(req, res, next) {
    try {
        const { name, email, password, source } = req.body
        if (source !== 'Email') {
          password = 'SERVER-GENERATED-PASSWORD' 
        } else {
          password = hashPassword(password)
        }
        const [createdUser, isCreated] = await User.findOrCreate({
            where: {email},
            defaults: { 
              name:email.split('@')[0],
              email, 
              password, 
              source }
        })
        if (isCreated){
          let data = {name: createdUser.name, email:createdUser.email, source} 
          res.status(201).json({ statusCode: 201, message:'New record has been created', data })
        } else {
          throw {name : 'Existed'}
        }
        
    } catch (error) {
        next(error)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      if (!email) throw {name:'Email is required'}
      if (!password) throw {name:'Password is required'}
  
      const data = await User.findOne({where: {email}})
      if (!data) throw {name: 'Invalid email/password'}
      if (!comparePassword(password, data.password)) throw {name: 'Invalid email/password'}
      
      const payload = {id:data.id}
      const access_token = signToken(payload)
  
      const jsonData = {access_token}
      res.status(200).json(jsonData)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller
