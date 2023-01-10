// const { Food, User, Log } = require('../models')
const midtransClient = require('midtrans-client');

class Controller {
  static async getPayment(req, res, next) {
    try {

        // let customer = User.findByPk(req.user.id)
        let core = new midtransClient.CoreApi({
          isProduction : false,
          serverKey : process.env.MIDTRANS_SERVER_KEY,
          clientKey : process.env.MIDTRANS_CLIENT_KEY
        });

        let parameter = {
          "payment_type": "gopay",
          "transaction_details": {
            "gross_amount": 12145,
            "order_id": new Date().getTime(),
          },
          "gopay": {
            "enable_callback": false,                // optional
            "callback_url": "someapps://callback"   // optional
          }
        };

        core.charge(parameter)
        .then((chargeResponse)=>{
          res.status(201).json(chargeResponse)
          // console.log(chargeResponse);
        });


        // let token  = await snap.createTransaction(parameter)

        // await Payment.create({userId:req.user.id, itemId:1, orderId:order_id, isPayment:false})
        //     console.log(token)
        //     res.status(200).json({token, orderId:order_id})
    } catch (error) {
      console.log(error, 'paymentttt')
      next()
    }
  }
}

module.exports = Controller