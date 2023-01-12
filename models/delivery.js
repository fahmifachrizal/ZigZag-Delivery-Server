'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Delivery.hasOne(models.Package,{foreignKey:'DeliveryId'})
    }
  }
  Delivery.init({
    status: { 
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: { msg: 'Payment status is required' },
        notEmpty: { msg: 'Payment status is required' },
      }
    },
    lon: { 
      type:DataTypes.FLOAT,
      allowNull:false,
      validate:{
        notNull: { msg: 'Longitude is required' },
        notEmpty: { msg: 'Longitude is required' },
      }
    },
    lat: { 
      type:DataTypes.FLOAT,
      allowNull:false,
      validate:{
        notNull: { msg: 'Latitude is required' },
        notEmpty: { msg: 'Latitude is required' },
      }
    },
    duration: { 
      type:DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Delivery',
  });
  return Delivery;
};