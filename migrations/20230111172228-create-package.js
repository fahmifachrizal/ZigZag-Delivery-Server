'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Packages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      note: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dimension: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      UserId: {
        allowNull: false,
        references:{
          model:'Users',
          key:'id'
        },
        type: Sequelize.INTEGER
      },
      PaymentId: {
        allowNull: false,
        references:{
          model:'Payments',
          key:'id'
        },
        type: Sequelize.INTEGER
      },
      DeliveryId: {
        allowNull: false,
        references:{
          model:'Deliveries',
          key:'id'
        },
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Packages');
  }
};