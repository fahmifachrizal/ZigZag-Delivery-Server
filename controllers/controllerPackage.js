const { Package, Delivery } = require('../models')

class Controller {
  static async saveRecipient(req, res, next) {
    try {
      const UserId = req.user.id
      const { name, phone, address, lon, lat } = req.body
      // validasi input
      const data = await Recipient.create({ name, phone, address, lon, lat, UserId })
      res.status(201).json({ statusCode: 201, message: 'New record has been created', data })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = Controller