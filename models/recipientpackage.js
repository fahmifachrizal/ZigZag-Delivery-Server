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
    RecipientId: { 
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull: { msg: 'RecipientId is required' },
        notEmpty: { msg: 'RecipientId is required' },
      }
    },
    PackageId: { 
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull: { msg: 'PackageId is required' },
        notEmpty: { msg: 'PackageId is required' },
      }
    },
  }, {
    sequelize,
    modelName: 'RecipientPackage',
  });
  return RecipientPackage;
};