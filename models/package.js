'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Package.hasMany(models.RecipientPackage,{foreignKey:'PackageId'})
      Package.belongsTo(models.User,{foreignKey:'UserId'})
      Package.belongsTo(models.Delivery,{foreignKey:'DeliveryId'})
      Package.belongsTo(models.Payment,{foreignKey:'PaymentId'})
    }
  }
  Package.init({
    type: { 
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: { msg: 'Package type is required' },
        notEmpty: { msg: 'Package type is required' },
      }
    },
    note: { 
      type:DataTypes.STRING,
    },
    dimension: { 
      type:DataTypes.FLOAT,
      allowNull:false,
      validate:{
        notNull: { msg: 'Package dimension is required' },
        notEmpty: { msg: 'Package dimension is required' },
      }
    },
    UserId: { 
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull: { msg: 'UserId is required' },
        notEmpty: { msg: 'UserId is required' },
      }
    },
    PaymentId: { 
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull: { msg: 'PaymentId is required' },
        notEmpty: { msg: 'PaymentId is required' },
      }
    },
    DeliveryId: { 
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull: { msg: 'DeliveryId is required' },
        notEmpty: { msg: 'DeliveryId is required' },
      }
    },
  }, {
    sequelize,
    modelName: 'Package',
  });
  return Package;
};