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
    type: DataTypes.STRING,
    note: DataTypes.STRING,
    dimension: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    PaymentId: DataTypes.INTEGER,
    DeliveryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Package',
  });
  return Package;
};