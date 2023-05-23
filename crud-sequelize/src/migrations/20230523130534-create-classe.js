'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_start: {
        type: Sequelize.DATEONLY
      },
      docente_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {model: 'Users', key: 'id' }
      },
      nivel_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {model: 'Niveis', key: 'id' }
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
    await queryInterface.dropTable('classes');
  }
};