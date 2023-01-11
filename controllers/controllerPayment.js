// const { Food, User, Log } = require('../models')
const midtransClient = require('midtrans-client');

class Controller {
  static async generatePayment(req, res, next) {
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
      console.log(error, 'paymentttt')
      next()
    }
  }
}

module.exports = Controller