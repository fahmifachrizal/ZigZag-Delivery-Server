'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Package,{foreignKey:'UserId'})
      User.hasMany(models.Recipient,{foreignKey:'UserId'})
    }
  }
  User.init({
    name: { 
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: { msg: 'Name is required' },
        notEmpty: { msg: 'Name is required' },
      }
    },
    email: { 
      type:DataTypes.STRING,
      allowNull:false,
      unique:{ msg: 'Email must be unique' },
      validate:{
        notNull: { msg: 'Email is required' },
        notEmpty: { msg: 'Email is required' },
        isEmail: { msg: 'Invalid email format' },
      }
    },
    password: { 
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: { msg: 'Password is required' },
        notEmpty: { msg: 'Password is required' },
      }
    },
    source: { 
      type:DataTypes.STRING,
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};