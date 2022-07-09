const { Model, DataTypes } = require('sequelize');

class Alunos extends Model {
  static init(sequelize) {
    super.init(
    {
      nome: DataTypes.STRING(50),
    },
    {
      sequelize
    })
  }
  static associate(models) {
    this.belongsToMany(models.Cursos, { foreignKey: 'aluno_id', through: 'cursos_alunos', as: 'cursos' });
  }
}

module.exports = Alunos;