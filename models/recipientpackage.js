'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipientPackage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RecipientPackage.belongsTo(models.Recipient, {foreignKey:'RecipientId'})
      RecipientPackage.belongsTo(models.Package, {foreignKey:'PackageId'})
    }
  }
  RecipientPackage.init({
    RecipientId: DataTypes.INTEGER,
    PackageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RecipientPackage',
  });
  return RecipientPackage;
};