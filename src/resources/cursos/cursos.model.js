const { Model, DataTypes } = require('sequelize');

class Cursos extends Model {
  static init(sequelize) {
    super.init(
    {
      descricao: DataTypes.STRING(50),
      ementa: DataTypes.TEXT,
    },
    {
      sequelize
    })
  }
  static associate(models) {
    this.belongsToMany(models.Alunos, { foreignKey: 'curso_id', through: 'cursos_alunos', as: 'alunos' });
  }
}

module.exports = Cursos;