'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('cursos_alunos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      curso_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cursos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'alunos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      uniqueKeys: {
          Items_unique: {
              fields: ['curso_id', 'aluno_id'],
          }
      }
    });
  },

  down (queryInterface, Sequelize) {
     return queryInterface.dropTable('cursos_alunos');
  }
};
