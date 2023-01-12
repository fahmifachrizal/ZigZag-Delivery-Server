const { Delivery, Payment, Package } = require('../models')
const midtransClient = require('midtrans-client');

class Controller {
  static async createPayment(req, res, next) {
    try {
      // console.log(req.body)
      // const UserId = req.user.id
      // validasi input
      const { lon, lat, duration } = req.body
      const { paymentAmount, paymentIdentifier } = req.body
      const dataDelivery = await Delivery.create({status:'Waiting', lon, lat, duration})
      const dataPayment = await Payment.create({status:'Waiting', amount:paymentAmount, identifier:paymentIdentifier})

      const { type, note, dimension } = req.body
      console.log({ type, note, dimension, UserId:1, PaymentId:dataPayment.id, DeliveryId:dataDelivery.id })
      const dataPackage = await Package.create({ type, note, dimension, UserId:1, PaymentId:dataPayment.id, DeliveryId:dataDelivery.id })
      
      console.log(dataPackage)
      res.status(201).json({ statusCode: 201, message: 'New record has been created', data:dataPackage })
    } catch (error) {
      console.log(error)
      // res.status(500).json({ statusCode: 500, error })
    }
  }

  static async handlePayment(req, res, next) {
    try {

      let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction : false,
        serverKey : process.env.MIDTRANS_SERVER_KEY
      });

      let parameter = {
          "transaction_details": {
              "order_id": new Date(),
              "gross_amount": 10000
          },
          "credit_card":{
              "secure" : true
          },
          "customer_details": {
              "first_name": "budi",
              "last_name": "pratama",
              "email": "budi.pra@example.com",
              "phone": "08111222333"
          }
      };
      
      snap.createTransaction(parameter)
      .then((transaction)=>{
        // transaction token
        let transactionToken = transaction.token;
        res.status(201).json({transactionToken})
    })

    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller