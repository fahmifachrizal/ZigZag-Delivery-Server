'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipient.hasMany(models.RecipientPackage,{foreignKey:'RecipientId'})
      Recipient.belongsTo(models.User,{foreignKey:'UserId'})
    }
  }
  Recipient.init({
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    address: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    lon: DataTypes.INTEGER,
    lat: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipient',
  });
  return Recipient;
};