'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('cursos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      ementa: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down (queryInterface, Sequelize) {
     return queryInterface.dropTable('cursos');
  }
};
