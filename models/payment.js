'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.hasOne(models.Package,{foreignKey:'PaymentId'})
    }
  }
  Payment.init({
    status: { 
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: { msg: 'Payment status is required' },
        notEmpty: { msg: 'Payment status is required' },
      }
    },
    amount: { 
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull: { msg: 'Price amount is required' },
        notEmpty: { msg: 'Price amount is required' },
      }
    },
    identifier: { 
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: { msg: 'Payment identifier is required' },
        notEmpty: { msg: 'Payment identifier is required' },
      }
    },
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};