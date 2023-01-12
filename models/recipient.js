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
    name: { 
      type:DataTypes.STRING,
      allowNull:false,
      unique:{msg: 'Name already exists'},
      validate:{
        notNull: { msg: 'Name is required' },
        notEmpty: { msg: 'Name is required' },
      }
    },
    phone: { 
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull: { msg: 'Phone is required' },
        notEmpty: { msg: 'Phone is required' },
      }
    },
    address: { 
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: { msg: 'Address is required' },
        notEmpty: { msg: 'Address is required' },
      }
    },
    UserId: { 
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: { msg: 'UserId is required' },
        notEmpty: { msg: 'UserId is required' },
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
  }, {
    sequelize,
    modelName: 'Recipient',
  });
  return Recipient;
};