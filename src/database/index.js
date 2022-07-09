const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Alunos = require('../resources/alunos/alunos.model');
const Cursos = require('../resources/cursos/cursos.model');

const connection = new Sequelize(dbConfig);

Alunos.init(connection);
Cursos.init(connection);

Alunos.associate(connection.models);
Cursos.associate(connection.models);

module.exports = connection;